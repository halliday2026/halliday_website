export interface Service {
  icon: string;
  title: string;
  description: string;
  details: string;
}

export const services: Service[] = [
  {
    icon: '🔍',
    title: 'AI Readiness Assessment',
    description: 'We evaluate where your business stands today and identify the highest-impact opportunities for AI.',
    details: 'Our comprehensive assessment examines your current workflows, tools, and pain points. We interview key team members, review your processes, and deliver a clear report showing exactly where AI can save you time and money — no technical jargon, just actionable insights.',
  },
  {
    icon: '🗺️',
    title: 'Strategy Development',
    description: 'Get a clear, step-by-step roadmap tailored to your business goals and budget.',
    details: 'We create a prioritized implementation plan that fits your timeline and resources. Each recommendation includes expected outcomes, estimated costs, and a realistic timeline. You\'ll know exactly what to do first, second, and third — and why.',
  },
  {
    icon: '⚙️',
    title: 'Implementation Guidance',
    description: 'We walk alongside you through every step, from choosing the right tools to getting them up and running.',
    details: 'We help you select, set up, and configure the right AI tools for your specific needs. Whether it\'s automating customer emails, streamlining scheduling, or improving your marketing, we handle the technical details so you can focus on running your business.',
  },
  {
    icon: '🎓',
    title: 'Team Training',
    description: 'Empower your team with hands-on training that builds confidence, not confusion.',
    details: 'Our training sessions are designed for real people, not engineers. We use plain language, real examples from your industry, and hands-on practice. Your team will walk away knowing exactly how to use their new AI tools effectively and confidently.',
  },
  {
    icon: '📊',
    title: 'Process Optimization',
    description: 'Identify bottlenecks and transform your workflows with intelligent automation.',
    details: 'We analyze your existing processes to find repetitive tasks that AI can handle faster and more accurately. From data entry to inventory management, we help you reclaim hours every week so you can focus on growth.',
  },
  {
    icon: '🤝',
    title: 'Ongoing Support',
    description: 'We don\'t disappear after setup. Get continuous guidance as your AI journey evolves.',
    details: 'Technology changes fast, and we\'re here to help you keep up. Our ongoing support includes regular check-ins, tool updates, new opportunity identification, and a direct line to our team whenever you have questions.',
  },
];
