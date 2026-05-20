import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BanqueDeFamille",
    short_name: "FamilleBank",
    description:
      "Une Progressive Web App d'education financiere familiale pour l'argent de poche, l'epargne, les accords familiaux et une demo sandbox securisee.",
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
