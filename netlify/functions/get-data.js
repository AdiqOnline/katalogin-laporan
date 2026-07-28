import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore("shop-data");
  const profile = await store.get("profile", { type: "json" });
  const products = await store.get("products", { type: "json" });

  return new Response(
    JSON.stringify({ profile: profile || null, products: products || null }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    }
  );
};

export const config = { path: "/api/get-data" };
