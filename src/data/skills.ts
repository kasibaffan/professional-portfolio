export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "SQL"],
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas"],
  },
  {
    category: "Natural Language Processing",
    items: ["LSTM", "Text Processing", "Language Models"],
  },
  {
    category: "Data Science",
    items: ["Data Analytics", "Data Visualization", "Statistical Analysis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Terraform"],
  },
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "Linux"],
  },
  {
    category: "Database Systems",
    items: ["SQL", "Database Design", "Query Optimization"],
  },
];
