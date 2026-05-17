import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cristian Nino - UX/UI, CRO y desarrollo frontend";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top, rgba(245,158,11,0.28), transparent 28%), linear-gradient(135deg, #101828 0%, #172033 48%, #f7f1e8 48%, #f7f1e8 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "56px",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "64%",
              color: "#f8fafc",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 26,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#fde68a",
              }}
            >
              Cristian Nino
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontSize: 68,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                }}
              >
                UX/UI, CRO y desarrollo frontend para sitios que convierten.
              </div>
              <div
                style={{
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: "#cbd5e1",
                }}
              >
                Landing pages, SEO, automatizacion y experiencias web orientadas
                a generar contacto real.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "30%",
              borderRadius: 40,
              background: "rgba(15,23,42,0.78)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "32px",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                color: "#e2e8f0",
                fontSize: 24,
              }}
            >
              <div>Landing pages</div>
              <div>UX/UI y CRO</div>
              <div>Next.js + React</div>
              <div>Automatizacion con n8n</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "#fcd34d",
                color: "#0f172a",
                fontSize: 24,
                fontWeight: 700,
                padding: "16px 24px",
              }}
            >
              crisnnino.com
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
