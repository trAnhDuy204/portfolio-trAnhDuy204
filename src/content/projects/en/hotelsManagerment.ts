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
    "A web application I developed as part of a four-person team to manage hotel operations. The project was created for our Software Testing course.<br/><br/>Through this project, I learned how to write unit and integration tests, design test cases, and perform automated testing. I also learned how to deploy a web application built with Spring Boot and Vite.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoHotelsManagement,
        caption: "Hotels Management website",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hotels0,
        alt: "Admin interface",
        caption: "Admin interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hotels1,
        alt: "Receptionist interface",
        caption: "Receptionist interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hotels2,
        alt: "Customer interface",
        caption: "Customer interface",
      },
    },
  ],
} as const satisfies ProjectContent;
