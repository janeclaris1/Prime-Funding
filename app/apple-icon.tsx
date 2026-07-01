import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
          background: "linear-gradient(145deg, #0b3d91 0%, #1a56c4 100%)",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#c9a84c",
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          PF
        </span>
        <div
          style={{
            marginTop: 12,
            width: 56,
            height: 5,
            background: "#c9a84c",
            transform: "skewX(-12deg)",
          }}
        />
        <span
          style={{
            marginTop: 14,
            fontSize: 16,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Prime Funding
        </span>
      </div>
    ),
    { ...size }
  )
}
