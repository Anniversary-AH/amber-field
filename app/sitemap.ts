import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amber-field.com/",
      lastModified: new Date(),
    },
    {
      url: "https://amber-field.com/blockfit",
      lastModified: new Date(),
    },
    {
      url: "https://amber-field.com/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://amber-field.com/terms",
      lastModified: new Date(),
    },
    {
      url: "https://amber-field.com/contact",
      lastModified: new Date(),
    },
  ];
}
