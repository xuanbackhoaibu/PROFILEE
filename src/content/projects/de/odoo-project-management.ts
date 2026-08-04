import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Odoo Project Management",
  theme: "dark",
  tags: ["odoo", "python", "postgresql", "analysis"],
  description:
    "Hệ thống quản lý dự án trên Odoo hỗ trợ nhân sự, công việc, phân công, tiến độ, ngân sách, rủi ro, báo cáo PDF và AI tư vấn dự án.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: backendWorkspace,
        alt: "Không gian làm việc quản lý dự án và backend",
        caption: "Module quản lý dự án trên Odoo",
      },
    },
    {
      type: "text",
      props: {
        title: "Vấn đề",
        text: "Nhóm quản lý cần một nơi tập trung để theo dõi công việc, người phụ trách, tiến độ, ngân sách và rủi ro nhằm hiểu trạng thái dự án từ dữ liệu vận hành.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm nổi bật cho tuyển dụng",
        size: "lg",
        items: [
          "Vai trò: phát triển module Odoo và tham gia phân tích hệ thống.",
          "Phù hợp: Odoo Intern, Backend Intern hoặc System Analyst Intern.",
          "Minh chứng chính: quy trình ERP gồm nhân sự, task, phân công, tiến độ, ngân sách, rủi ro, báo cáo và AI tư vấn.",
          "Giá trị review: thể hiện khả năng chuyển yêu cầu nghiệp vụ thành model, view, workflow và tài liệu.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Phạm vi thực hiện",
        size: "lg",
        items: [
          "Phân tích nghiệp vụ và thiết kế chức năng quản lý dự án.",
          "Xây dựng chức năng nhân viên, công việc, phân công, tiến độ, ngân sách, rủi ro và báo cáo.",
          "Làm việc với Python, Odoo, PostgreSQL, XML view, báo cáo PDF và Gemini API.",
          "Viết tài liệu mô tả hệ thống và hướng dẫn sử dụng.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Module chính",
        size: "lg",
        items: [
          "Thông tin nhân sự và người dùng phục vụ phân công trách nhiệm dự án.",
          "Dữ liệu dự án và công việc gồm người phụ trách, tiến độ, trạng thái và thời gian.",
          "Luồng phân công để gắn nhân viên với công việc và theo dõi trách nhiệm.",
          "Theo dõi ngân sách giúp quản lý so sánh chi phí kế hoạch và chi phí thực tế.",
          "Theo dõi rủi ro gồm vấn đề, mức độ rủi ro, phương án xử lý và ảnh hưởng đến dự án.",
          "Báo cáo PDF để trình bày trạng thái dự án ở định dạng dễ review.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Công việc kỹ thuật",
        size: "lg",
        items: [
          "Tùy chỉnh Odoo models, fields, views và màn hình nghiệp vụ.",
          "Sử dụng mô hình dữ liệu Odoo trên PostgreSQL cho thông tin quản lý dự án.",
          "Tạo XML views cho giao diện form/list và layout báo cáo.",
          "Tích hợp Gemini API làm chức năng AI tư vấn câu hỏi liên quan đến dự án.",
          "Viết tài liệu luồng người dùng, hành vi module và quyết định phân tích.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Kết quả",
        text: "Dự án mô phỏng quy trình ERP thực tế cho quản lý tiến độ, ngân sách và rủi ro, đồng thời rèn luyện khả năng chuyển yêu cầu nghiệp vụ thành mô hình dữ liệu, luồng người dùng và màn hình vận hành.",
      },
    },
  ],
} as const satisfies ProjectContent;
