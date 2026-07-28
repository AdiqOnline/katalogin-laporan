import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore("shop-data");
  const sales = await store.get("sales", { type: "json" });

  return new Response(JSON.stringify({ sales: sales || [] }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
};

export const config = { path: "/api/get-sales" };
