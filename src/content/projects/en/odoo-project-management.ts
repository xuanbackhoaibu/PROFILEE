import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Odoo Project Management",
  theme: "dark",
  tags: ["odoo", "python", "postgresql", "analysis"],
  description:
    "ERP project-management system on Odoo for employees, tasks, assignment, progress, budget, risk tracking, PDF reports, and AI-assisted project consultation.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: backendWorkspace,
        alt: "Project management and backend workspace",
        caption: "Odoo project management modules",
      },
    },
    {
      type: "text",
      props: {
        title: "Problem",
        text: "Project teams need one place to track tasks, owners, progress, budget, and risks so managers can understand project status and make decisions from operational data.",
      },
    },
    {
      type: "list",
      props: {
        title: "Recruiter Highlights",
        size: "lg",
        items: [
          "Role: Odoo module developer and system-analysis contributor.",
          "Best fit: Odoo Intern, Backend Intern, or System Analyst Intern.",
          "Strongest proof: ERP workflow covering employees, tasks, assignment, progress, budget, risks, reports, and AI consultation.",
          "Review value: shows ability to translate business requirements into models, views, workflows, and documentation.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Implemented Scope",
        size: "lg",
        items: [
          "Analyzed business requirements and designed project-management functions.",
          "Built Odoo features for employees, tasks, assignments, progress, budget, risk tracking, and reports.",
          "Worked with Python, Odoo, PostgreSQL, XML views, PDF reporting, and Gemini API.",
          "Documented system behavior and usage flows for project review.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Main Modules",
        size: "lg",
        items: [
          "Employee and user information for assigning project responsibilities.",
          "Project and task records with owner, progress, status, and timeline information.",
          "Assignment workflow for connecting employees to tasks and tracking accountability.",
          "Budget tracking to help managers compare planned and actual project cost data.",
          "Risk tracking for recording issues, risk level, response plan, and project impact.",
          "PDF reporting for presenting project status in a review-friendly format.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Technical Work",
        size: "lg",
        items: [
          "Customized Odoo models, fields, views, and business workflow screens.",
          "Used PostgreSQL-backed Odoo data models for project-management information.",
          "Created XML views for form/list interfaces and report layouts.",
          "Integrated Gemini API as an AI-assisted consultation feature for project questions.",
          "Documented user flows, module behavior, and analysis decisions for review.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Outcome",
        text: "The project models a practical ERP workflow for managing project progress, budget, and risk, while giving me experience translating business requirements into data models, user flows, and operational screens.",
      },
    },
  ],
} as const satisfies ProjectContent;
