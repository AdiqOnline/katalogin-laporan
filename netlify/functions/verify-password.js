export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 400 });
  }

  const correct = process.env.EDITOR_PASSWORD;
  const ok = Boolean(correct) && body.password === correct;

  return new Response(JSON.stringify({ ok }), {
    status: ok ? 200 : 401,
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/verify-password" };
