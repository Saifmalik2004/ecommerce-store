import getBillboards from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"

export const revalidate=0
const HomePage = async()=> {
  
  const products=await getProducts({isFeatured:true});
  const billboard= await getBillboards('66bd66a6501ccfe85ae7894b')
  const {userId}=  auth();

  if (!userId){
      redirect("/sign-in")
  }
  return (
    <Container>
      <div className="space-y-10 pb-10">
       <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList title='Featured Products' items={products}/>
      </div>
    </Container>
  )
}

export default HomePage