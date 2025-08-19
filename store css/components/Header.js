import React from 'react'
import { Link } from 'react-router-dom'
import '../cssFolder/Header.css'

const Header = () => {
  return (
    <>
        <header className='bg-violet-200 h-12 flex justify-between items-center px-4'>
            <h2 className='text-xl'>AgServices</h2>
            <ul className='flex gap-24 text-sm'>
                <li>Home</li>
                <li>About</li>
                <li><Link to={`/signup`}>Sign Up</Link></li>
                <li><Link to={`/login`}>Login</Link></li>
            </ul>
        </header>
    </>
  )
}

export default Header
