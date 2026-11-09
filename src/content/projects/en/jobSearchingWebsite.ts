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
    "A job search website that connects employers with job seekers. It includes core features such as job applications, job postings, notifications, and listing management. The project was developed for a degree project course.<br/><br/>This project deepened my understanding of system design and software deployment, while strengthening my knowledge of React and Node.js/Express.js.",
  components: [
    // {
    //   type: "media",
    //   props: {
    //     type: "video",
    //     src: videoHotelsManagement,
    //     caption: "Job Searching Website",
    //   },
    // },
    {
      type: "media",
      props: {
        type: "image",
        src: job0,
        alt: "Website interface",
        caption: "Website interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job1,
        alt: "Admin interface",
        caption: "Admin interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job2,
        alt: "Job seeker interface",
        caption: "Job seeker interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job3,
        alt: "Job seeker interface",
        caption: "Job seeker interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job4,
        alt: "Employer interface",
        caption: "Employer interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: job5,
        alt: "Employer interface",
        caption: "Employer interface",
      },
    },
  ],
} as const satisfies ProjectContent;
