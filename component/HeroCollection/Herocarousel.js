import { getPopularMovies } from '@/service/axios.service'
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';


const Herocarousel = () => {
    // const [images,setImages]= useState()

    // const getPopularMovie = async () =>{
    //   const data = await getPopularMovies()
    //   const limitedData = data.slice(0,1)
    //   setImages(limitedData)
    // }
    // useEffect(()=>{
    //   getPopularMovie()
    // },[])
    // console.log(images)

    const buttonStyle ={
      width :'20px',
      background : 'none',
      color: 'white',
      margin : '10px'
    }

    const properties ={
      prevArrow: <button style={{...buttonStyle}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
    </svg>
    </button>,
    nextArrow : <button style={{...buttonStyle}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>  
  </button>
    }
  return (
    <div className='p-3' >
        <Fade
         onChange={function noRefCheck(){}}
         onStartChange={function noRefCheck(){}}
         {...properties}
        >
            <div className='each-slide'>
                <div className=''>
                  <img className='' src='/extraction.png'/>
                </div>
                </div>

            <div className='each-slide'>
                <div>
                  <img src='/fast.png'/>
                </div>
              </div>
                
            <div className='each-slide'>
                <div>
                  <img src='/spiderman.png'/>
                </div>
                </div>
        </Fade>
        </div>
  )
}

export default Herocarousel