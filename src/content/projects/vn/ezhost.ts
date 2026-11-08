import videoPokedex from "../../../assets/videos/pokedex.mp4";

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
    "Một trong những dự án thực tế mà tôi thực hiện cùng team có người dùng thật, có dữ liệu thật. Dự án ứng dụng điện thoại giúp chủ nhà kết nối với khách thuê dễ dàng hơn.<br/><br/>Dự án giúp tôi tích thêm nhiều kinh nghiệm làm việc thực tế. Hiểu rõ hơn về quy trình phát triển phần mềm và làm việc trong môi trường chuyên nghiệp.<br/><br/>Dự án hiện đã được triển khai trên cả hai hệ điều hành iOS và Android.",
  components: [
    // {
    //   type: "media",
    //   props: {
    //     type: "video",
    //     src: videoPokedex,
    //     caption: "Ứng dụng EZ Host",
    //   },
    // },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost0,
        alt: "Giao diện app",
        caption: "Giao diện app",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost1,
        alt: "Giao diện chủ nhà",
        caption: "Giao diện chủ nhà",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost2,
        alt: "Giao diện chủ nhà",
        caption: "Giao diện chủ nhà",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ezhost3,
        alt: "Giao diện chủ nhà",
        caption: "Giao diện chủ nhà",
      },
    },
        {
      type: "media",
      props: {
        type: "image",
        src: ezhost4,
        alt: "Giao diện khách thuê",
        caption: "Giao diện khách thuê",
      },
    },
        {
      type: "media",
      props: {
        type: "image",
        src: ezhost5,
        alt: "Giao diện khách thuê",
        caption: "Giao diện khách thuê",
      },
    },
        {
      type: "media",
      props: {
        type: "image",
        src: ezhost6,
        alt: "Giao diện khách thuê",
        caption: "Giao diện khách thuê",
      },
    },
  ],
} as const satisfies ProjectContent;
