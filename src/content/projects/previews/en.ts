import thumbnailEzhost from "../../../assets/thumbnails/ezhost.png";
import thumbnailHotelsManagement from "../../../assets/thumbnails/hotelsManagement.png";
import thumbnailCloudStorageApp from "../../../assets/thumbnails/cloudStorageApp.png";
import thumbnailJobSeachingWebsite from "../../../assets/thumbnails/jobSeachingWebsite.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "EZ Host",
    slug: "ezhost",
    thumbnail: thumbnailEzhost,
    description: "An app connecting landlords and tenants",
  },
  {
    title: "Hotels Management",
    slug: "hotelsManagerment",
    thumbnail: thumbnailHotelsManagement,
    description: "Hotel management application",
  },
  {
    title: "Cloud Storage App",
    slug: "cloudStorageApp",
    thumbnail: thumbnailCloudStorageApp,
    description: "Cloud storage application",
  },
  {
    title: "Job Searching Website",
    slug: "jobSearchingWebsite",
    thumbnail: thumbnailJobSeachingWebsite,
    description: "Job search website",
  },
] as const satisfies ProjectPreview[];
