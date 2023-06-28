import BodyRight from '@/component/BodyCollection/BodyRight'
import Herosection from '@/component/HeroCollection/Herosection'
import FilterModal from '@/component/Navbar/FilterModal'
import Navbar from '@/component/Navbar/Navbar'
import React from 'react'

const movies = () => {
  return (
    <div className='px-44 bg-black h-52 flex flex-col'>
    <div className=' '>
    <Navbar/>
    </div>
    <div>
      <Herosection/>
    </div>
    <div className=''>
      <FilterModal/>
    </div>
  </div>
  )
}

export default movies