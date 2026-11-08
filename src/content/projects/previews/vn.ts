import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailEzhost from "../../../assets/thumbnails/ezhost.png";
import thumbnailHotelsManagement from "../../../assets/thumbnails/hotelsManagement.png";
import thumbnailCloudStorageApp from "../../../assets/thumbnails/cloudStorageApp.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "EZ Host",
    slug: "ezhost",
    thumbnail: thumbnailEzhost,
    description: "Ứng dụng kết nối chủ nhà và khách thuê",
  },
  {
    title: "Hotels Management",
    slug: "hotelsManagerment",
    thumbnail: thumbnailHotelsManagement,
    description: "Website quản lý khách sạn",
  },
  {
    title: "Cloud Storage App",
    slug: "cloudStorageApp",
    thumbnail: thumbnailCloudStorageApp,
    description: "Ứng dụng lưu trữ đám mây",
  },
  {
    title: "Job Searching Website",
    slug: "jobSearchingWebsite",
    thumbnail: thumbnailPokedex,
    description: "Website tìm kiếm việc làm",
  },
] as const satisfies ProjectPreview[];
