  import Head from 'next/head'
  import Image from 'next/image'
  import styles from '@/styles/Home.module.css'
  import NavbarFixed from '../components/NavbarFixed'
  import ProductCard from '../components/ProductCard';
  import productsData from '../data/products.json';
  import Footer from '../components/Footer'
  // import NavbarFixed from '../components/NavbarFixed'


  export default function Home() {
    
    const filteredProducts = productsData.filter((product) => product.type === 'best')

    return (
      <div>
      <NavbarFixed/>
      <div className={styles.main_wrapper}>
        <img className={styles.img} src="/assets/slide-2.jpg" alt="" />
        <h2 className={styles.text}>We're Here, Only For You</h2>

      </div>
      <div className={styles.message}>
        <h4>
            Featured Product
        </h4>
      </div>
      <div className={styles.product_list}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <Footer/>
    </div>
    )
  }
