'use client'
import Background from '@/components/Background'
import FormInput from '@/components/FormInput'
import Inner from '@/components/Inner'
import React, { ChangeEvent, useState, useCallback, useEffect } from 'react'
import { signUp } from '@/supabase/supabese'


const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('')

  const emailHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])
  const passwordHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('')
    try {

      const { data, error } = await signUp(email, password);
      if (error) {
        setErrorMessage(error.message)
      }
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data));

    } catch (error) {
      throw error
    }
  }


  return (
    <Background>
      <Inner>
        {errorMessage ? <p className='mb-4 text-red-700'>{errorMessage}</p> : null}
        <form onSubmit={onSubmit}>
          <FormInput type='email' id='email' placeholder='jornlee@example.com' handler={emailHandler}>
            Email
          </FormInput>
          <FormInput type='password' id='password' handler={passwordHandler}>
            Password
          </FormInput>
          <button type='submit' className='flex w-full h-10 md:h-12 lg:h-16 bg-blue my-10 justify-center items-center rounded-md text-white'>SignUp</button>
        </form>

      </Inner>
    </Background>
  )
}

export default SignUp