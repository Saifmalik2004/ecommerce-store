import { Billboard, Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id:string): Promise<Billboard> => {
  console.log(URL);
  const res = await fetch(`${URL}/${id}`, {
    cache: "no-store", // This will ensure that the data is fetched fresh every time
  });
  return res.json();
};

export default getBillboards;
