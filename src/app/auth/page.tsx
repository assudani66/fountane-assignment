import LoginScreen from '@/components/loginScreen'
import NavBar from '@/components/navBar'
import React from 'react'

const pages = () => {
  return (
    <div>
      <NavBar currentScreen="LOGIN"/>
    <div className='flex w-full h-screen items-center justify-center'>
      <LoginScreen/>
    </div>
    </div>
  )
}

export default pages