import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import React from 'react'
interface ProductPageProps{
    params:{
        productId:string;
    }
}
const ProductPage:React.FC<ProductPageProps>= async({
    params
})=> {
    const product =await getProduct(params.productId)
    const suggestedProducts=await getProducts({
        categoryId:product?.category?.id
    })
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage