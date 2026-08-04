import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Student Management",
  theme: "light",
  tags: ["sqlserver", "analysis"],
  description:
    "Dự án môn học Phân tích hệ thống tại Đại học Đại Nam, tập trung vào yêu cầu, Use Case, ERD và mô hình dữ liệu SQL Server cho quản lý sinh viên.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: backendWorkspace,
        alt: "Không gian phân tích hệ thống",
        caption: "Use Case, ERD và thiết kế SQL Server",
      },
    },
    {
      type: "text",
      props: {
        title: "Phạm vi",
        text: "Thực hiện từ 01/2024 đến 04/2024, dự án tập trung phân tích yêu cầu người dùng và thiết kế nền tảng dữ liệu phục vụ quản lý sinh viên, lớp học và thông tin học tập.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm nổi bật cho tuyển dụng",
        size: "lg",
        items: [
          "Vai trò: thực hiện phân tích hệ thống và thiết kế cơ sở dữ liệu trong dự án môn học.",
          "Phù hợp: System Analyst Intern, Business Analyst Intern hoặc backend thiên về database.",
          "Minh chứng chính: phân tích yêu cầu, Use Case diagram, ERD và mô hình dữ liệu SQL Server.",
          "Giá trị review: thể hiện nền tảng chuyển nhu cầu quản lý học vụ thành thiết kế hệ thống có cấu trúc.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Nhiệm vụ",
        size: "lg",
        items: [
          "Phân tích người dùng và yêu cầu quản lý.",
          "Thiết kế sơ đồ Use Case và ERD.",
          "Mô hình hóa dữ liệu SQL Server cho quản lý sinh viên và lớp học.",
          "Xây dựng nền tảng dữ liệu cho thông tin học tập.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Phạm vi phân tích",
        size: "lg",
        items: [
          "Xác định tác nhân chính và mục tiêu người dùng trong quản lý sinh viên, lớp học và thông tin học tập.",
          "Chuẩn bị Use Case diagram để mô tả tương tác hệ thống và ranh giới chức năng.",
          "Thiết kế ERD và quan hệ dữ liệu cho các thực thể học vụ cốt lõi.",
          "Mô hình hóa bảng SQL Server để lưu trữ sinh viên, lớp học và dữ liệu liên quan.",
          "Rèn luyện cách chuyển nhu cầu quản lý thành tài liệu phân tích và thiết kế cơ sở dữ liệu.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Kết quả",
        text: "Dự án củng cố nền tảng phân tích hệ thống bằng cách liên kết yêu cầu, Use Case, ERD và mô hình SQL Server thành một thiết kế quản lý sinh viên hoàn chỉnh.",
      },
    },
  ],
} as const satisfies ProjectContent;
