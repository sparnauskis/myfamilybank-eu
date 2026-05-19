import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MyFamilyBank",
    short_name: "FamilyBank",
    description:
      "An educational family finance Progressive Web App for pocket money, saving rules, family agreements and a safe sandbox demo.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fff8ec",
    theme_color: "#31533f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
