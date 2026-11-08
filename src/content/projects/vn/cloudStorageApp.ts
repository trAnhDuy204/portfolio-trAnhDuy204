import videoCloudStorageApp from "../../../assets/videos/cloudStorageApp.mp4";

import cloud0 from "../../../assets/images/projects/cloudStorageApp/cloudStorageApp-0.png";
import cloud1 from "../../../assets/images/projects/cloudStorageApp/cloudStorageApp-1.png";
import cloud2 from "../../../assets/images/projects/cloudStorageApp/cloudStorageApp-2.png";
import cloud3 from "../../../assets/images/projects/cloudStorageApp/cloudStorageApp-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Cloud Storage App",
  theme: "light",
  tags: ["next", "node", "postgresql", "aws", "stripe","oauth", "cloudinary", "docker"],
  //live: "https://pokedex.david-hckh.com/",
  source: "https://github.com/trAnhDuy204/cloud-storage-app",
  videoBorder: true,
  description:
    "Hellfile là dự án ứng dụng lưu trữ đám mây được tôi phát triển với nhóm 2 người dựa trên một app có thật Seafile, giúp người dùng quản lý và chia sẻ tệp tin một cách dễ dàng và đăng ký các gói dịch vụ.<br/><br/>Dự án là đồ án của môn điện toán đám mây, chúng tôi đã triển khai được ứng dụng lên VPS bằng dịch vụ EC2 của AWS. Dự án giúp tôi học được cách triển khai ứng dụng web bằng các dịch vụ aws và các dịch vụ của bên thứ ba.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCloudStorageApp,
        caption: "Ứng dụng Cloud Storage",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cloud0,
        alt: "Tinh năng đăng nhập bằng OAuth 2.0",
        caption: "Tinh năng đăng nhập bằng OAuth 2.0",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cloud1,
        alt: "Giao diện người dùng",
        caption: "Giao diện người dùng",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cloud2,
        alt: "Giao diện dashboard",
        caption: "Giao diện dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cloud3,
        alt: "Tính năng thanh toán bằng Stripe",
        caption: "Tính năng thanh toán bằng Stripe",
      },
    },
  ],
} as const satisfies ProjectContent;
