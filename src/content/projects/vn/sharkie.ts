import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Sharkie",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://sharkie.david-hckh.com/",
  source: "https://github.com/davidhckh/sharkie-game",
  description:
    "Sharkie là trò chơi phiêu lưu dưới nước 2D, được phát triển bằng JavaScript thuần và HTML5 Canvas.<br/><br/>Dự án áp dụng các nguyên tắc lập trình hướng đối tượng, sử dụng các lớp riêng cho nhân vật, kẻ địch và hệ thống trò chơi, kết hợp chuyển động mượt mà, cơ chế chiến đấu và phông nền thị sai nhiều lớp.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "Lối chơi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Thiết kế nhân vật và bản đồ",
        caption: "Thiết kế nhân vật và bản đồ",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Trận đấu với trùm",
        caption: "Trận đấu với trùm",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "Nhiệm vụ",
        caption: "Nhiệm vụ",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie3,
        alt: "Màn hình chiến thắng",
        caption: "Màn hình chiến thắng",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "Màn hình thua cuộc",
        caption: "Màn hình thua cuộc",
      },
    },
  ],
} as const satisfies ProjectContent;
