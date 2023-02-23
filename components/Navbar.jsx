import React, { useEffect, useState } from 'react'
// import styles from '@/styles/Navbar.module.css'
// import '@/styles/Navbar.css'
// import { NavLink } from 'react_dom'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './Sidebar'

export default function Navbar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  }
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`nav_wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav_logo">
          <h1 className={`logo ${scrolled ? 'scrolled' : ''}`}>lokal</h1>
        </div>
        <ul className='nav_list'>
          <li className={`menu_item ${scrolled ? 'scrolled' : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`menu_item ${scrolled ? 'scrolled' : ''}`}>
            <Link href="/Favorite">Favorite</Link>
          </li>
          <li className={`menu_item ${scrolled ? 'scrolled' : ''}`}>
            <Link href="/About">About</Link>
          </li>
          {/* <li><NavLink to="/" className={({ isActive }) => (isActive ? 'link_active' : 'link')} >Home</NavLink></li>
        <li><NavLink to="/About" className={({ isActive }) => (isActive ? 'link_active' : 'link')}>About</NavLink></li>
        <li><NavLink to="/Karya" className={({ isActive }) => (isActive ? 'link_active' : 'link')}>Karya</NavLink></li>
        <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? 'link_active' : 'link')}>Contact</NavLink></li> */}
        </ul>
        <div className="menu_toggle">
        <a onClick={() => handleNav()}>
         <GiHamburgerMenu/>
        </a>
      </div>
      </div>
      
      {nav ? <Sidebar /> : ''}
    </div>
  )
}
