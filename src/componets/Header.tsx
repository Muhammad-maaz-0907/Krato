import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
    <div>
      <img
      src="/krato-logo-2.png"
      alt="logo"
      className='w-10 h-10'
      />
    </div>
      <nav className='nav'>
        <ul>
          <Link  href="/Home">  <li> Home </li> </Link>
          <Link  href="/About">  <li>About</li> </Link>
          <Link  href="/Packages"> <li> Packages </li> </Link>
          <Link  href="/Contact"> <li>Contact  </li> </Link>
           </ul>
           
      </nav>
    </header>
  )
}
export default Header;
