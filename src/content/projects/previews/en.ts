import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";
import webthoitrangDemo from "../../../assets/images/projects/source-profile/webthoitrang-demo.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "WebBanHangOnline",
    slug: "webbanhangonline",
    thumbnail: webthoitrangDemo,
    description: "ASP.NET Core fashion e-commerce",
    role: "Backend .NET",
    stack: ["ASP.NET Core", "SQL Server", "Docker"],
    outcome: "Full shopping flow with admin, checkout, docs",
  },
  {
    title: "Scant Reports",
    slug: "scant-reports",
    thumbnail: backendWorkspace,
    description: "Data upload and report export app",
    role: "Backend + Reports",
    stack: ["Python", "Flask", "CSV"],
    outcome: "Upload, process, authorize, export reports",
  },
  {
    title: "Student Performance",
    slug: "student-performance",
    thumbnail: backendWorkspace,
    description: "Data mining and ML pipeline",
    role: "Data Analysis",
    stack: ["Python", "Pandas", "ML"],
    outcome: "Cleaned data, modeled performance, compared results",
  },
] as const satisfies ProjectPreview[];
