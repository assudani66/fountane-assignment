"use client"
import Hologram from '@/components/hologram'
import Footer from '@/components/landingpageComponents/footer'
import HeroSection from '@/components/landingpageComponents/heroSection'
import NavBar from '@/components/navBar'
import { NextSeo } from 'next-seo'
export default function Home() {
  
  return (
    <div className='flex flex-col justify-between h-screen p-10'>
    <NextSeo
      title='Jet Protocol movies'
      description="Decentralized lending and borrowing built on the Solana blockchain."
    />
      <div className='sticky top-0 z-20 -p-20'>
        <NavBar currentScreen={"HOME"}/>
      </div>
    <div className='flex-col'>
      <div className='flex items-center w-full justify-center'>
        <Hologram/>
      </div>
      <div className='relative -top-40'>
        <HeroSection/>
      </div>
      </div>
        <Footer/>
    </div>
  )
}
