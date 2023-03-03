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
          Kami adalah sebuah usaha yang fokus pada reseller brand lokal berkualitas. Kami percaya bahwa brand lokal memiliki potensi besar untuk berkembang dan bersaing di pasar fashion nasional dan internasional.

Kami berkomitmen untuk menyediakan produk-produk terbaik dari brand lokal yang kami pilih dengan cermat, sehingga pelanggan kami dapat menemukan barang yang berkualitas dengan harga yang terjangkau.

Selain itu, kami juga bekerja sama dengan brand lokal untuk mengembangkan desain yang sesuai dengan kebutuhan pelanggan kami, dan membantu brand lokal untuk meningkatkan kualitas produk dan pemasaran mereka.


          </p>
          <p> Kami sangat memperhatikan kualitas layanan dan kepuasan pelanggan kami. Oleh karena itu, kami selalu berusaha memberikan pengalaman belanja yang nyaman dan mudah bagi pelanggan kami, serta memberikan layanan yang ramah dan profesional.

Kami juga peduli dengan lingkungan dan keberlanjutan. Oleh karena itu, kami berusaha untuk mengurangi dampak lingkungan dari kegiatan kami, dan mempromosikan praktik-praktik yang berkelanjutan dalam industri fashion.

Terima kasih telah memilih kami sebagai mitra belanja Anda. Silakan kunjungi toko kami untuk melihat koleksi kami dan jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau saran. Kami berharap dapat terus memberikan layanan yang terbaik dan terus mengembangkan usaha kami bersama Anda.   
    </p>
     </div>
      </div>
      <Footer />
    </div>
  )
}
