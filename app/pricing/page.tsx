import Plans from "@/components/Plans"



const Pricing = () => {
  return (
    <main className="flex bg-black min-h-screen ">
      <section className="flex md:w-1/2 w-full items-center justify-center bg-secondary border min-h-screen p-5">
        <Plans />
      </section>
      <section className="md:w-1/2 bg-chrome hidden md:flex md:flex-col p-10 justify-center items-center">
        <div>
          <div className="my-8 2xl:my-20 ">
            <h3 className="text-2xl md:text-2xl 2xl:text-5xl font-bold my-4">One low price</h3>
            <p className="text-xl md:text-2xl 2xl:text-4xl">Save big. Get everything with a super low monthly subscription.</p>
          </div>
          <div className="my-8 2xl:my-20 ">
            <h3 className="text-2xl md:text-2xl 2xl:text-5xl font-bold my-4">No limits</h3>
            <p className="text-xl md:text-2xl 2xl:text-4xl">Get complete access to everything on the site.</p>
          </div>
          <div className="my-6 2xl:my-20 ">
            <h3 className="text-2xl md:text-2xl 2xl:text-5xl font-bold my-4">Cancel anytime</h3>
            <p className="text-xl md:text-2xl 2xl:text-4xl">Pause or stop your subscription, whenever you.</p>
          </div>
        </div>


      </section>
    </main>
  )
}

export default Pricing