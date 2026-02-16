import "@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const ALLOWED_ORIGIN = "https://hallidayinc.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { fullName, email, phoneNumber, bestTimeToCall, businessName, interestedIn, comments } = body;

    // Basic validation
    if (!fullName || !email || !comments) {
      return new Response(
        JSON.stringify({ error: "Full name, email, and comments are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Insert into Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase
      .from("website_contact_submission")
      .insert({ form_jsondata: { fullName, email, phoneNumber, bestTimeToCall, businessName, interestedIn, comments } });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Send email notification via SMTP
    try {
      const client = new SMTPClient({
        connection: {
          hostname: Deno.env.get("SMTP_HOST")!,
          port: Number(Deno.env.get("SMTP_PORT") || 587),
          tls: true,
          auth: {
            username: Deno.env.get("SMTP_USER")!,
            password: Deno.env.get("SMTP_PASS")!,
          },
        },
      });

      await client.send({
        from: Deno.env.get("SMTP_FROM") || "chris@hallidayinc.com",
        to: "chris@hallidayinc.com",
        subject: "New Call Request from Website",
        content: "auto",
        html: `<h2>New Call Request Received</h2>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phoneNumber || "Not provided"}</p>
<p><strong>Best Time:</strong> ${bestTimeToCall || "Not specified"}</p>
<p><strong>Business:</strong> ${businessName || "Not provided"}</p>
<p><strong>Interest:</strong> ${interestedIn || "Not specified"}</p>
<p><strong>Comments:</strong> ${comments}</p>`,
      });

      await client.close();
    } catch (emailErr) {
      console.error("SMTP error:", emailErr);
    }

    return new Response(
      JSON.stringify({ status: 200 }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
