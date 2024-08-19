import { Product  } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id:string): Promise<Product> => {
  console.log(URL);
  const res = await fetch(`${URL}/${id}`, {
    cache: "no-store", // This will ensure that the data is fetched fresh every time
  });
  return res.json();
};

export default getProduct;
