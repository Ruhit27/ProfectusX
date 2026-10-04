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
          background: "#0b0c0e",
          color: "#f2f1ed",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 44, fontWeight: 600 }}>
          <svg viewBox="0 0 24 24" width="56" height="56">
            <path fill="#f5b544" d="M12 1.5 14.6 9.4 22.5 12l-7.9 2.6L12 22.5l-2.6-7.9L1.5 12l7.9-2.6z" />
          </svg>
          {site.name}
        </div>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1, maxWidth: 960 }}>
          Acquisition systems that put qualified buyers on your calendar
        </div>
        <div style={{ fontSize: 28, color: "#9a9ca3" }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
