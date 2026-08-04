import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";
import webthoitrangDemo from "../../../assets/images/projects/source-profile/webthoitrang-demo.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "WebBanHangOnline",
    slug: "webbanhangonline",
    thumbnail: webthoitrangDemo,
    description: "Website bán hàng ASP.NET Core",
  },
  {
    title: "Scant Reports",
    slug: "scant-reports",
    thumbnail: backendWorkspace,
    description: "Upload dữ liệu và xuất báo cáo",
  },
  {
    title: "Odoo Project Management",
    slug: "odoo-project-management",
    thumbnail: backendWorkspace,
    description: "ERP quản lý dự án và báo cáo",
  },
  {
    title: "Student Performance",
    slug: "student-performance",
    thumbnail: backendWorkspace,
    description: "Khai phá dữ liệu và Machine Learning",
  },
  {
    title: "ClickUp Report UI",
    slug: "clickup-report-ui",
    thumbnail: backendWorkspace,
    description: "Nghiên cứu UX báo cáo công việc",
  },
  {
    title: "Student Management",
    slug: "student-management",
    thumbnail: backendWorkspace,
    description: "Use Case, ERD và SQL Server",
  },
] as const satisfies ProjectPreview[];
