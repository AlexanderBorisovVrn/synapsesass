import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col lg:flex-row">
      <section className="flex justify-center items-center flex-col text-center min-h-screen w-full  lg:w-1/2 bg-primary border-r border-slate-800 p-[24px]">
        <h1 className='text-7xl  md:text-8xl xl:text-9xl font-bold  '>The most <br />epic products</h1>
        <p className='text-2xl  lg:text-5xl w-3/4 my-10'>All The most epic things on the internet in one place</p>
        <Link href='/products' className='flex justify-center items-center rounded-md text-left text-2xl hover:opacity-90 w-1/2 h-20 text-yellow-50 uppercase  bg-slate-950'><button>Explore Products</button></Link>
      </section>
      <section className="flex justify-center items-center lg:min-h-screen  w-full lg:w-1/2 bg-chrome border-l border-slate-800">
        <div className='relative hidden lg:block md:w-1/3 lg:w-1/2 lg:h-1/3 xl:h-1/2'>
          <Image src='/assets/brain3.png' placeholder='empty' priority={false} alt='brain' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
      </section>
    </main>
  )
}
