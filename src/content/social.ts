export const social = [
  { url: "mailto:trananhduydl@gmail.com", name: "mail" },
  { url: "https://github.com/trAnhDuy204", name: "github" },
  { url: "https://www.linkedin.com/in/trananhduy04/", name: "linkedin" },
  //{ url: "https://x.com/DavidHckh", name: "x" },
  { url: "https://www.instagram.com/_tranhduy204/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
