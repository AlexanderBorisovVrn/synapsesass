import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between border-4 border-t-0 border-x-0 border-black items-center h-16 md:h-24 bg-chrome">
            <Link className="font-permanent text-slate-950 text-2xl sm:text-5xl lg:text-6xl pl-5 sm:pl-10  md:pl-20" href='/'>SYNAPSESASS</Link>

            <div className="flex h-full sm:text-xl md:text-3xl">
                <Link href='/login'><button className="flex h-full items-center hover:opacity-95  border-4 border-y-0 border-black px-5 md:px-10 text-black ">Login</button></Link>
                <Link href='/pricing'><button className="flex h-full items-center hover:opacity-95  bg-black  text-white px-5 md:px-10">Pricing</button></Link>
            </div>
        </nav>
    )
}

export default Navbar