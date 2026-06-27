// Edit builder notes here — full articles render on /blog/[slug]

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-mythos-ai-workspace-vision",
    title: "Building Mythos: My AI Workspace Vision",
    excerpt:
      "Why I started building a unified AI workspace and what I learned about product scope, model routing, and interface design.",
    date: "Mar 2025",
    readTime: "5 min read",
    category: "AI Products",
    tags: ["Mythos", "Product Design", "AI"],
    featured: true,
    content: [
      {
        type: "p",
        text: "Most people using AI today jump between ChatGPT, Claude, a search tab, a notes app, and maybe a slide tool. That fragmentation is exactly what Mythos is trying to solve — not by building another chatbot, but by thinking in workspaces.",
      },
      { type: "h2", text: "Why a workspace, not a chatbot" },
      {
        type: "p",
        text: "When I started Mythos, the goal wasn't to replicate existing AI apps. It was to design a single environment where research, writing, file understanding, and presentation direction could live together. Students and builders don't need five subscriptions — they need one coherent flow.",
      },
      {
        type: "ul",
        items: [
          "Multi-model support so users can pick the right tool for the task",
          "File upload and document understanding in the same interface",
          "Research workflows with citations instead of copy-paste chaos",
          "Memory-aware interaction across sessions (planned next)",
        ],
      },
      { type: "h2", text: "What I learned about scope" },
      {
        type: "p",
        text: "The hardest part wasn't API integration — it was deciding what belongs in v1. I had to be honest: Mythos is a working prototype, not a finished SaaS. That clarity helped me focus on interface architecture and workflow design instead of pretending every feature was live.",
      },
      {
        type: "quote",
        text: "A good prototype answers a question. Mythos asks: what if AI tools felt like a workspace instead of a vending machine?",
      },
      {
        type: "p",
        text: "Next steps include persistent memory, agent workflow chains, and a live slide generation module. Each of those is a product decision, not just a technical one — and that's the mindset I'm carrying forward.",
      },
    ],
  },
  {
    slug: "what-i-learned-from-ai-product-concepts",
    title: "What I Learned from Building AI Product Concepts",
    excerpt:
      "Reflections on turning AI ideas into structured products with pricing, user flows, and real platform thinking.",
    date: "Jan 2025",
    readTime: "6 min read",
    category: "Product Thinking",
    tags: ["SaaS", "Business", "AI"],
    content: [
      {
        type: "p",
        text: "There's a gap between 'I built an AI chatbot' and 'I built an AI product.' The second one requires pricing, onboarding, customer communication, and a clear sense of what the user is actually buying.",
      },
      { type: "h2", text: "Concepts need structure" },
      {
        type: "p",
        text: "Projects like MemoriaLife taught me that AI services need trust layers — payment flow, buyer confirmation, email communication, and onboarding. Without those, even a capable chatbot feels like a demo, not a business.",
      },
      {
        type: "ul",
        items: [
          "Define the service tiers before writing code",
          "Map the customer journey from landing page to first conversation",
          "Separate what's built from what's planned — honesty builds credibility",
          "Think about support and communication early, not as an afterthought",
        ],
      },
      { type: "h2", text: "Commerce background helps" },
      {
        type: "p",
        text: "Studying commerce gives me a lens for unit economics, customer segments, and process design. I don't treat that as separate from tech — it's part of how I evaluate whether a product idea is worth pursuing.",
      },
      {
        type: "quote",
        text: "An AI feature is not a product. A product is the full experience around that feature — including how someone pays, onboard, and comes back.",
      },
    ],
  },
  {
    slug: "how-i-think-about-ai-saas-platforms",
    title: "How I Think About AI SaaS Platforms",
    excerpt:
      "My approach to designing AI platforms with authentication, tiers, admin tools, and scalable feature planning.",
    date: "Nov 2024",
    readTime: "7 min read",
    category: "SaaS",
    tags: ["Kryvax", "Architecture", "Platforms"],
    content: [
      {
        type: "p",
        text: "Kryvax started as a question: what does AI look like when you treat it as platform infrastructure instead of a single feature? That meant thinking about users, billing, access control, and admin tooling from the beginning.",
      },
      { type: "h2", text: "Platform thinking vs. feature thinking" },
      {
        type: "p",
        text: "A chat interface is a feature. A platform includes authentication, plan tiers, usage tracking, model access control, and an admin dashboard. Kryvax explores all of that — even where some pieces are still in progress.",
      },
      {
        type: "ul",
        items: [
          "Landing page with clear pricing and plan differentiation",
          "User tiers that control model access and usage limits",
          "Admin dashboard for monitoring and configuration",
          "Agent routing for business, coding, and research tasks",
        ],
      },
      { type: "h2", text: "Why SQLite and auth matter early" },
      {
        type: "p",
        text: "Even in a student project, choosing real infrastructure patterns — auth, a database, API structure — forces better decisions than a mockup. You discover edge cases early: what happens when a free user hits a limit? Who can access which model?",
      },
      {
        type: "quote",
        text: "SaaS isn't a skin on top of AI. It's the system that makes AI usable, governable, and scalable.",
      },
    ],
  },
  {
    slug: "combining-commerce-ai-product-building",
    title: "Combining Commerce, AI, and Product Building",
    excerpt:
      "How studying commerce alongside building tech projects shapes my approach to business-aware product development.",
    date: "Sep 2024",
    readTime: "5 min read",
    category: "Mindset",
    tags: ["Commerce", "Entrepreneurship", "Strategy"],
    content: [
      {
        type: "p",
        text: "I'm a Class 12 Commerce student who also builds AI platforms, web apps, and maker projects. That combination isn't accidental — business education and product building reinforce each other.",
      },
      { type: "h2", text: "What commerce adds to tech" },
      {
        type: "p",
        text: "Subjects like Business Studies, Economics, and Entrepreneurship train you to think about markets, processes, and value creation. When I design Kryvax pricing tiers or MemoriaLife payment flows, that background shows up in real decisions.",
      },
      {
        type: "ul",
        items: [
          "Accountancy → understanding cost structure and sustainability",
          "Business Studies → process design and organizational thinking",
          "Economics → incentives, markets, and trade-offs",
          "Entrepreneurship → initiative, risk, and opportunity evaluation",
        ],
      },
      { type: "h2", text: "Building as learning" },
      {
        type: "p",
        text: "I don't wait until I have a CS degree to build products. Every project — Mythos, Gaming Odyssey, maker experiments — is a way to learn how real systems work. Commerce gives me the 'why' behind the 'what' I'm building.",
      },
    ],
  },
  {
    slug: "my-roadmap-as-student-builder",
    title: "My Roadmap as a Student Builder",
    excerpt:
      "Where I'm headed — higher education, scholarships, global tech opportunities, and continued product building.",
    date: "Jun 2026",
    readTime: "4 min read",
    category: "Direction",
    tags: ["Career", "Goals", "Education"],
    content: [
      {
        type: "p",
        text: "This portfolio isn't a finished story — it's a snapshot of where I am now and where I'm deliberately heading. I'm a student builder preparing for higher education, scholarships, and global technology opportunities.",
      },
      { type: "h2", text: "Short-term focus" },
      {
        type: "ul",
        items: [
          "Ship working prototypes for Mythos and Kryvax",
          "Document case studies honestly — prototypes vs. concepts vs. experiments",
          "Continue maker projects to show hardware + software range",
          "Apply to universities and scholarships with proof of work, not just grades",
        ],
      },
      { type: "h2", text: "Long-term direction" },
      {
        type: "p",
        text: "I want to grow into AI product building, product management, and eventually startups. The path isn't linear — but every project in this portfolio is a step toward understanding how products are designed, built, and brought to people.",
      },
      {
        type: "quote",
        text: "I'm not waiting to be qualified. I'm building qualification through work.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = [...new Set(blogPosts.map((p) => p.category))];