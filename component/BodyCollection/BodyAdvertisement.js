import { getAdvertiseData } from '@/service/axios.service'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BodyAdvertisement = () => {
  const [product,setProduct] = useState([])

  const getAdvertise = async () =>{
    const data = await getAdvertiseData()
    const limitedData = data.slice(0,2)
    setProduct(limitedData)
  }
  useEffect(()=>{
    getAdvertise()
  },[])
  
  console.log(product)
  return (
    <div className='flex flex-col'>
      <div>
        <h1 className='font-semibold text-lg mb-1'>Sponsored By :</h1>
      </div>
      <div className='w-full'>
      {
        product && product.map((products,index)=>{
          return(
            <div key={index} className='flex flex-row mt-4 gap-2'>
              <div className='w-1/2 overflow-hidden'>
              <img className='h-32 w-full ' src={products.links.download}/> 
              </div>
              <div className='flex flex-col align-middle my-auto  w-1/2 '>
                <p className='uppercase font-medium line-clamp-2'>{products.alt_description}</p>
                <a href={products.links.download} className=' text-blue-700 font-medium items-center hover:underline'>View</a>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default BodyAdvertisement