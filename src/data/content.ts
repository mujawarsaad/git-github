import { Terminal, Server, Cloud, Repeat, ShieldCheck, Cpu, Globe, Database, Activity, Code } from 'lucide-react';

export const SERVICES = [
  {
    title: "Docker Containerization",
    icon: Terminal,
    description: "Package applications and dependencies into standardized units for seamless deployment across any environment.",
    benefits: "Eliminates 'works on my machine' issues, reduces deployment time, and maximizes resource utilization.",
    useCases: "Microservices architectures, legacy app modernization, scalable web apps."
  },
  {
    title: "CI/CD Pipeline Setup",
    icon: Repeat,
    description: "Automate code testing, integration, and deployment using Jenkins and GitHub Actions.",
    benefits: "Faster time-to-market, fewer manual errors, and continuous delivery of features.",
    useCases: "Agile development teams, automated testing, zero-downtime deployments."
  },
  {
    title: "Linux Server Administration",
    icon: Server,
    description: "Comprehensive management, hardening, and optimization of Linux-based infrastructure.",
    benefits: "Enhanced security posture, maximum uptime, and fine-tuned performance.",
    useCases: "Enterprise web hosting, database servers, private cloud environments."
  },
  {
    title: "Cloud Infrastructure Setup",
    icon: Cloud,
    description: "Architect and provision scalable cloud environments using AWS fundamentals and best practices.",
    benefits: "High availability, auto-scaling capabilities, and cost-optimized resource allocation.",
    useCases: "Startup SaaS platforms, high-traffic websites, disaster recovery setups."
  },
  {
    title: "AI Workflow Automation",
    icon: Cpu,
    description: "Design and implement intelligent business workflows using n8n and custom automation scripts.",
    benefits: "Reduces repetitive manual tasks, lowers operational costs, and integrates disparate systems.",
    useCases: "Data synchronization, automated customer onboarding, intelligent alerting."
  },
  {
    title: "Monitoring & Maintenance",
    icon: Activity,
    description: "Implement robust observability stacks to track application health and infrastructure metrics.",
    benefits: "Proactive issue resolution before users are impacted, capacity planning data.",
    useCases: "Mission-critical applications, SLA-bound services, performance bottleneck analysis."
  },
  {
    title: "Website & App Deployment",
    icon: Globe,
    description: "End-to-end deployment services for front-end, back-end, and full-stack applications.",
    benefits: "Secure configurations, SSL management, and optimized asset delivery.",
    useCases: "React/Next.js apps, Python/Django/Flask backends, Node.js services."
  },
  {
    title: "Technical Support Services",
    icon: ShieldCheck,
    description: "Dedicated IT support for resolving complex infrastructure and deployment issues.",
    benefits: "Rapid incident response, reduced downtime, and expert root-cause analysis.",
    useCases: "Tier 3 technical escalations, legacy system troubleshooting, emergency recovery."
  }
];

export const PROJECTS = [
  {
    title: "Cash Counter Application",
    tech: "Python, Flask, SQLite",
    description: "Developed and deployed a robust financial tracking application for retail operations. Handled end-to-end deployment on a hardened Linux VPS with automated backups.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#"
  },
  {
    title: "Dockerized Web App Architecture",
    tech: "Docker, Nginx, React, Node.js",
    description: "Architected a multi-container environment for a SaaS product. Implemented reverse proxy routing, SSL termination, and secure inter-container networking.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#"
  },
  {
    title: "Jenkins CI/CD Automation",
    tech: "Jenkins, Git, Bash, AWS EC2",
    description: "Built a fully automated continuous integration and delivery pipeline. Reduced deployment time by 75% and implemented automated testing gates before production release.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#"
  },
  {
    title: "Linux Server Hardening",
    tech: "Ubuntu, UFW, Fail2Ban, SSH Keys",
    description: "Secured bare-metal infrastructure for a financial services client. Implemented strict firewall rules, disabled password authentication, and set up intrusion detection.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rahul Desai",
    role: "CTO, FinTech Innovators",
    content: "Saad completely transformed our deployment process. What used to take our team three days of manual server configuration is now automated via GitHub Actions in under 10 minutes. Highly recommend his DevOps expertise."
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, RetailFlow",
    content: "We hired Saad for IT support and Linux server administration when our legacy systems kept crashing. He stabilized our infrastructure, containerized our apps with Docker, and we haven't experienced downtime since."
  }
];

export const FAQS = [
  {
    question: "What DevOps services do you offer?",
    answer: "I provide end-to-end DevOps solutions including CI/CD pipeline creation (Jenkins, GitHub Actions), Docker containerization, infrastructure as code, and continuous monitoring setups to ensure high availability."
  },
  {
    question: "Do you provide server management?",
    answer: "Yes, I offer comprehensive Linux server administration. This includes initial provisioning, security hardening, performance optimization, patch management, and ongoing maintenance for both VPS and bare-metal servers."
  },
  {
    question: "Can you deploy applications on cloud platforms?",
    answer: "Absolutely. I specialize in deploying scalable applications on cloud infrastructure, particularly using AWS fundamentals. I ensure your cloud architecture is secure, cost-effective, and designed for high availability."
  },
  {
    question: "Do you offer automation solutions?",
    answer: "Yes, automation is at the core of my services. Whether it's infrastructure automation through scripting, deployment automation via CI/CD pipelines, or business workflow AI automation using n8n, I help eliminate manual overhead."
  }
];
