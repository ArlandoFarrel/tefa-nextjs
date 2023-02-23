import Link from 'next/link';
import styles from '@/styles/ProductCard.module.css'
// import '../styles/ProductCard.css'


function ProductCard({ product }) {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      {/* <div className={styles.product_list}> */}
    <div className={styles.product_card}>
      <div className={styles.product_card_image}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.product_card_details}>
        <h2>{product.name}</h2>
        {/* <p>{product.description}</p> */}
        <p className={styles.product_card_price}>{`$${product.price}`}</p>
        {/* <Link href={`/products/${product.id}`}>
          View Product
        </Link> */}
      </div>
    </div>
    {/* </div> */}
    </div>
  );
}

export default ProductCard;
