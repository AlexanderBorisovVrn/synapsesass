'use client'
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import { useState } from 'react';

const PricingPlan = () => {
    const [checked, setChecked] = useState<boolean>(false)

    return (
        <div className="flex flex-col items-center text-2xl lg:text-3xl md:border-2 border-black bg-white p-5 lg:p-10  md:shadow-[2px_3px_1px_1px_rgba(0,0,0)] rounded-md">
            <div className='flex items-center mt-2 lg:mt-4'>
                <p>MONTHLY</p>
                <Switch size='medium' onChange={() => setChecked(!checked)} />
                <p>YEARLY</p>
            </div>
            <p className='my-4 lg:my-6 text-3xl lg:text-5xl font-bold'>Pro Plan</p>
            <p className='my-4 lg:my-6 lg:text-4xl'>Just $9.99 / month</p>
            <Link href={`/`} className='bg-blue px-4 lg:px-6 lg:py-4 py-2 mt-6 lg:mt-8 text-white rounded-md'>Byu now</Link>
        </div>
    )
}

export default PricingPlan