import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Pranay Yalamanchali — Software Developer";
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
          backgroundColor: "#000000",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}
        >
          PRANAY YALAMANCHALI
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          math-cs @ ucsd · software developer
        </div>
      </div>
    ),
    { ...size }
  );
}
