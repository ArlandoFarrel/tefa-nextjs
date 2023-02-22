import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
// import '../styles/Home.css'
import Footer from '../components/Footer'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className={styles.main_wrapper}>
      <img className={styles.img} src="/assets/slide-2.jpg" alt="" />
      <h2 className={styles.text}>We're Here, Only For You</h2>
      {/* <h4 className='text'>Only For You!</h4> */}
    </div>
    <div className={styles.message}>
      <h4>
          Explore Our Product
      </h4>
    </div>
    <div className={styles.product_list}>
    {productsData.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  <Footer/>
  </div>
  )
}
