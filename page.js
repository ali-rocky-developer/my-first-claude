"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("Say hello in one short sentence.");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askClaude() {
    setLoading(true);
    setReply("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setReply(data.reply || data.error || "No response");
    } catch (err) {
      setReply("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 560, margin: "80px auto", padding: "0 20px" }}>
      <h1>👋 Hello, world!</h1>
      <p>This is a minimal Next.js app deployed on Vercel.</p>

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 18 }}>Test the Claude API route</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={3}
          style={{ width: "100%", padding: 8, fontFamily: "inherit" }}
        />
        <button
          onClick={askClaude}
          disabled={loading}
          style={{
            marginTop: 8,
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          {loading ? "Asking..." : "Ask Claude"}
        </button>

        {reply && (
          <pre
            style={{
              marginTop: 16,
              padding: 12,
              background: "#f4f4f4",
              borderRadius: 6,
              whiteSpace: "pre-wrap",
            }}
          >
            {reply}
          </pre>
        )}
      </div>
    </main>
  );
}
