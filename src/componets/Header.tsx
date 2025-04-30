import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import Krato-logo-2 from './krato-logo-2.png'

const Header = () => {
  return (
    <header className='header'>
    <div>
      <Image
      src="/krato-logo-2.png"
      alt="logo"
      width={100}
      height={100}
      className='w-10 h-10'
      />
    </div>
      <nav className='nav'>
        <ul>
          <Link  href="/home"> Home  </Link>
          <Link  href="/about">  About </Link>
          <Link  href="/packages"> Packages  </Link>
          <Link  href="/contact"> Contact   </Link>
           </ul>
           
      </nav>
    </header>
  )
}
export default Header;
