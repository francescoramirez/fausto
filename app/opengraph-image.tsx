import { ImageResponse } from "next/og";

export const alt = "Cálamo, casa de perfume. Manual de identidad.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#E6D9C8",
          color: "#1A1613",
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
          <div style={{ fontSize: 132, lineHeight: 0.86, letterSpacing: -4 }}>Cálamo</div>
          <div style={{ fontSize: 36, marginTop: 28, color: "#085248" }}>
            Dos escrituras. Un mismo cálamo.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 84, height: 8, background: "#C6531F" }} />
          <div style={{ fontSize: 22 }}>Manual de identidad</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
