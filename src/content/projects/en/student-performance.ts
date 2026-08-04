import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Student Performance",
  theme: "light",
  tags: ["python", "analysis"],
  source: "https://github.com/xuanbackhoaibu/student_performance.git",
  description:
    "Data mining course project using the UCI Student Performance dataset to predict pass/fail outcomes with EDA, preprocessing, clustering, association rules, and classification models.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: backendWorkspace,
        alt: "Data analysis workspace",
        caption: "Student performance data pipeline",
      },
    },
    {
      type: "text",
      props: {
        title: "Overview",
        text: "Student Performance is a Data Mining coursework project using the UCI Student Performance dataset. The goal is to explore student-related factors and build a complete prediction workflow for pass/fail outcomes.",
      },
    },
    {
      type: "list",
      props: {
        title: "Recruiter Highlights",
        size: "lg",
        items: [
          "Role: data-mining project implementer responsible for preprocessing, modeling, and evaluation.",
          "Best fit: Data Analyst Intern, Backend Intern with data tasks, or API Testing Intern with analytical work.",
          "Strongest proof: complete ML workflow with EDA, encoding, scaling, clustering, association rules, supervised learning, semi-supervised learning, and metrics.",
          "Review value: shows structured experimentation and clear evaluation thinking.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Pipeline",
        size: "lg",
        items: [
          "Performed EDA, duplicate checks, categorical encoding, numeric scaling, and stratified train/test split.",
          "Mined association rules with Apriori and grouped learners with KMeans clustering.",
          "Evaluated clustering quality with Silhouette Score.",
          "Built Logistic Regression, Decision Tree, Random Forest, and LabelPropagation experiments.",
          "Measured classification with Accuracy, Precision, Recall, and F1-score.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Analysis and Modeling",
        size: "lg",
        items: [
          "Explored dataset structure, feature distributions, duplicate records, and class balance.",
          "Prepared categorical features with encoding and numeric features with scaling.",
          "Used stratified train/test split to keep class distribution consistent during evaluation.",
          "Applied Apriori to discover association rules between student attributes and outcomes.",
          "Used KMeans clustering to group similar learners before supervised experiments.",
          "Compared supervised and semi-supervised approaches with Logistic Regression, Decision Tree, Random Forest, and LabelPropagation.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Evaluation",
        size: "lg",
        items: [
          "Measured classification performance with Accuracy, Precision, Recall, and F1-score.",
          "Measured clustering quality with Silhouette Score.",
          "Used the project to practice a full data-mining pipeline from raw data to model comparison.",
          "Documented the workflow so each preprocessing and modeling step can be reviewed.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Result",
        text: "The project produced a complete data-mining workflow that combines cleaning, exploration, feature engineering, clustering, association rules, supervised classification, and semi-supervised learning experiments.",
      },
    },
  ],
} as const satisfies ProjectContent;
