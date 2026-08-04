import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Student Performance",
  theme: "light",
  tags: ["python", "analysis"],
  source: "https://github.com/xuanbackhoaibu/student_performance.git",
  description:
    "Bài tập lớn khai phá dữ liệu dùng bộ Student Performance từ UCI để dự đoán đậu/rớt bằng EDA, tiền xử lý, phân cụm, luật kết hợp và mô hình phân loại.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: backendWorkspace,
        alt: "Không gian làm việc phân tích dữ liệu",
        caption: "Pipeline dữ liệu Student Performance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tổng quan",
        text: "Student Performance là bài tập lớn môn Khai phá dữ liệu sử dụng bộ UCI Student Performance. Mục tiêu là phân tích các yếu tố liên quan đến học sinh và xây dựng quy trình dự đoán kết quả đậu/rớt.",
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm nổi bật cho tuyển dụng",
        size: "lg",
        items: [
          "Vai trò: thực hiện tiền xử lý, mô hình hóa và đánh giá trong dự án khai phá dữ liệu.",
          "Phù hợp: Data Analyst Intern, Backend Intern có tác vụ dữ liệu hoặc API Testing Intern có phân tích dữ liệu.",
          "Minh chứng chính: workflow ML gồm EDA, encoding, scaling, clustering, luật kết hợp, supervised learning, semi-supervised learning và metrics.",
          "Giá trị review: thể hiện tư duy thử nghiệm có cấu trúc và đánh giá rõ ràng.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Pipeline",
        size: "lg",
        items: [
          "Thực hiện EDA, kiểm tra trùng lặp, encoding biến phân loại, scaling dữ liệu số và stratified train/test split.",
          "Khai phá luật kết hợp bằng Apriori và phân cụm học sinh bằng KMeans.",
          "Đánh giá phân cụm bằng Silhouette Score.",
          "Xây dựng Logistic Regression, Decision Tree, Random Forest và thử nghiệm LabelPropagation.",
          "Đánh giá mô hình bằng Accuracy, Precision, Recall và F1-score.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Phân tích và mô hình",
        size: "lg",
        items: [
          "Khám phá cấu trúc dữ liệu, phân phối đặc trưng, bản ghi trùng lặp và độ cân bằng lớp.",
          "Xử lý biến phân loại bằng encoding và biến số bằng scaling.",
          "Dùng stratified train/test split để giữ phân phối lớp khi đánh giá.",
          "Áp dụng Apriori để khai phá luật kết hợp giữa thuộc tính học sinh và kết quả.",
          "Dùng KMeans để phân nhóm học sinh có đặc điểm tương đồng trước các thử nghiệm supervised learning.",
          "So sánh mô hình Logistic Regression, Decision Tree, Random Forest và LabelPropagation.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Đánh giá",
        size: "lg",
        items: [
          "Đo hiệu quả phân loại bằng Accuracy, Precision, Recall và F1-score.",
          "Đánh giá chất lượng phân cụm bằng Silhouette Score.",
          "Rèn luyện quy trình khai phá dữ liệu đầy đủ từ dữ liệu thô đến so sánh mô hình.",
          "Tài liệu hóa từng bước tiền xử lý và mô hình để dễ review.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Kết quả",
        text: "Dự án tạo được quy trình khai phá dữ liệu hoàn chỉnh gồm làm sạch, khám phá, feature engineering, phân cụm, luật kết hợp, phân loại có giám sát và thử nghiệm semi-supervised learning.",
      },
    },
  ],
} as const satisfies ProjectContent;
