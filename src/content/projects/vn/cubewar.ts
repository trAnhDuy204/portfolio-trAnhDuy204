import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "CubeWar",
  theme: "dark",
  tags: ["three", "node", "websockets", "redis"],
  videoBorder: false,
  live: "https://cubewar.io",
  description:
    "CubeWar là trò chơi nhiều người chơi trên trình duyệt, nơi người chơi đối đầu trong những trận chiến chiến thuật nhịp độ nhanh.<br/><br/>Tôi tự phát triển toàn bộ hệ thống, bao gồm bộ máy trò chơi, hệ thống dòng thời gian phía máy khách và mạng thời gian thực với cơ chế ghép trận dựa trên Redis để mang lại trải nghiệm chơi mượt mà.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "Lối chơi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Hướng dẫn",
        caption: "Hướng dẫn",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Chủ đề bản đồ",
        caption: "Chủ đề bản đồ",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Xác thực tài khoản",
        caption: "Xác thực tài khoản",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "Giao diện thích ứng",
        caption: "Giao diện thích ứng",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar4,
        alt: "Nhiều chế độ chơi",
        caption: "Nhiều chế độ chơi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar5,
        alt: "Hệ thống tổ đội",
        caption: "Hệ thống tổ đội",
      },
    },
  ],
} as const satisfies ProjectContent;
