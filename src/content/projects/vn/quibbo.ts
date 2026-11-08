import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Quibbo",
  theme: "light",
  tags: ["three", "node", "kubernetes", "redis", "postgresql"],
  videoBorder: true,
  description:
    "Quibbo là nền tảng dành cho các trò chơi nhiều người chơi theo lượt với nhịp độ nhanh. Nền tảng kết hợp ghép trận, nhân vật đại diện 3D có thể tùy chỉnh và tích hợp tài khoản với hệ thống xếp hạng dựa trên Elo.<br/><br/>Dự án bắt đầu từ một thử nghiệm kỹ thuật và phát triển thành hệ thống có khả năng mở rộng để thử nghiệm các ý tưởng trò chơi mới.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "Giao diện người dùng",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Tạo nhân vật đại diện",
        caption: "Tạo nhân vật đại diện",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Trò chơi Tic-Tac-Toe nhiều người chơi",
        caption: "Trò chơi Tic-Tac-Toe nhiều người chơi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Nhiều trò chơi nhỏ",
        caption: "Nhiều trò chơi nhỏ",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Các phiên bản nhân vật đại diện",
        caption: "Các phiên bản nhân vật đại diện",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "Giao diện thích ứng",
        caption: "Giao diện thích ứng",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo5,
        alt: "Giao diện tối",
        caption: "Giao diện tối",
      },
    },
  ],
} as const satisfies ProjectContent;
