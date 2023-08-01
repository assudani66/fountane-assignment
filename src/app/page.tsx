import Hologram from '@/components/hologram'
import Footer from '@/components/landingpageComponents/footer'
import HeroSection from '@/components/landingpageComponents/heroSection'

import NavBar from '@/components/navBar'
export default function Home() {
  return (
    <div className='flex flex-col justify-between h-screen p-10'>
      <div className='sticky top-0 z-20 -p-20'>
    <NavBar/>
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
