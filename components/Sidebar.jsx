import React from 'react';
import  Link  from 'next/link'
import styles from '@/styles/Sidebar.module.css'

const Sidebar = () => {
    
    return (
        <div className={styles.sidebar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Favorite">Favorite</Link></li>
                <li><Link href="/About">About Us</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
