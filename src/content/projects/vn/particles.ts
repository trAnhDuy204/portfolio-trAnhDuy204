import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebGL Particles",
  theme: "dark",
  tags: ["ogl", "javascript", "glsl"],
  live: "https://particles.david-hckh.com/",
  videoBorder: false,
  description:
    "Dự án WebGL thử nghiệm sử dụng OGL.js để tạo chuyển động cho các hạt bằng công thức toán học và hàm nhiễu.<br/><br/>Các hạt di chuyển mượt mà giữa nhiều hình dạng 3D và liên tục biến đổi từ hình dạng này sang hình dạng khác.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "Hệ thống hạt chuyển động",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "Hình nút thắt",
        caption: "Hình nút thắt",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "Hình vòng xuyến",
        caption: "Hình vòng xuyến",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles2,
        alt: "Hình cầu",
        caption: "Hình cầu",
      },
    },
  ],
} as const satisfies ProjectContent;
