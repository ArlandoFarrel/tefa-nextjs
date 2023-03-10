import Navbar from '@/components/Navbar'
import productsData from '@/data/products.json'
import { useState } from 'react'
import styles from '@/styles/Detail.module.css'
import Footer from '@/components/Footer'
import Image from "next/image"
import Dropdown from 'react-dropdown'

function ProductDetail({ product }) {
  // const [currentImage, setCurrentImage] = useState(product.image)
  const [counter, setCounter] = useState(0)
  const { stock } = product // ambil nilai stok dari produk
  const { sizes } = product // ambil nilai size dari produk

  const handleAdd = () => {
    if (counter < stock) { // cek apakah counter sudah mencapai batas maksimal
      setCounter(counter + 1)
    }
  }

  const handleSubtract = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const handleTrash = () => {
    setCounter(0);
  }

  //   const handleImageClick = (image) => {
  //   setCurrentImage(image)
  // }


  return (
    <div>
      <Navbar />
      <div className={styles.detailWrapper}>
        <div className={styles.detailDesc}>
          <h1>{product.alias}</h1>
          <hr className={styles.hr}></hr>
          <p>{product.description}</p>
          {typeof sizes === 'object' && sizes.length > 0 &&
            <div className={styles.dropdown}>
              <h4 className={styles.size}>Size</h4>
              <Dropdown
                className={styles.selectS}
                controlClassName={styles.dropdownControl}
                menuClassName={styles.dropdownMenu}
                arrowClassName={styles.dropdownArrow}
                placeholder="Pilih Ukuran"
                id="sizes"
                name="sizes"
                options={sizes.map(size => ({ value: size, label: size }))}
                value={sizes[0]}
                onChange={(selected) => console.log(selected)}
              />
               
            </div>
          }
          <div className={styles.counter}>
            <div className={styles.sideCounter}>
            <h4>Quantity</h4>
            </div>
            <div className={styles.mainCounter}>
            <button className={styles.button} onClick={handleSubtract}>-</button>
            <span className={styles.number}>{counter}</span>
            <button className={styles.button} onClick={handleAdd}>+</button>
            <button className={styles.resetBtn} onClick={handleTrash}>Reset</button>
            {/* <h4>Stock : {product.stock}</h4> */}
            </div>
          </div>
         
          <button className={styles.checkoutButton}>Add to Cart</button>
        </div>
        <Image className={styles.detailImgA} src={product.image} alt={product.name} width={400} height={400} />
        <div className={styles.thumbnail}>
        {product.images &&
              Object.entries(product.images ).map(([key, value]) => (
                
        <Image className={styles.detailImg} src={value} alt={product.name} width={150} height={150} />
              ))}

        </div>
      </div>
      <Footer />
    </div>
  )
}

// export async function getStaticPaths() {
//   const paths = productsData.map((product) => ({
//     params: { id: product.id.toString() },
//   }))

//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//   const product = productsData.find((p) => p.id.toString() === params.id)

//   return { props: { product } }
// }
// ----
export async function getStaticPaths() {
  try {
    const paths = await productsData.map((product) => ({
      params: { id: product.id.toString() },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.log("Error Cuy");
  }
}

export async function getStaticProps({ params }) {
  try {
    const product = await productsData.find((product) => product.id.toString() === params.id);
    return { props: { product } };
  } catch (error) {
    console.log(error);
  }
}

export default ProductDetail
