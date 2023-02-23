import React from 'react'
import styles from '@/styles/Footer.module.css'

export default function () {
    return (
        <div>
            <footer className={styles.main_footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_left}>
                        <p>© 2023 lokal. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
