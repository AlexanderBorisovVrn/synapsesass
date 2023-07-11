import { ProductType } from '@/app/products/page'
import Link from 'next/link';
import React from 'react'

const ProductCard = ({ product }: { product: ProductType }) => {
    const { slug } = product;
    const transformSlug = slug.split(' ').join('_');
    return (
        <article className='flex flex-col  w-full  bg-chrome rounded-md '>
            <Link href={`/product/${transformSlug}`}>
                <header className=' bg-secondary rounded-t-md p-5 relative'>
                    <h1 className='flex w-full absolute text-white justify-center left-0 px-2 text-3xl 2xl:text-5xl '>{product.name}</h1>
                    <img src={`/assets/products/${transformSlug}.png`} alt={slug} className='w-1/2 h-1/3 mx-auto mt-8' />
                </header>
            </Link>
            <footer className='flex flex-wrap  text-xl xl:text-3xl w-full '>
                <Link href={`/`} className='flex justify-center grow  py-3 lg:py-5 px-4 md:px-6 lg:px-8 align-middle'>
                    See more &#8702;
                                   
                </Link>
                <Link href={`/`} className='flex justify-center text-white hover:opacity-95 grow py-3 lg:py-5 px-5 bg-blue align-middle'>
                    Hello world
                </Link>
            </footer>

        </article>
    )
}

export default ProductCard