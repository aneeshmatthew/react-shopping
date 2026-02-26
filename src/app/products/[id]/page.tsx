import { getProducts } from "@/lib/server/api";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: String(p.id) }));
}

export { default } from "@/components/server/ProductDetail";
