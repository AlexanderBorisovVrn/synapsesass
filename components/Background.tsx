import React from 'react'

const Background = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex items-center justify-center min-w-full min-h-screen bg-chrome'>
        {children}
    </div>
  )
}

export default Background