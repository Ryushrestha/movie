import Link from 'next/link'
import {useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Heroheading = () => {
  const router = useRouter()
  const {pathName} = router
  // console.log(pathName)
  const activeLink = 'bg-green-900 px-3 font-semibold text-white'
  const inactiveLink = 'px-3 font-semibold  text-white'

  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const currentTime = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(currentTime)
    }
  }, [])
  return (
    <div className='px-10  py-2  flex flex-row justify-between' style={{ backgroundColor: '#1A1A1A' }}>
      <div className='flex flex-row gap-6 ps-6'>
        <Link href={'/'} className={pathName === '/' ? activeLink : inactiveLink}>Popular</Link>
        <Link href={'/toprated'} className={pathName === '/toprated' ? activeLink : inactiveLink}>Top Movies</Link>
        <Link href={'/nowplaying'} className={pathName === '/nowplaying' ? activeLink : inactiveLink}>Latest</Link>
      </div>

      <div className='flex flex-row gap-6 text-white'>
        <p className='text-white'>{time.toLocaleTimeString()}</p>
        <span className='flex flex-row gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
          </svg>
          <p>24*C</p>
        </span>
      </div>
    </div>
  )
}

export default Heroheading