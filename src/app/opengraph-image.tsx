import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #070b16 0%, #111a33 60%, #0b2a3a 100%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 88,
            height: 88,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            color: "white",
            fontSize: 38,
            fontWeight: 700,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 40 }}>{profile.name}</div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 12, color: "#818cf8" }}>{profile.role}</div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 28, color: "#94a3b8" }}>
          Agentic AI · RAG · On-Prem LLMs · VLMs · {profile.location}
        </div>
      </div>
    ),
    size,
  );
}
