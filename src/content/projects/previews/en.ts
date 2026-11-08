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
    description: "An app connecting landlords and tenants",
  },
  {
    title: "Hotels Management",
    slug: "hotelsManagerment",
    thumbnail: thumbnailPokedex,
    description: "Hotel management application",
  },
  {
    title: "Cloud Storage App",
    slug: "cloudStorageApp",
    thumbnail: thumbnailPokedex,
    description: "Cloud storage application",
  },
  {
    title: "Job Searching Website",
    slug: "jobSearchingWebsite",
    thumbnail: thumbnailPokedex,
    description: "Job search website",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer strategy game",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Multiplayer gaming platform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D adventure game",
  },
  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  },
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-source learning project",
  },
] as const satisfies ProjectPreview[];
