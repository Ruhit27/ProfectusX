import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "rgb(252,252,250)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 44, fontWeight: 600 }}>
          <svg viewBox="0 0 24 24" width="56" height="56">
            <path fill="rgb(140,0,255)" d="M12 1.5 14.6 9.4 22.5 12l-7.9 2.6L12 22.5l-2.6-7.9L1.5 12l7.9-2.6z" />
          </svg>
          {site.name}
        </div>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1, maxWidth: 960 }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 28, color: "rgb(153,153,153)" }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
