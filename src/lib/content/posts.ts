import { z } from "zod";
import { createContentLibrary } from "./collection";

export const postSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  date: z.coerce.date(),
});

export function createPostLibrary(directory: string) {
  return createContentLibrary(directory, postSchema);
}
