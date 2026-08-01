export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 300,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return Response.json({ error: errText }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text ?? "No reply";

    return Response.json({ reply });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
