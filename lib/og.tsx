import { ImageResponse } from "next/og";

type OgImageOptions = {
  eyebrow: string;
  title: string;
  description: string;
};

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";

export function buildOgImage({ eyebrow, title, description }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #f7fbf7 0%, #eef8ef 35%, #dff0df 100%)",
          color: "#163316",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "96px",
              height: "96px",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#006600,#008000)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: 700,
            }}
          >
            H
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#008000",
              }}
            >
              Happy Hands
            </div>
            <div
              style={{
                marginTop: "8px",
                fontSize: "24px",
                color: "#5f7d5f",
              }}
            >
              Cleaning Services
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#008000",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: "66px",
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#476447",
              maxWidth: "920px",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#2f5f2f",
          }}
        >
          <div>happyhandscustomerservice@gmail.com</div>
          <div>07973 403 788</div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
