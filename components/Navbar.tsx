import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between border-4 border-t-0 border-x-0 border-black items-center h-24 bg-chrome">
            <Link className="font-permanent  text-black text-6xl xs:pl-5 md:pl-20" href='/'>SYNAPSESASS</Link>

            <div className="flex h-full">
                <Link href='/login'><button className="flex h-full items-center hover:opacity-95  border-4 border-y-0 border-black text-3xl text-black px-10">Login</button></Link>
                <Link href='/pricing'><button className="flex h-full items-center hover:opacity-95  bg-black text-3xl text-white px-10">Pricing</button></Link>
            </div>
        </nav>
    )
}

export default Navbar