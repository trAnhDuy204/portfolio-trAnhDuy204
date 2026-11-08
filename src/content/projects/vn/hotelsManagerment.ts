import videoHotelsManagement from "../../../assets/videos/hotelsManagerment.mp4";

import hotels0 from "../../../assets/images/projects/hotelsManagerment/hotelsManagement-0.png";
import hotels1 from "../../../assets/images/projects/hotelsManagerment/hotelsManagement-1.png";
import hotels2 from "../../../assets/images/projects/hotelsManagerment/hotelsManagement-2.png";


import type { ProjectContent } from "../../types";

export default {
  title: "Hotels Management",
  theme: "light",
  tags: ["vite", "tailwind", "vnpay", "springBoot", "postgresql"],
  //live: "",
  source: "https://github.com/trAnhDuy204/KTPM-252",
  videoBorder: true,
  description:
    "Một trong những dự án web tôi thực hiện cùng nhóm 4 người nhằm quản lý và điều hành các khách sạn. Phạm vi dự án phục vụ cho việc học tập môn kiểm thử phần mềm.<br/><br/>Dự án giúp tôi biết cách viết unit tests, integration tests, thiết kế test cases, và thực hiện kiểm thử tự động. Ngoài ra, tôi cũng học được cách triển khai ứng dụng web với Spring Boot và Vite.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoHotelsManagement,
        caption: "Website Hotels Management",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hotels0,
        alt: "Giao diện trang admin",
        caption: "Giao diện trang admin",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hotels1,
        alt: "Giao diện trang lễ tân",
        caption: "Giao diện trang lễ tân",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hotels2,
        alt: "Giao diện trang khách hàng",
        caption: "Giao diện trang khách hàng",
      },
    },
  ],
} as const satisfies ProjectContent;
