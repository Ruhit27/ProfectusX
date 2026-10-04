import { z } from "zod";
import { createContentLibrary } from "./collection";

export const postSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  date: z.coerce.date(),
  cover: z.string().optional(),
  author: z.string().optional(),
  authorAvatar: z.string().optional(),
});

// Posts are served at /<slug> (ADR 0001), so these names are taken by other routes.
const topLevelRoutes = ["api", "case-studies", "cs", "our-blogs", "quote", "opengraph-image", "robots.txt", "sitemap.xml"];

export function createPostLibrary(directory: string) {
  return createContentLibrary(directory, postSchema, topLevelRoutes);
}
