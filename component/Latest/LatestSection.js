import React from 'react'
import BodyAdvertisement from '../BodyCollection/BodyAdvertisement'
import BodyRight from '../BodyCollection/BodyRight'
import Latestcard from './Latestcard'

const LatestSection = () => {
  return (
    <div className='flex flex-col mt-3'>
    <div className='flex flex-row'>
        <div className='flex flex-col w-3/4 '>
            <h3 className='font-bold text-2xl'>Popular Movies</h3>
            <div style={{ height: '5px', color: 'black' }} className='px-2'>
                <hr className='h-4 m-2 ' />
            </div>
            <Latestcard/>
        </div>
        <div className='flex flex-col w-1/4'>
            <BodyAdvertisement />
            <div className='mt-3'>
                <BodyRight />
            </div>
        </div>
    </div>
</div>
  )
}

export default LatestSection