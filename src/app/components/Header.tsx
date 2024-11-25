import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function Header() {
  return (
   <header className='header'>
    <h1 className='logo'>Watch Wrist</h1>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/watches">Watches</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart className='hover' style={{color:'white', fontSize: '23px',}}/>
    </nav>
   </header>
   )
}

export default Header
