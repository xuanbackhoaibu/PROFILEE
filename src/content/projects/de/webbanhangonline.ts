import webthoitrangDemo from "../../../assets/images/projects/source-profile/webthoitrang-demo.png";

import type { ProjectContent } from "../../types";

export default {
  title: "WebBanHangOnline",
  theme: "dark",
  tags: ["dotnet", "sqlserver", "docker", "javascript"],
  source: "https://github.com/xuanbackhoaibu/WebBanHangOnline.git",
  description:
    "Website bán hàng thời trang xây dựng bằng ASP.NET Core MVC, Entity Framework Core, SQL Server, Identity, SignalR, Docker Compose, Swagger và bộ tài liệu BA/SA.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: webthoitrangDemo,
        alt: "Giao diện website bán hàng thời trang WebBanHangOnline",
        caption: "Giao diện demo e-commerce thời trang",
      },
    },
    {
      type: "text",
      props: {
        title: "Tổng quan",
        text: "WebBanHangOnline là dự án Backend .NET chủ lực trong portfolio, mô phỏng website bán hàng thời trang với luồng e-commerce đầy đủ từ xem sản phẩm đến checkout, theo dõi đơn hàng, quản trị, báo cáo doanh thu, kiểm thử API và tài liệu BA/SA.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm nổi bật cho tuyển dụng",
        size: "lg",
        items: [
          "Vai trò: tự xây dựng Backend .NET và phụ trách tài liệu phân tích hệ thống.",
          "Phù hợp: Backend .NET Intern, System Analyst Intern hoặc API Testing Intern.",
          "Minh chứng chính: luồng e-commerce hoàn chỉnh với đăng nhập, admin, API, báo cáo, Docker demo và tài liệu BA/SA.",
          "Giá trị review: có source code, OpenAPI/Postman, thiết kế dữ liệu và hướng dẫn chạy demo local.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Công nghệ sử dụng",
        size: "lg",
        items: [
          "Backend: C#, ASP.NET Core MVC, Razor Pages, ASP.NET Core Identity.",
          "Database: SQL Server, Entity Framework Core, migration và seed data.",
          "Frontend: Razor Views, Bootstrap, jQuery, CSS và JavaScript.",
          "Realtime và AI: SignalR chat hub và Google Gemini API tư vấn sản phẩm.",
          "API và testing: ASP.NET Core Controller API, Swagger UI, OpenAPI YAML và Postman collection.",
          "DevOps và reporting: Docker, Docker Compose, dashboard doanh thu và export Excel bằng ClosedXML.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Chức năng khách hàng",
        size: "lg",
        items: [
          "Xem danh mục sản phẩm theo category và URL thân thiện SEO.",
          "Xem hình ảnh, mô tả, biến thể, giá, giá flash sale, tồn kho và đánh giá sản phẩm.",
          "Thêm sản phẩm vào giỏ hàng, cập nhật số lượng, lưu wishlist và checkout sản phẩm đã chọn.",
          "Chọn phương thức thanh toán gồm COD, VNPay, MoMo và VietQR demo.",
          "Xem lịch sử đơn hàng, theo dõi trạng thái và hủy đơn đang chờ xử lý.",
          "Sử dụng hỗ trợ/chat và chatbot Gemini tư vấn sản phẩm.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Chức năng quản trị",
        size: "lg",
        items: [
          "Quản lý sản phẩm, hình ảnh, biến thể, danh mục và tồn kho.",
          "Quản lý người dùng, vai trò, đơn hàng, trạng thái đơn, thông báo, yêu cầu hỗ trợ và FAQ.",
          "Theo dõi dashboard gồm tổng đơn hàng, doanh thu, doanh thu hôm nay, phân bổ trạng thái, đơn gần đây và sản phẩm bán chạy.",
          "Xuất báo cáo doanh thu ra Excel.",
          "Kiểm thử public catalog API, admin analytics API và demo payment webhook.",
          "Phân quyền theo vai trò Admin, Client và User bằng ASP.NET Core Identity.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Tài liệu và demo",
        size: "lg",
        items: [
          "Chuẩn bị tài liệu BA/SA gồm BRD, SRS, Use Cases, ERD, API Specification và API test cases.",
          "Có file OpenAPI và Postman collection phục vụ kiểm thử API.",
          "Đóng gói Docker Compose với web container, SQL Server container, database WebThoiTrang và volume lưu dữ liệu.",
          "Seed dữ liệu demo gồm 4 danh mục, 12 sản phẩm thời trang, biến thể, FAQ/hỗ trợ, thông báo, tài khoản admin, tài khoản customer và đơn hàng mẫu.",
          "Viết hướng dẫn chạy local bằng Docker và chạy không Docker với .NET SDK, SQL Server.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Kết quả",
        text: "Dự án đã được đóng gói Docker Compose với container webthoitrang, SQL Server webthoitrang-db, database WebThoiTrang, dữ liệu thời trang demo và tài khoản mẫu để chạy local tại port 8083.",
      },
    },
  ],
} as const satisfies ProjectContent;
