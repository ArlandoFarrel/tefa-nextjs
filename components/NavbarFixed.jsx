import React, { useEffect, useState } from 'react'
// import styles from '@/styles/Navbar.module.css'
// import '@/styles/Navbar.css'
// import { NavLink } from 'react_dom'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './Sidebar'
import styles from '@/styles/NavbarFixed.module.css'

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
      <div className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navLogo}>
          <h1 className={`${styles.logo} ${scrolled ? styles.scrolled : ''}`}>lokal</h1>
        </div>
        <ul className={styles.navList}>
          <li className={`${styles.menuItem} ${scrolled ? styles.scrolled : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${styles.menuItem} ${scrolled ? styles.scrolled : ''}`}>
            <Link href="/Favorite">Favorite</Link>
          </li>
          <li className={`${styles.menuItem} ${scrolled ? styles.scrolled : ''}`}>
            <Link href="/About">About</Link>
          </li>
        </ul>
        <div className={`${styles.menuToggle} ${scrolled ? styles.scrolled : ''}`}>
          <a onClick={() => handleNav()}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>

      {nav ? <Sidebar /> : ''}
    </div>
  );
}