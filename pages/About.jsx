import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '@/styles/About.module.css'
import SwiperCarousel from '@/components/Swiper'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */
// import { faGithub } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.service_wrapper}>
        {/* <img className={styles.img} src="assets/prev.jpg"></img> */}
        <SwiperCarousel />
        <h2 className={styles.service_title}>
          Our Story
        </h2>
        <div className={styles.main_service}>
          <p>
            Maternal Disaster is a gripping and unconventional clothing brand based in Bandung since 2003. Represents not only a more refined and forward-thinking brand, we reflect our each issues like a musical albums and every articles is like a song we write.

            Driven by the dream-quest of demon force that bore black mass hysteria, a carnal beast, living in a cosmos that is indifferent to our existence. Maternal Disaster is dangerous flame of brand that seemed lost for many years and that now once again has been set loose upon everyday society & to decipher the world objectively.

          </p>
          <p> Four young devils were brought together by our passion for music.
              Our first love has always been and will always be music,
              we try to give back to our roots through the products and opportunities we 
              provide through the company. We remains extremely involved in the production 
              and direction of Maternal Disaster, maintaining the respect over communities 
              we continue to support our friends, which helps us fuel and inspire our original vision. 
              Our goal for Maternal Disaster is to evoke emotions then create topics of discussion through our designs and boldly stated our idea at the hand of youth culture.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
