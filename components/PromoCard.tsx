import Link from "next/link"

const PromoCard = () => {
    return (
        <article className="text-2xl md:text-3xl lg:text-4xl" >
            <h3 className="flex justify-center font-bold ">Get Instant Access</h3>
            <p className="text-center mt-4 text-xl md:text-2xl lg:text-3xl">Access this product plus dozens of others when you subscribe</p>
            <Link href={`/pricing`} className="flex justify-center py-4  border rounded-md border-blue my-10">
                Purchase
            </Link>
        </article>


    )
}

export default PromoCard