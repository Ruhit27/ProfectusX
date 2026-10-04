import path from "node:path";
import { createCaseStudyLibrary } from "./case-studies";
import { createPostLibrary } from "./posts";

const contentRoot = path.join(process.cwd(), "content");

export const caseStudies = createCaseStudyLibrary(path.join(contentRoot, "case-studies"));
export const posts = createPostLibrary(path.join(contentRoot, "posts"));
