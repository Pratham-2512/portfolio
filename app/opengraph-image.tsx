import { ImageResponse } from "next/og";

export const alt = "Pratham Bhatia — AI Application Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #05060a 0%, #12132b 55%, #1a0b26 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 24px",
            borderRadius: 999,
            border: "1px solid rgba(52, 211, 153, 0.3)",
            background: "rgba(52, 211, 153, 0.1)",
            color: "#6ee7b7",
            fontSize: 24,
            marginBottom: 36,
          }}
        >
          Open to opportunities
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: -2,
          }}
        >
          Pratham Bhatia
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 42,
            fontWeight: 600,
            background: "linear-gradient(90deg, #a5b4fc, #f0abfc, #67e8f9)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          AI Application Engineer
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            color: "#a1a1aa",
            maxWidth: 820,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Production-ready AI applications · Enterprise software · SaaS · React · Next.js
          · TypeScript · LLMs
        </div>
      </div>
    ),
    { ...size }
  );
}
