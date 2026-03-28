import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Pranay Yalamanchali — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/*
  OG image for social previews.
  Uses system fonts (Georgia for the name, system-ui for subtitle)
  on a custard (#F5E8D0) background with sage (#4A6741) text.
  Kept intentionally simple — centered text, no external assets.
*/
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
          backgroundColor: "#F5E8D0",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 64,
            color: "#4A6741",
            marginBottom: 16,
          }}
        >
          Pranay Yalamanchali
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 28,
            color: "#737373",
          }}
        >
          math-cs @ ucsd · software developer
        </div>
      </div>
    ),
    { ...size }
  );
}
