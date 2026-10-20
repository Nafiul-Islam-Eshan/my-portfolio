import { ImageResponse } from "next/og";
import { siteConfig } from "@/utils/site";

export const alt = `${siteConfig.name} — ${siteConfig.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card, generated at build time. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0a0f16",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(34,211,238,0.18), transparent 45%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid rgba(34,211,238,0.4)",
              backgroundColor: "rgba(34,211,238,0.12)",
              color: "#22d3ee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            NI
          </div>
          <div style={{ fontSize: 26, color: "#94a3b8" }}>
            {siteConfig.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 34, color: "#22d3ee" }}>
            {siteConfig.headline}
          </div>
          <div style={{ fontSize: 26, color: "#94a3b8" }}>
            {`${siteConfig.universityShort} · ${siteConfig.location} · Open to internships`}
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#475569" }}>
          React · Next.js · TypeScript · Node.js · MongoDB
        </div>
      </div>
    ),
    size,
  );
}
