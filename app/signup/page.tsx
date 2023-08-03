'use client'
import Background from '@/components/Background'
import FormInput from '@/components/FormInput'
import Inner from '@/components/Inner'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <Background>
      <Inner>
        <form >
          <FormInput type='email' id='email' placeholder='jornlee@example.com' handler={() => { }}>
            Email
          </FormInput>
          <FormInput type='password' id='password' handler={() => { }}>
            Password
          </FormInput>
          <button type='submit' className='flex w-full h-10 md:h-12 lg:h-16 bg-blue my-10 justify-center items-center rounded-md text-white'>SignUp</button>
        </form>
     
      </Inner>
    </Background>
  )
}

export default SignUp