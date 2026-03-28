import { ImageResponse } from "next/og";

/*
  Dynamic favicon — "PY" initials in serif sage on custard.
  Next.js auto-discovers this as the site favicon.
  Using ImageResponse for consistent rendering across browsers.
*/

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5E8D0",
          fontFamily: "Georgia, serif",
          fontSize: "18px",
          fontWeight: 400,
          color: "#4A6741",
          letterSpacing: "-0.5px",
        }}
      >
        PY
      </div>
    ),
    { ...size }
  );
}
