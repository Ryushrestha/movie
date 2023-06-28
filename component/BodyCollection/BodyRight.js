import { getUpcomingMovies } from '@/service/axios.service'
import React, { useEffect, useState } from 'react'

const BodyRight = () => {
  const [popular, setPopular] = useState([])

  const getUpcoming = async () => {
    const data = await getUpcomingMovies()
    const limitedData = data.results.slice(0, 9)
    setPopular(limitedData)
  }
  useEffect(() => {
    getUpcoming()
  }, [])
  console.log(popular)

  return (
    <div className='bg-white p-3 flex flex-col shadow-xl'>
      <div className='flex flex-row justify-between'>
        <h1 className=' font-bold uppercase '>upcoming  </h1>
        <button className='bg-gray-700 hover:bg-black  text-white font-semibold py-0 px-4 rounded'>View All</button>
      </div>

      <div className=''>
        {
          popular.map((movie, index) => {
            return (
              <div className='flex flex-row mt-3' key={index}>
                <div className='w-1/2'>
                  <img className='h-28 w-full object-cover' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
                </div>
                <span className='w-1/2'>
                  <p className='px-3 font-bold text-base'>{movie.original_title}</p>
                  <p className=' px-3 font-semibold text-sm line-clamp-2' style={{ color: '#04594D' }}>{movie.overview}</p>
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BodyRight