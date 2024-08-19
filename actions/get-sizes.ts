import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getsizes = async (): Promise<Size[]> => {
  
  const res = await fetch(URL, {
    cache: "no-store", // This will ensure that the data is fetched fresh every time
  });
  return res.json();
};

export default getsizes;
