import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


export const authConfig:AuthOptions = {
providers:[
    CredentialsProvider({
        name: 'Credentials',
   
        credentials: {
          email: { label: "Email", type: "email", placeholder: "example@example.com", required:true,style:{minHeight:'50px',width:'100%'} },
          password: { label: "Password", type: "password",required:true,style:{minHeight:'50px'} }
        },
      
        async authorize(credentials, req) {
 
          const res = await fetch("/your/endpoint", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
    
          if (res.ok && user) {
            return user
          }
          return null
        }
      })
],
pages:{
  signIn:'/signin'
}

}