// import { getSearchData } from '@/service/axios.service'

import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'


const Search = () => {
   
    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState('')
    const buttonRef = useRef(null)
    const router = useRouter()

    const search = useRef(null)

    const fetchMovie = () => {
        fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${title}?titleType=movie&limit=10`, {
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
                setMovies(data.results)
            })
         
    }
    useEffect(() => {
        fetchMovie()
    }, [])

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.ctrlKey && event.key === 'k') {
            event.preventDefault(); 
            buttonRef.current.click();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Enter') {
            event.preventDefault(); 
            search.current.click();
          }
        };
        window.addEventListener('keydown', handleKeyDown);
    }, []);

    console.log(movies)

    const filterHandler = (e) =>{
        e.preventDefault()
        const url = 'movies'
        router.push(url)
    }

    return (
        <>
            <div className="relative mx-auto text-gray-600  ">
                <button className="absolute left-2 top-0 mt-2 mr-4" ref={search} onClick={fetchMovie}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>


                <input className="border-2  border-gray-300 bg-white h-10  px-9 pr-16 rounded-md text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search For Entertainment" style={{ width: '400px' }}
                    onChange={(e) => setTitle(e.target.value)} />


                 <button className="absolute right-2 top-0 mt-2 mr-1" ref={buttonRef} onClick={(e)=>filterHandler(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </button>
                


              
                <div className='rounded-sm bg-white absolute w-full z-50 shadow-white '>

                {
                  
                    movies && movies.map((movie, index) => {
                        return (
                            <div className=' text-black px-3 py-1 ' key={index}>
                                <div className='flex flex-row gap-4'>
                                    <img className='h-20 w-14' src={movie.primaryImage.url} />
                                    <span className='flex flex-col'>
                                        <p className='font-bold'>{movie.titleText.text}</p>
                                        <p className='text-sm'>{movie.titleType.text}</p>
                                    </span>
                                </div>
                                <hr className='my-2'></hr>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Search