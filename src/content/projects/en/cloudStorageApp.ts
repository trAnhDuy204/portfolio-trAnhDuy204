import videoCloudStorageApp from "../../../assets/videos/cloudStorageApp.mp4";

import cloud0 from "../../../assets/images/projects/cloudStorageApp/cloudStorageApp-0.png";
import cloud1 from "../../../assets/images/projects/cloudStorageApp/cloudStorageApp-1.png";
import cloud2 from "../../../assets/images/projects/cloudStorageApp/cloudStorageApp-2.png";
import cloud3 from "../../../assets/images/projects/cloudStorageApp/cloudStorageApp-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Cloud Storage App",
  theme: "light",
  tags: ["next", "node", "postgresql", "aws", "stripe", "oauth", "cloudinary", "docker"],
  //live: "https://pokedex.david-hckh.com/",
  source: "https://github.com/trAnhDuy204/cloud-storage-app",
  videoBorder: true,
  description:
    "Hellfile is a cloud storage application I developed as part of a two-person team, inspired by Seafile. It allows users to easily manage and share files and subscribe to service plans.<br/><br/>Created for our Cloud Computing course, the application was deployed to a virtual server using AWS EC2. This project taught me how to deploy web applications using AWS and integrate third-party services.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCloudStorageApp,
        caption: "Cloud Storage App",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cloud0,
        alt: "OAuth 2.0 sign-in",
        caption: "OAuth 2.0 sign-in",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cloud1,
        alt: "User interface",
        caption: "User interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cloud2,
        alt: "Dashboard interface",
        caption: "Dashboard interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cloud3,
        alt: "Stripe payment integration",
        caption: "Stripe payment integration",
      },
    },
  ],
} as const satisfies ProjectContent;
