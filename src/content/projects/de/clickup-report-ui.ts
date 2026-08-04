import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ClickUp Report UI",
  theme: "light",
  tags: ["analysis", "javascript"],
  description:
    "Dự án nghiên cứu giao diện báo cáo công việc theo mô hình ClickUp, tập trung vào nhu cầu người dùng, chỉ số báo cáo, wireframe và kế hoạch triển khai.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: backendWorkspace,
        alt: "Không gian nghiên cứu giao diện báo cáo",
        caption: "Nghiên cứu chỉ số báo cáo và luồng sử dụng",
      },
    },
    {
      type: "text",
      props: {
        title: "Tổng quan",
        text: "ClickUp Report UI là dự án nghiên cứu UX và phân tích hệ thống. Dự án tập trung vào cách một hệ thống quản lý công việc nên trình bày dữ liệu báo cáo để người dùng nhanh chóng hiểu tiến độ, khối lượng việc và hiệu suất nhóm.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm nổi bật cho tuyển dụng",
        size: "lg",
        items: [
          "Vai trò: nghiên cứu UX và phân tích hệ thống.",
          "Phù hợp: System Analyst Intern, Business Analyst Intern hoặc Frontend/QA có tư duy sản phẩm.",
          "Minh chứng chính: yêu cầu báo cáo, nhóm dữ liệu, user flow, wireframe, lập kế hoạch component và phạm vi triển khai.",
          "Giá trị review: thể hiện khả năng phân tích hành vi sản phẩm trước khi code.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Phạm vi nghiên cứu",
        size: "lg",
        items: [
          "Phân tích nhu cầu người dùng khi theo dõi công việc và tiến độ.",
          "Nghiên cứu pattern giao diện báo cáo từ ClickUp.",
          "Xác định các chỉ số báo cáo quan trọng và nhóm dữ liệu cần hiển thị.",
          "Thiết kế wireframe và luồng sử dụng cho giao diện báo cáo công việc.",
          "Chuẩn bị danh sách thành phần và kế hoạch triển khai.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Đầu ra phân tích",
        size: "lg",
        items: [
          "Xác định nhóm người dùng và nhu cầu báo cáo của quản lý dự án, thành viên nhóm.",
          "Nhóm dữ liệu báo cáo thành tiến độ công việc, khối lượng, trạng thái hoàn thành, thời gian và độ ưu tiên.",
          "Mô tả luồng sử dụng khi mở báo cáo, lọc dữ liệu, đọc chỉ số và xem chi tiết task.",
          "Chuẩn bị wireframe để thể hiện hướng bố cục trước khi triển khai.",
          "Liệt kê thành phần UI cần có cho dashboard báo cáo như bộ lọc, khối tổng quan, biểu đồ, bảng và màn hình chi tiết.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Kỹ năng thể hiện",
        size: "lg",
        items: [
          "Phân tích yêu cầu cho tính năng báo cáo trong sản phẩm quản lý công việc.",
          "Nghiên cứu UX dựa trên pattern của sản phẩm work-management.",
          "Wireframing và tổ chức thông tin cho nội dung dashboard.",
          "Lập kế hoạch triển khai trước khi code để giảm mơ hồ phạm vi.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Kết quả",
        text: "Dự án làm rõ cách tổ chức nội dung báo cáo, nhóm chỉ số quan trọng và luồng giao diện giúp người dùng đọc dữ liệu nhanh hơn trong hệ thống quản lý công việc.",
      },
    },
  ],
} as const satisfies ProjectContent;
