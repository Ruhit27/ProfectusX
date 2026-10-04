import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { z } from "zod";

export type Entry<Meta> = Meta & { slug: string; body: string };

export interface ContentLibrary<Meta> {
  list(): Promise<Entry<Meta>[]>;
  get(slug: string): Promise<Entry<Meta> | null>;
}

export function createContentLibrary<Schema extends z.ZodType<{ date: Date }>>(
  directory: string,
  schema: Schema,
): ContentLibrary<z.infer<Schema>> {
  async function slugs(): Promise<string[]> {
    const files = await readdir(directory);
    return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
  }

  async function read(slug: string): Promise<Entry<z.infer<Schema>>> {
    const file = `${slug}.mdx`;
    const { data, content } = matter(await readFile(path.join(directory, file), "utf8"));
    const meta = schema.safeParse(data);
    if (!meta.success) {
      throw new Error(`Invalid frontmatter in ${path.join(directory, file)}: ${meta.error.message}`);
    }
    return { ...meta.data, slug, body: content };
  }

  return {
    async list() {
      const entries = await Promise.all((await slugs()).map(read));
      return entries.sort((a, b) => b.date.getTime() - a.date.getTime());
    },
    async get(slug) {
      return (await slugs()).includes(slug) ? read(slug) : null;
    },
  };
}
