import React, { ChangeEventHandler } from 'react'
type FormInputType = {
    children:string;
    type:string;
    id:string;
    placeholder?:string,
    handler:ChangeEventHandler<HTMLInputElement>
}


const FormInput = ({children,type,placeholder,id,handler}:FormInputType) => {
    return (
        <div className='mt-6'>
            <label htmlFor="email" className='block my-3 '>{children}</label>
            <input type={type} id={id} onChange={handler} placeholder={placeholder} className='block w-full h-12 md:h-14 p-4 lg:py-8 border border-blue rounded-md ' />
        </div>
    )
}

export default FormInput