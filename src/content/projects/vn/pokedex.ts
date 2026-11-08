import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Pokédex",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://pokedex.david-hckh.com/",
  source: "https://github.com/davidhckh/pokedex",
  videoBorder: true,
  description:
    "Một trong những dự án web đầu tiên của tôi để thực hành các khái niệm cốt lõi trong phát triển web. Pokédex được công khai mã nguồn để các lập trình viên khác có thể học theo cách tôi đã học.<br/><br/>Dự án cũng tương tác với một API công khai để giúp tôi tích lũy thêm kinh nghiệm.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Ứng dụng Pokédex",
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
