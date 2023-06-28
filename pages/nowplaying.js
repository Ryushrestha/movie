import Herosection from '@/component/HeroCollection/Herosection'
import LatestSection from '@/component/Latest/LatestSection'
import Navbar from '@/component/Navbar/Navbar'
import React from 'react'

const nowplaying = () => {
  return (
    <div className='px-44 bg-black h-52 flex flex-col'>
    <div className=' '>
    <Navbar/>
    </div>
    <div>
      <Herosection/>
    </div>
    <div>
      <LatestSection/>
    </div>
  </div>
  )
}

export default nowplaying