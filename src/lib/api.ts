import type { Category, Product } from "@/types";

const BASE_URL = "https://fakestoreapi.com";

export async function getProducts(category?: string): Promise<Product[]> {
  const url = category
    ? `${BASE_URL}/products/category/${encodeURIComponent(category)}`
    : `${BASE_URL}/products`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch product ${id}`);
  return res.json();
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
