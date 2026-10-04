# Keep the live site's URL structure

This site replaces an existing Framer site, so we serve every page at the URL it already has: Case Studies at `/cs/<slug>`, the Post list at `/our-blogs`, Posts at the top level (`/<slug>`), and the Application form at `/quote`. Cleaner paths plus permanent redirects would have worked, but matching exactly keeps search rankings and inbound links intact with no redirect map to maintain. The cost is that Posts share the root namespace with every other page, so a Post slug must never collide with a top-level route.

## Consequences

- `/quote` serves the Application form even though the domain term is **Application**; the route name is legacy, the term is not.
- `e2e/url-parity.spec.ts` guards one URL of each pattern. Changing a pattern now means adding redirects first.
