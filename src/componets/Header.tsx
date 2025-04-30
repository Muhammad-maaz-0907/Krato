import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
        {/* <ul>
          <Link  href="/home">  <li> Home </li> </Link>
          <Link  href="/about">  <li>About</li> </Link>
          <Link  href="/packages"> <li> Packages </li> </Link>
          <Link  href="/contact"> <li>Contact  </li> </Link>
           </ul> */}

<ul>
          <Link  href="/home">  <li> Home </li> </Link>
          <Link  href="/about/page.tsx">  <li>About</li> </Link>
          <Link  href="/packages"> <li> Packages </li> </Link>
          <Link  href="/contact"> <li>Contact  </li> </Link>
           </ul>
           
      </nav>
    </header>
  )
}
export default Header;
