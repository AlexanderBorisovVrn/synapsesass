import { supabase } from "@/supabase/supabese"
import Image from "next/image"
import { ProductType } from "../page"
import PromoCard from "@/components/PromoCard"

type Props = {
    params: {
        slug: string
    }
}

const Slug = async ({ params: { slug } }: Props) => {
    const data = await getProduct(slug);
    const product: ProductType = data ? data[0] : null
    const imgSrc = `/assets/products/${slug}.png`;

    return (
        <main>
            <section className="bg-white min-h-screen">
                <article className="container  mx-auto  ">
                    <header className="flex justify-center bg-secondary w-full border border-slate-950 border-y-0">
                        <Image alt={slug} src={imgSrc} placeholder="blur" blurDataURL={imgSrc} width={1000} height={1000} />
                    </header>
                    <footer className="flex flex-col md:flex-row">
                        <section className="md:w-3/4 w-full border border-slate-950 border-b-0 md:border-b">
                            <h2 className=" text-3xl md:text-4xl lg:text-5xl  border-b-slate-950 border product-padding font-bold">
                                {product?.name}
                            </h2>
                            <p className="border-b-0 product-padding italic text-xl md:text-3xl">{product?.description}</p>
                        </section>
                        <section className="border border-slate-950  grow product-padding ">
                            <PromoCard/>
                        </section>

                    </footer>
                </article>
            </section>
        </main>
    )
}

async function getProduct(slug: string) {
    let { data } = await supabase.from('products').select('*').eq('slug', slug)
    console.log(slug)
    return data
}

export default Slug