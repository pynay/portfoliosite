import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "pranay yalamanchali";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#1f1f1f",
            marginBottom: 16,
          }}
        >
          pranay yalamanchali
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6b6b6b",
          }}
        >
          math-cs @ ucsd
        </div>
      </div>
    ),
    { ...size }
  );
}
