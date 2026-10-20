import type { MetadataRoute } from "next";
import { siteConfig } from "@/utils/site";
import { projects } from "@/utils/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/skills", "/tech-stack", "/projects", "/contact"];

  const lastModified = new Date();

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
