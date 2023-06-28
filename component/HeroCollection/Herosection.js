import React, { useState } from 'react'
// import { getTopNews } from '@/service/axios.service'
import Heroheading from './Heroheading'
import Herocarousel from './Herocarousel'
import HeroNowPlaying from './HeroNowPlaying'

const Herosection = () => {


  return (
    <div className='flex flex-col'>
      <div>
        <Heroheading/>
        </div>
        <div className='flex flex-row bg-white  shadow-md'>
          <div className='w-2/4'>
          <Herocarousel/>
          </div>
          <div className='w-2/4' >
            <div className='flex flex-col h-4/6 w-full' style={{ backgroundColor: '#1A1A1A' }}>
                <HeroNowPlaying/>
            </div>
            <img className='h-28 m-auto py-3' src='/blacklogo.png'/>
          </div>
        </div>
    </div>
  )
}

export default Herosection