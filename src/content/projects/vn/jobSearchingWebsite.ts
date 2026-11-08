import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Job Searching Website",
  theme: "dark",
  tags: ["reactNative", "expo", "nestjs", "postgresql"],
  live: "https://pokedex.david-hckh.com/",
  videoBorder: true,
  description:
    "Một trong những dự án thực tế mà tôi thực hiện cùng team có người dùng thật, có dữ liệu thật. Dự án ứng dụng điện thoại giúp chủ nhà kết nối với khách thuê dễ dàng hơn.<br/><br/>Dự án hiện đã được triển khai trên cả hai hệ điều hành iOS và Android.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Ứng dụng EZ Host",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Giao diện mặc định",
        caption: "Giao diện mặc định",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Chức năng tìm kiếm",
        caption: "Chức năng tìm kiếm",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Giao diện thích ứng",
        caption: "Giao diện thích ứng",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Tải nội dung khi cần",
        caption: "Tải nội dung khi cần",
      },
    },
  ],
} as const satisfies ProjectContent;
