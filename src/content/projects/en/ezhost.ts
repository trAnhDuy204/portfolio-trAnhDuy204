//import videoPokedex from "../../../assets/videos/pokedex.mp4";

import ezhost0 from "../../../assets/images/projects/ezhost/ezhost-0.png";
import ezhost1 from "../../../assets/images/projects/ezhost/ezhost-1.png";
import ezhost2 from "../../../assets/images/projects/ezhost/ezhost-2.png";
import ezhost3 from "../../../assets/images/projects/ezhost/ezhost-3.png";
import ezhost4 from "../../../assets/images/projects/ezhost/ezhost-4.png";
import ezhost5 from "../../../assets/images/projects/ezhost/ezhost-5.png";
import ezhost6 from "../../../assets/images/projects/ezhost/ezhost-6.png";

import type { ProjectContent } from "../../types";

export default {
  title: "EZ Host",
  theme: "dark",
  tags: ["reactNative", "expo", "nestjs", "postgresql"],
  //live: "",
  //source: "",
  videoBorder: true,
  description:
    "A real-world project I worked on with a team, serving actual users and handling real data. This mobile app helps landlords connect with tenants more easily.<br/><br/>The project gave me valuable hands-on experience and a deeper understanding of the software development process and working in a professional environment.<br/><br/>The app has been released on both iOS and Android.",
  components: [
    // {
    //   type: "media",
    //   props: {
    //     type: "video",
    //     src: videoPokedex,
    //     caption: "EZ Host app",
    //   },
    // },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost0,
        alt: "App interface",
        caption: "App interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost1,
        alt: "Landlord interface",
        caption: "Landlord interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost2,
        alt: "Landlord interface",
        caption: "Landlord interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost3,
        alt: "Landlord interface",
        caption: "Landlord interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost4,
        alt: "Tenant interface",
        caption: "Tenant interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost5,
        alt: "Tenant interface",
        caption: "Tenant interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost6,
        alt: "Tenant interface",
        caption: "Tenant interface",
      },
    },
  ],
} as const satisfies ProjectContent;
