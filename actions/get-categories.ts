import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000); // 7 seconds timeout

    const res = await fetch(URL, {
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // fallback: return empty array so app doesn't crash
  }
};

export default getCategories;
