import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

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
          background: "linear-gradient(145deg, #0b3d91 0%, #1a56c4 100%)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#c9a84c",
              letterSpacing: -0.5,
              lineHeight: 1,
            }}
          >
            P
          </span>
          <div
            style={{
              marginTop: 3,
              width: 14,
              height: 2,
              background: "#c9a84c",
              transform: "skewX(-12deg)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
