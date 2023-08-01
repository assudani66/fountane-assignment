"use client"

import React from 'react'
import CTAbutton from './ctaButton'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter()
  return (
    <div className='mx-0 flex space-x-4 w-full mx-4 px-10 py-3 justify-between items-center border border-[#1F1F1F] rounded-full'>
        <img className='scale-50' src='logo.png'/>
        <div className='flex space-x-10'>
        <p>Products</p>
        <p>dao</p>
        <p>Build</p>
        <p>Docs</p>
        </div>
        <CTAbutton onClick={()=>router.push("/auth")}>
          login
        </CTAbutton>
    </div>
  )
}

export default NavBar