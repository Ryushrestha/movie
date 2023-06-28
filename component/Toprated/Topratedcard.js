import { getTopRatedMovies } from '@/service/axios.service'
import React, { useEffect, useState } from 'react'

const Topratedcard = () => {
    const [popular,setPopular] = useState([])

    const getToprated =async () =>{
      const data = await getTopRatedMovies()
      const response = data.results
      setPopular(response)
    }
    useEffect(()=>{
      getToprated()
    },[])
  return (
    <div className='flex flex-row flex-wrap justify-between px-4 '>
    {
      popular && popular.map((movie,index)=>{
        return(
          <div key={index} className='mt-4 bg-white rounded-md shadow-md'>
              <img className='w-96 h-80 object-cover align-bottom p-3  ' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
            <span className='w-96'>
            <p className='px-3 font-bold text-lg'>{movie.original_title}</p>
            <p className='w-96 px-3 font-semibold text-base line-clamp-2' style={{color:'#04594D'}}>{movie.overview}</p>
            </span>
              <table  className='w-3/5  m-3'>
                <thead>
                  <tr>
                    <td className='font-medium'>Rating</td>
                    <td>{movie.vote_average}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='font-medium'>Release Date :</td>
                    <td>{movie.release_date}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        )
      })
    }
  </div>
  )
}

export default Topratedcard