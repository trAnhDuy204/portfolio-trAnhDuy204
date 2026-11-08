import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn giúp các nhóm nhỏ duy trì thói quen hằng ngày thông qua chuỗi ngày thực hiện liên tục cùng nhau và thao tác xác nhận đơn giản.<br/><br/>Ứng dụng tập trung vào thao tác thuận tiện, trải nghiệm trên thiết bị di động và các tính năng kết nối xã hội đơn giản, được xây dựng bằng Next.js, Node.js, PostgreSQL và Redis.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Chuỗi ngày cá nhân và nhóm",
        caption: "Chuỗi ngày cá nhân và nhóm",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Tiến độ chuỗi ngày",
        caption: "Tiến độ chuỗi ngày",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Cổ vũ bạn bè",
        caption: "Cổ vũ bạn bè",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Quy trình mời tham gia",
        caption: "Quy trình mời tham gia",
      },
    },
  ],
} as const satisfies ProjectContent;
