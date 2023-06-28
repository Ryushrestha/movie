import { getNowPlayingMovies } from '@/service/axios.service'
import React, { useEffect, useState } from 'react'

const HeroNowPlaying = () => {
  const [movies, setMovies] =useState([])

  const getMovies = async () =>{
    const data = await getNowPlayingMovies()
    const limitedData = data.results.slice(4,6)
    setMovies(limitedData)
  }

  useEffect(()=>{
    getMovies()
  },[])
  console.log(movies)
  return (

    <div className='p-3 gap-3'>
      <h3 className='font-bold text-lg text-white'>Now Playing</h3>
      <div className='gap-5'>
      {
       movies.map((movie,index)=>{
            return(
              <div className='flex flex-row mt-3 text-white h-1/3 justify-between px-2 mb-1 align-middle items-center' key={index}>
                <div className='flex flex-col'>
                <p className='font-medium'>{movie.title}</p>
                {/* <p className=''>{movie.overview}</p> */}
                <p className=''>Release Date : {movie.release_date}</p>
                </div>
                <div>
                <img className='' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} style={{height:'80px'}}/>
                </div>
                
              </div>
              
            )
        })
      }
      </div>
    </div>
  )
}

export default HeroNowPlaying