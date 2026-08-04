import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";
import webthoitrangDemo from "../../../assets/images/projects/source-profile/webthoitrang-demo.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "WebBanHangOnline",
    slug: "webbanhangonline",
    thumbnail: webthoitrangDemo,
    description: "ASP.NET Core fashion e-commerce",
  },
  {
    title: "Scant Reports",
    slug: "scant-reports",
    thumbnail: backendWorkspace,
    description: "Data upload and report export app",
  },
  {
    title: "Odoo Project Management",
    slug: "odoo-project-management",
    thumbnail: backendWorkspace,
    description: "ERP project workflow and reports",
  },
  {
    title: "Student Performance",
    slug: "student-performance",
    thumbnail: backendWorkspace,
    description: "Data mining and ML pipeline",
  },
  {
    title: "ClickUp Report UI",
    slug: "clickup-report-ui",
    thumbnail: backendWorkspace,
    description: "Report UX research and wireframes",
  },
  {
    title: "Student Management",
    slug: "student-management",
    thumbnail: backendWorkspace,
    description: "Use Case, ERD, and SQL Server design",
  },
] as const satisfies ProjectPreview[];
