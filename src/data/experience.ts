export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

// Add new entries to the top of this array as your work progresses.
export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    title: "Machine learning & intelligent systems",
    description:
      "Focused on applied machine learning and the design of intelligent, end-to-end systems — from model architecture search to deployment.",
  },
  {
    year: "2025",
    title: "AI and cloud engineering",
    description:
      "Started building AI-driven applications and learning cloud infrastructure, containerization, and infrastructure as code.",
  },
  {
    year: "2024",
    title: "Programming foundations",
    description:
      "Built strong foundations across programming languages, data structures, and core software engineering practices.",
  },
];
