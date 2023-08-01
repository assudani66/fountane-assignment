"use client"
import React from 'react'

import { useRouter } from 'next/navigation'
import CTAbutton from '../ctaButton'
const HeroSection = () => {
    const router = useRouter()
  return (
    <div className='flex flex-col'>
    <div className='flex flex-col w-full justify-center items-center space-y-4 z-10'>
        <p className='text-xs text-[]'>JET PROTOCOL</p>
        <p className='text-5xl'>the next generation of</p>
        <p className='text-5xl font-playfair italic' >defi governance</p>
        <p className='text-xl text-gray-400'>experience open source, transparent and efficient borrowing and lending on solana.</p>
        <div className='flex space-x-4'>
        <CTAbutton onClick={()=>router.push("/auth")}>
          Get Started
        </CTAbutton>
        <button className='border border-white rounded-full px-5'>how it works</button>
        </div>
    </div>
    </div>
  )
}

export default HeroSection