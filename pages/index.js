// import Image from 'next/image'
import BodySection from '@/component/BodyCollection/BodySection'
import Herosection from '@/component/HeroCollection/Herosection'
import Navbar from '@/component/Navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='px-44 bg-black h-52 flex flex-col'>
      <div className=' '>
      <Navbar/>
      </div>
      <div>
        <Herosection/>
      </div>
      <div>
        <BodySection/>
      </div>
    </div>
  )
}
