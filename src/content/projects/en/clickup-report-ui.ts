import backendWorkspace from "../../../assets/images/profile/backend-workspace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ClickUp Report UI",
  theme: "light",
  tags: ["analysis", "javascript"],
  description:
    "Report-interface research project for a work-management system inspired by ClickUp, focused on user needs, report metrics, wireframes, and implementation planning.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: backendWorkspace,
        alt: "Reporting interface research workspace",
        caption: "Report metrics and workflow research",
      },
    },
    {
      type: "text",
      props: {
        title: "Overview",
        text: "ClickUp Report UI is a UX and system-analysis research project. It focuses on how a work-management system should present report data so users can quickly understand task progress, workload, and team performance.",
      },
    },
    {
      type: "list",
      props: {
        title: "Recruiter Highlights",
        size: "lg",
        items: [
          "Role: UX research and system-analysis contributor.",
          "Best fit: System Analyst Intern, Business Analyst Intern, or Frontend/QA role with product thinking.",
          "Strongest proof: report requirements, data grouping, user flows, wireframes, component planning, and implementation scope.",
          "Review value: shows ability to analyze product behavior before implementation.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Research Scope",
        size: "lg",
        items: [
          "Analyzed user needs for tracking tasks and work progress.",
          "Studied ClickUp report interface patterns and dashboard behavior.",
          "Defined important report metrics and data groups.",
          "Designed wireframes and usage flows for a work-report interface.",
          "Prepared a component list and implementation plan for future development.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Analysis Output",
        size: "lg",
        items: [
          "Defined target users and reporting needs for project managers and team members.",
          "Grouped report data into task progress, workload, completion status, time, and priority information.",
          "Mapped usage flows for opening reports, filtering data, reading metrics, and drilling into task details.",
          "Prepared wireframes to show layout direction before implementation.",
          "Listed UI components needed for a future report dashboard, including filters, summary blocks, charts, tables, and detail views.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Skills Demonstrated",
        size: "lg",
        items: [
          "Requirement analysis for report-oriented product features.",
          "UX research based on an existing work-management product pattern.",
          "Wireframing and information architecture for dashboard content.",
          "Implementation planning before coding to reduce unclear scope.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Outcome",
        text: "The research clarified how report content should be organized, which metrics matter most, and how a reporting interface can support quick review in a project-management workflow.",
      },
    },
  ],
} as const satisfies ProjectContent;
