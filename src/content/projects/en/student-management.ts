import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Student Management",
  theme: "light",
  tags: ["sqlserver", "analysis"],
  description:
    "System Analysis course project at Dai Nam University focused on requirements, Use Case diagrams, ERD, and SQL Server data modeling for student and class management.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: backendWorkspace,
        alt: "System analysis workspace",
        caption: "Use Case, ERD, and SQL Server design",
      },
    },
    {
      type: "text",
      props: {
        title: "Scope",
        text: "Completed from January 2024 to April 2024, this coursework project focused on analyzing user requirements and designing the database foundation for managing students, classes, and academic information.",
      },
    },
    {
      type: "list",
      props: {
        title: "Recruiter Highlights",
        size: "lg",
        items: [
          "Role: system-analysis and database-design coursework contributor.",
          "Best fit: System Analyst Intern, Business Analyst Intern, or database-oriented backend role.",
          "Strongest proof: requirements analysis, Use Case diagrams, ERD, and SQL Server data modeling.",
          "Review value: shows foundation in turning academic management needs into structured system design.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Responsibilities",
        size: "lg",
        items: [
          "Analyzed users and management requirements.",
          "Created Use Case diagrams and ERD.",
          "Modeled SQL Server data for student and class management.",
          "Built a foundation for storing and managing academic information.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Analysis Scope",
        size: "lg",
        items: [
          "Identified main actors and user goals for student, class, and academic information management.",
          "Prepared Use Case diagrams to describe system interactions and feature boundaries.",
          "Designed ERD and database relationships for core academic data.",
          "Modeled SQL Server tables for storing students, classes, and related records.",
          "Practiced converting real management needs into structured documentation and database design.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Outcome",
        text: "The project strengthened my system-analysis foundation by connecting requirements, Use Cases, ERD, and SQL Server modeling into one coherent student-management design.",
      },
    },
  ],
} as const satisfies ProjectContent;
