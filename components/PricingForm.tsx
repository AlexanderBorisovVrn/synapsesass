'use client'

const PricingForm = () => {
    async function handleSubmit(e:React.SyntheticEvent){
        e.preventDefault();
        const data = {
            //@ts-ignore
            name:e.currentTarget.first.value,
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-2xl lg:text-3xl md:border-2 border-black p-5 lg:p-10  md:shadow-[2px_3px_1px_1px_rgba(0,0,0)] rounded-md">
            <label htmlFor="first" >First Name</label>
            <input type="text" id="first" name="first" required className="my-4 border border-black rounded-md py-2 lg:py-4 px-4 md:px-6" />

            <label htmlFor="last">Last Name</label>
            <input type="text" id="last" name="last" required className="my-4 border border-black rounded-md py-2 lg:py-4 px-4 md:px-6" />

            <button type="submit" className="bg-black text-white rounded-md py-2 lg:py-4  mt-6 lg:mt-10">Submit</button>
        </form>
    )
}

export default PricingForm