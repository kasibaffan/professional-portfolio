export interface Certification {
  title: string;
  provider: string;
  area: string;
  status: "Completed" | "In Progress";
  certificateUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Introduction to Artificial Intelligence",
    provider: "IBM",
    area: "Artificial Intelligence",
    status: "Completed",
    certificateUrl: "#",
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    area: "Cloud Computing",
    status: "Completed",
    certificateUrl: "#",
  },
  {
    title: "Learn C++ Programming",
    provider: "Codecademy",
    area: "Programming Languages",
    status: "Completed",
    certificateUrl: "#",
  },
  {
    title: "DevOps Deployment Automation with Terraform, AWS and Docker",
    provider: "Udemy",
    area: "DevOps & Infrastructure",
    status: "Completed",
    certificateUrl: "#",
  },
  {
    title: "Java Masterclass",
    provider: "Udemy",
    area: "Programming Languages",
    status: "Completed",
    certificateUrl: "#",
  },
  {
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    area: "Cloud Computing",
    status: "Completed",
    certificateUrl: "#",
  },
];
