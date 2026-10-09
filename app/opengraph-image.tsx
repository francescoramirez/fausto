import { ImageResponse } from "next/og";

export const alt = "Aromas Donofrio, casa de perfume. Manual de identidad.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F3EEE6",
          color: "#12100E",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, textTransform: "uppercase" }}>
          Casa de perfume
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, lineHeight: 0.9, letterSpacing: -2 }}>Aromas Donofrio</div>
          <div style={{ fontSize: 36, marginTop: 28, color: "#6B2434" }}>
            Lujo en voz baja.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 84, height: 8, background: "#8F785C" }} />
          <div style={{ fontSize: 22 }}>Manual de identidad</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
