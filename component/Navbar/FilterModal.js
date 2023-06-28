
import { Button, } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'


const FilterModal = () => {
    const [movie, setMovie] = useState([])
    const [title, setTitle] = useState('')
    const [startyear, setStartYear] = useState()
    const [endyear, setEndYear] = useState()
    const [limit, setLimit] = useState()
    const [type, setType] = useState("movie")





    const fetchMovie = () => {

        fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${title}?year=${startyear}&titleType=${type}&limit=${limit}&endYear=${endyear}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '936bd9fe5fmshd6b04f3a8e8560ap1fbed9jsne6c834ad6ecb',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovie(data.results)
            })

    }


    useEffect(() => {
        fetchMovie()
    }, [])



    console.log(movie)
    return (
        <>
  

            <div className='flex flex-row gap-6 py-3'>
                <div className='w-2/6 '>
                    <div className=' flex flex-col p-6 bg-black rounded-md'>

                        <div className='flex flex-row  gap-4'>
                            <label className='text-white pt-2 w-10 font-semibold'>Title</label>
                            <input required onChange={(e) => setTitle(e.target.value)} type='string' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-white text-sm font-normal lowercase  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Movie Title' />
                        </div>

                        <div className='flex flex-row  gap-4'>
                            <label className='text-white pt-2 w-10 font-semibold'>From</label>
                            <input required onChange={(e) => setStartYear(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='From Year (eg. 2022)' />
                        </div>

                        <div className='flex flex-row  gap-4'>
                            <label className='text-white pt-2 w-10 font-semibold'>To</label>
                            <input required onChange={(e) => setEndYear(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='End Year (eg. 2022)' />
                        </div>

                        <div className='flex flex-row  gap-4'>
                            <label className='text-white pt-2 w-10 font-semibold'>Type</label>
                            <input required onChange={(e) => setType(e.target.value)} type='string' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm text-white font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Example: movie, tvSeries, ' />
                        </div>

                        <div className='flex flex-row  gap-4'>
                            <label className='text-white pt-2 w-10 font-semibold'>Limit</label>
                            <input required onChange={(e) => setLimit(e.target.value)} type='number' className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm font-normal text-white  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50' placeholder='Max upto 10' />
                        </div>
                        <Button variant='solid' className='m-auto mt-6 w-20' onClick={fetchMovie}>Search</Button>
                    </div>
                </div>

                <div className='w-4/6 flex flex-row flex-wrap justify-between  gap-4'>
                    {
                      movie && movie.map((movies,index)=>{
                        return(
                            <div className='flex flex-col bg-white rounded-md shadow-md w-52 h-64 p-2' key={index}>
                                <div className='w-full h-full object-cover overflow-hidden'>
                                     <img className='object-cover ' src={movies.primaryImage.url} />
                                </div>
                                <span className='h-2/4'>
                                <p className='font-semibold text-base line-clamp-2'>{movies.primaryImage.caption.plainText}</p>
                                <p>{movies.titleType.id}</p>
                                </span>
                            </div>
                        )
                      })  
                    }
                </div>
            </div>

        </>
    )
}

export default FilterModal