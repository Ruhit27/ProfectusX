import type { MetadataRoute } from "next";
import { caseStudies, posts } from "@/lib/content";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/case-studies", "/blog", "/apply"].map((path) => ({ url: `${site.url}${path}` }));
  const caseStudyUrls = (await caseStudies.list()).map((cs) => ({
    url: `${site.url}/case-studies/${cs.slug}`,
    lastModified: cs.date,
  }));
  const postUrls = (await posts.list()).map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));
  return [...pages, ...caseStudyUrls, ...postUrls];
}
