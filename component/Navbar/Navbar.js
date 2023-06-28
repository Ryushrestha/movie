import React from 'react'
import Search from './Search'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'

const Navbar = () => {
    return (
        <>
            <div className=' py-6 pb-6 flex flex-row '>
                <a href='/'>
                <img src='/Logo.png' className='h-10' />
                </a>
                <div className='m-auto' >
                    <Search/>
                </div>
                <div>
                    <Menu>
                        <MenuButton className='text-white text-xl font-bold'>Login</MenuButton>
                        <MenuList>
                            <MenuItem onClick={(e)=>signIn('google',e.preventDefault())} >Sign In with Google</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default Navbar