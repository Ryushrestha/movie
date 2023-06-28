
import Herosection from '@/component/HeroCollection/Herosection'
import Navbar from '@/component/Navbar/Navbar'
import TopratedSection from '@/component/Toprated/TopratedSection'
import React from 'react'

const toprated = () => {
  return (
    <div className='px-44 bg-black h-52 flex flex-col'>
    <div className=' '>
    <Navbar/>
    </div>
    <div>
      <Herosection/>
    </div>
    <div>
      <TopratedSection/>
    </div>
  </div>
  )
}

export default toprated