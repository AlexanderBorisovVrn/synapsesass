import {supabase} from '../../supabase/supabese'

//@ts-ignore
const Products = async({products}) => {

console.log(products)
  return (
      <section className=" border-black border-x-0">
        <h1 className="flex items-center justify-center bg-secondary h-64 text-4xl sm:text-7xl lg:text-9xl">The latest Products</h1>
        <div className="bg-white">
          <ul></ul>
        </div>
      </section>
  )
}
export const getStaticProps = async () => {
  let { data: products, error } = await supabase
  .from('product')
  .select('*')
  return { props: { products } }
}
export default Products