import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  console.log(URL);
  const res = await fetch(URL, {
    cache: "no-store", // This will ensure that the data is fetched fresh every time
  });
  return res.json();
};

export default getCategories;
