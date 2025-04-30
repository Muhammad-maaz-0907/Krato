import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image2 from '../../public/image 2.jpg'

const Header = () => {
  return (
    <header className='header'>
    <div>
      <Image
      // src="/krato-logo-2.png"
      src={image2}
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
  <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/packages">Packages</Link></li>
          
 </ul>
           
      </nav>
    </header>
  )
}
export default Header;
