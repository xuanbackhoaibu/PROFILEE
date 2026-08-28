import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";
import webthoitrangDemo from "../../../assets/images/projects/source-profile/webthoitrang-demo.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "WebBanHangOnline",
    slug: "webbanhangonline",
    thumbnail: webthoitrangDemo,
    description: "Website bán hàng ASP.NET Core",
    role: "Backend .NET",
    stack: ["ASP.NET Core", "SQL Server", "Docker"],
    outcome: "Luồng mua hàng, admin, checkout và tài liệu",
  },
  {
    title: "Scant Reports",
    slug: "scant-reports",
    thumbnail: backendWorkspace,
    description: "Upload dữ liệu và xuất báo cáo",
    role: "Backend + Reports",
    stack: ["Python", "Flask", "CSV"],
    outcome: "Upload, xử lý, phân quyền và xuất báo cáo",
  },
  {
    title: "Student Performance",
    slug: "student-performance",
    thumbnail: backendWorkspace,
    description: "Khai phá dữ liệu và Machine Learning",
    role: "Data Analysis",
    stack: ["Python", "Pandas", "ML"],
    outcome: "Làm sạch dữ liệu, mô hình hóa và đánh giá",
  },
] as const satisfies ProjectPreview[];
