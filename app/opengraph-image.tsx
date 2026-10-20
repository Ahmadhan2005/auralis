import { ImageResponse } from "next/og";

export const alt = "Auralis — AI voice infrastructure";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f7f5",
          padding: "72px",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: 28, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              width: 42,
              height: 42,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "#111111",
              color: "#ffffff",
              fontSize: 24,
            }}
          >
            A
          </div>
          Auralis
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#6b6b6b", fontSize: 18, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            AI voice infrastructure
          </div>
          <div style={{ maxWidth: 940, fontSize: 78, fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.06em" }}>
            AI audio that sounds human.
          </div>
        </div>
        <div style={{ color: "#6b6b6b", fontSize: 20 }}>
          Voice creation · Conversational agents · Audio tools
        </div>
      </div>
    ),
    size,
  );
}
