import ProductCard from '@/components/ProductCard';
import { supabase } from '../../supabase/supabese'

export type ProductType = {
  id: number,
  created_at: string,
  name: string,
  slug: string,
  category: string,
  description: string
}

//@ts-ignore
const Products = async () => {

  const data: Array<ProductType> | null = await getProducts();
  const products = data?.map((product: ProductType) => (<li key={product.id}>
    <ProductCard product={product}/>
  </li>))

  return (
    <main className=" border-black border-x-0">
      <h1 className="flex items-center justify-center bg-secondary text-blue font-bold h-64 text-4xl  sm:text-7xl lg:text-9xl">The Latest Products</h1>
      <div className=' bg-white p-5'>
        <ul className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto w-full lg:w-3/4 gap-x-5 gap-y-5">
          {products}
        </ul>

      </div>
    </main>
  )
}
async function getProducts() {
  let { data: products, error } = await supabase
    .from('product')
    .select('*')

  return products
}
export default Products