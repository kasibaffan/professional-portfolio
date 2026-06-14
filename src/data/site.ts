// Central place for personal/contact information.
// Update the placeholder values below with your real details —
// everything on the site reads from this single file.

export const siteConfig = {
  name: "Mohammad Kasib Affan",
  initials: "MKA",
  roles: [
    "AI Research Engineer",
    "Machine Learning Engineer",
    "Software Engineer",
  ],
  tagline:
    "Building intelligent systems through machine learning, artificial intelligence, and data-driven engineering.",
  shortBio:
    "I am a fourth-year Computer Science student at SRM University with a strong interest in building intelligent software systems and practical AI applications. My work focuses on machine learning, natural language processing, cloud technologies, and scalable software engineering.",
  university: "SRM Institute of Science and Technology",
  location: "Kattankulathur, Tamil Nadu, India",

  // Contact details — replace with real values before deploying.
  email: "mohammadkasibaffan@gmail.com",
  phone: "+91 63833 97770",

  githubUsername: "kasibaffan",

  links: {
    github: "https://github.com/kasibaffan",
    linkedin: "https://www.linkedin.com/in/kasibaffan",
    instagram: "https://www.instagram.com/im_kasib",
  },

  // Used for metadata, sitemap and OG tags.
  url: "https://kasibaffan.dev",
} as const;

export const focusAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Data Analytics",
  "Cloud Computing",
  "Software Engineering",
  "DevOps",
] as const;

export const researchInterests = [
  {
    title: "Artificial Intelligence",
    description:
      "General intelligent systems that perceive, reason, and act on real-world data.",
  },
  {
    title: "Machine Learning",
    description:
      "Supervised and unsupervised models for prediction, classification, and pattern discovery.",
  },
  {
    title: "Deep Learning",
    description:
      "Neural network architectures for representation learning on structured and unstructured data.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Language understanding, semantic similarity, and conversational systems.",
  },
  {
    title: "Generative AI",
    description:
      "Large language models and generative architectures applied to practical tooling.",
  },
  {
    title: "Neural Network Design",
    description:
      "Architecture search, optimization, and evaluation of model topologies.",
  },
  {
    title: "Data Analytics",
    description:
      "Turning raw data into actionable insight through statistics and visualization.",
  },
  {
    title: "Cloud Computing",
    description:
      "Deploying and scaling ML-driven applications on cloud infrastructure.",
  },
  {
    title: "MLOps",
    description:
      "Reproducible training pipelines, experiment tracking, and model deployment.",
  },
  {
    title: "Software Engineering",
    description:
      "Designing maintainable, well-tested systems that ML models can live inside.",
  },
] as const;

export const engineeringPrinciples = [
  {
    title: "Building practical AI systems",
    description:
      "Models earn their place by solving a real problem end-to-end, not by performing well in isolation on a notebook.",
  },
  {
    title: "Writing maintainable software",
    description:
      "Code is read far more often than it is written. Clear structure and naming matter as much as the algorithm inside.",
  },
  {
    title: "Designing scalable architectures",
    description:
      "Systems should be built so that the next feature, dataset, or user load doesn't require a rewrite.",
  },
  {
    title: "Continuous learning",
    description:
      "The field moves fast — staying current with research and tooling is part of the job, not an afterthought.",
  },
  {
    title: "Data-driven problem solving",
    description:
      "Decisions are backed by evidence: benchmarks, metrics, and experiments rather than intuition alone.",
  },
  {
    title: "Research-oriented development",
    description:
      "Every project starts with a question worth answering, then works backward to the implementation.",
  },
] as const;
