import React from 'react'
import BodyCard from './BodyCard'
import BodyRight from './BodyRight'
import BodyAdvertisement from './BodyAdvertisement'

const BodySection = () => {
  return (
    <div className='flex flex-col mt-3'>
        <div className='flex flex-row'>
           <div className='flex flex-col w-3/4 '> 
            <h3 className='font-bold text-2xl'>Popular Movies</h3>
            <div style={{height:'5px', color:'black'}} className='px-2'>
            <hr className='h-4 m-2 '/>
            </div>
           <BodyCard/> 
           </div>
           <div className='flex flex-col w-1/4'>
            <BodyAdvertisement/>
            <div className='mt-3'>
           <BodyRight/>
           </div>
           </div>
        </div>
    </div>
  )
}

export default BodySection