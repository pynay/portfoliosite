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
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 120px",
          backgroundColor: "#f3efe5",
        }}
      >
        <div
          style={{
            fontSize: 58,
            fontWeight: 500,
            color: "#1c1a15",
            marginBottom: 20,
          }}
        >
          pranay yalamanchali
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#6e6a5f",
            fontStyle: "italic",
          }}
        >
          co-founder &amp; ceo of netra · math-cs @ ucsd
        </div>
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: "#1c1a15",
            marginTop: 36,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
