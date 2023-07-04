import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-row">
      <div className="flex justify-center items-center flex-col text-center min-h-screen w-1/2 bg-primary border-r border-slate-800 p-[24px]">
        <h1 className='text-9xl font-bold  '>The most <br />epic products</h1>
        <p className='text-5xl w-3/4 my-10'>All The most epic things on the internet in one place</p>
        <Link href='/products' className='flex justify-center items-center rounded-md text-left text-2xl hover:opacity-90 w-1/2 h-20 text-yellow-50 uppercase  bg-slate-950'>Explore Products</Link>
      </div>
      <div className="flex justify-center items-center min-h-screen  w-1/2 bg-chrome border-l border-slate-800">
        <div className='relative w-1/2 h-1/2'>
          <Image src='/assets/brain3.png' placeholder='empty' alt='brain' fill={true} />
        </div>
      </div>
    </main>
  )
}
