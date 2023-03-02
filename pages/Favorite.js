import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import React from 'react'
import productsData from '../data/products.json';
import styles from '@/styles/Fav.module.css'

export default function Favorite() {
  return (
    <div>
      <Navbar/>
      {/* <img className={styles.img} src="/assets/slide-1.jpg" alt="" /> */}
      <hr className={styles.hr}></hr>
      <div className={styles.product_list}>
    {productsData.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
      <Footer/>
    </div>
  )
}
