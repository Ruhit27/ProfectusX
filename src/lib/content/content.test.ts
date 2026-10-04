import path from "node:path";
import { describe, expect, it } from "vitest";
import { createCaseStudyLibrary } from "./case-studies";
import { createPostLibrary } from "./posts";

const fixtures = path.join(__dirname, "__fixtures__");

describe("Post library", () => {
  const posts = createPostLibrary(path.join(fixtures, "posts"));

  it("lists Posts newest first", async () => {
    const list = await posts.list();

    expect(list.map((p) => p.slug)).toEqual(["newer-post", "older-post"]);
    expect(list[0]).toMatchObject({ title: "Newer Post", summary: "Written second." });
  });

  it("finds a Post by slug, including its body", async () => {
    const post = await posts.get("older-post");

    expect(post).toMatchObject({ slug: "older-post", title: "Older Post" });
    expect(post?.body.trim()).toBe("Body of the older Post.");
  });

  it("reads the optional cover and author of a Post", async () => {
    expect(await posts.get("newer-post")).toMatchObject({
      cover: "/posts/newer-post.png",
      author: "Jordan Lee",
      authorAvatar: "/authors/jordan-lee.png",
    });
    expect(await posts.get("older-post")).not.toHaveProperty("cover");
  });

  it("returns null for an unknown slug", async () => {
    expect(await posts.get("does-not-exist")).toBeNull();
  });

  it("ignores slugs that try to escape the content folder", async () => {
    expect(await posts.get("../broken/missing-title")).toBeNull();
  });

  it("refuses a Post whose slug collides with a top-level route", async () => {
    const clashing = createPostLibrary(path.join(fixtures, "reserved"));

    await expect(clashing.list()).rejects.toThrow(/"quote".*top-level route/);
  });

  it("names the file when its header is invalid", async () => {
    const broken = createPostLibrary(path.join(fixtures, "broken"));

    await expect(broken.list()).rejects.toThrow(/missing-title\.mdx/);
  });
});

describe("Case Study library", () => {
  it("reads the client, industry and headline metrics", async () => {
    const caseStudies = createCaseStudyLibrary(path.join(fixtures, "case-studies"));

    const caseStudy = await caseStudies.get("sample");

    expect(caseStudy).toMatchObject({
      client: "Sample Co",
      industry: "Logistics software",
      metrics: [
        { value: "84", label: "Qualified calls" },
        { value: "6 weeks", label: "Time to first deal" },
      ],
    });
  });
});
