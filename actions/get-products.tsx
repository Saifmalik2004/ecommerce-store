import {  Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    categoryId?:string;
    colorId?:string;
    sizeId?:string;
    isFeatured?:boolean;
}
const getProducts = async (query:Query): Promise<Product[]> => {
  console.log(URL);
  const url=qs.stringifyUrl({
    url:URL,
    query:{
categoryId:query.categoryId,
colorId:query.colorId,
sizeId:query.sizeId,
isFeatured:query.isFeatured

    
    }
  });
  const res = await fetch(url, {
    cache: "no-store", // This will ensure that the data is fetched fresh every time
  });
  return res.json();
};

export default getProducts;
