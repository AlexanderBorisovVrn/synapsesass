import React from 'react'

const Inner = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='w-full md:w-3/4 lg:w-1/2 xl:w-1/4 md:bg-white p-2 md:p-4 lg:p-6 rounded-md text-[20px] md:text-[24px] lg:text-[28px] '>
            {children}
        </section>
    )
}

export default Inner