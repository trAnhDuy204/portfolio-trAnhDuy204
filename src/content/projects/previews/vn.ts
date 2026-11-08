import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "EZ Host",
    slug: "ezhost",
    thumbnail: thumbnailPokedex,
    description: "Ứng dụng kết nối chủ nhà và khách thuê",
  },
  {
    title: "Hotels Management",
    slug: "hotelsManagerment",
    thumbnail: thumbnailPokedex,
    description: "Ứng dụng quản lý khách sạn",
  },
  {
    title: "Cloud Storage App",
    slug: "cloudStorageApp",
    thumbnail: thumbnailPokedex,
    description: "Ứng dụng lưu trữ đám mây",
  },
  {
    title: "Job Searching Website",
    slug: "jobSearchingWebsite",
    thumbnail: thumbnailPokedex,
    description: "Website tìm kiếm việc làm",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Trò chơi chiến thuật nhiều người chơi",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Nền tảng trò chơi nhiều người chơi",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Trò chơi phiêu lưu 2D",
  },
  {
    title: "Hiệu ứng hạt WebGL",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Hiệu ứng hạt 3D chuyển động",
  },
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Dự án học tập mã nguồn mở",
  },
] as const satisfies ProjectPreview[];
