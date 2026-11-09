//import videoHotelsManagement from "../../../assets/videos/hotelsManagerment.mp4";

import job0 from "../../../assets/images/projects/jobSearchingWebsite/jobSeachingWebsite-0.png";
import job1 from "../../../assets/images/projects/jobSearchingWebsite/jobSeachingWebsite-1.png";
import job2 from "../../../assets/images/projects/jobSearchingWebsite/jobSeachingWebsite-2.png";
import job3 from "../../../assets/images/projects/jobSearchingWebsite/jobSeachingWebsite-3.png";
import job4 from "../../../assets/images/projects/jobSearchingWebsite/jobSeachingWebsite-4.png";
import job5 from "../../../assets/images/projects/jobSearchingWebsite/jobSeachingWebsite-5.png";


import type { ProjectContent } from "../../types";

export default {
  title: "Job Searching Website",
  theme: "light",
  tags: ["react", "tailwind", "websockets", "node", "postgresql"],
  live: "https://tranhduy204.github.io/job_searching_website/",
  source: "https://github.com/trAnhDuy204/job_searching_website",
  videoBorder: true,
  description:
    "Dự án website tìm việc làm kết nối nhà tuyển dụng và người tìm việc, hệ thống có các chứng năng cơ bản như ứng tuyển, đăng tin tuyển dụng, thông báo, quản lý tin,... Phạm vi dự án phục vụ cho môn đồ án ngành.<br/><br/>Dự án giúp tôi hiểu hơn về quy trình thiết kế hệ thống và triển khai phần mềm, giúp tôi hiển rõ hơn về react và node.js/express.js.",
  components: [
    // {
    //   type: "media",
    //   props: {
    //     type: "video",
    //     src: videoHotelsManagement,
    //     caption: "Website Job Searching",
    //   },
    // },
    {
      type: "media",
      props: {
        type: "image",
        src: job0,
        alt: "Giao diện website",
        caption: "Giao diện website",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job1,
        alt: "Giao diện trang admin",
        caption: "Giao diện trang admin",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job2,
        alt: "Giao diện trang ưng viên",
        caption: "Giao diện trang ưng viên",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job3,
        alt: "Giao diện trang ưng viên",
        caption: "Giao diện trang ưng viên",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job4,
        alt: "Giao diện trang nhà tuyển dụng",
        caption: "Giao diện trang nhà tuyển dụng",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job5,
        alt: "Giao diện trang nhà tuyển dụng",
        caption: "Giao diện trang nhà tuyển dụng",
      },
    },
  ],
} as const satisfies ProjectContent;
