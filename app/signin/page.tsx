'use client'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authConfig as authOptions } from "@/configs/auth";
import Background from '@/components/Background'
import FormInput from '@/components/FormInput'
import Link from "next/link";
import Inner from "@/components/Inner";



const Signin = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <Background>
            <Inner>
                <form >
                    <FormInput type='email' id='email' placeholder='jornlee@example.com' handler={() => { }}>
                        Email
                    </FormInput>
                    <FormInput type='password' id='password' handler={(event) => { }}>
                        Password
                    </FormInput>
                    <button type='submit' className='flex w-full h-10 md:h-12 lg:h-16 bg-blue my-10 justify-center items-center rounded-md text-white'>Submit</button>
                </form>
                <div className="w-full flex justify-center text-blue hover:opacity-80">
                    <Link href='/signup' ><button type="button">SignIn</button></Link>
                </div>
            </Inner>
        </Background>
    )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (session) {
        return { redirect: { destination: "/" } };
    }

    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] },
    }
}

export default Signin