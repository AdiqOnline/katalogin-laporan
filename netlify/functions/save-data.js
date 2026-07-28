import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Data tidak valid" }), { status: 400 });
  }

  const { password, profile, products } = body;
  const correct = process.env.EDITOR_PASSWORD;

  if (!correct || password !== correct) {
    return new Response(JSON.stringify({ error: "Kata sandi salah" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  const store = getStore("shop-data");
  await store.setJSON("profile", profile);
  await store.setJSON("products", products);

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/save-data" };
