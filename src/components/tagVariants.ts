export type TagVariant =
  | "three"
  | "redis"
  | "reactNative"
  | "websockets"
  | "react"
  | "expo"
  | "vite"
  | "tailwind"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "nestjs"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "springBoot"
  | "glsl";

export const tagLabels = {
  three: "Three.js",
  redis: "Redis",
  reactNative: "React Native",
  vite: "Vite",
  expo: "Expo",
  nestjs: "NestJS",
  tailwind: "Tailwind CSS",
  springBoot: "Spring Boot",
  websockets: "WebSockets",
  react: "React",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
