export type Project = {
  title: string;
  description: string;
  deadline: string;
  type: string;
};

export const projects: Project[] = [
  {
    title: "Graduate Research Proposal",
    description:
      "Craft a compelling proposal for your postgraduate research project.",
    deadline: "15 December 2023",
    type: "Research",
  },
  {
    title: "Scholarship Application",
    description:
      "Complete and submit your application for the XYZ Scholarship.",
    deadline: "30 November 2023",
    type: "Application",
  },
  {
    title: "Study Abroad Preparation",
    description:
      "Organize all necessary documents and plans for your semester abroad.",
    deadline: "10 January 2024",
    type: "Preparation",
  },
  {
    title: "Internship Search",
    description:
      "Identify and apply to five potential internships in your field of study.",
    deadline: "05 February 2024",
    type: "Career Development",
  },
  {
    title: "Course Enrollment",
    description: "Select and enroll in courses for the upcoming academic term.",
    deadline: "22 November 2023",
    type: "Academic Planning",
  },
];
