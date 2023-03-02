import Link from 'next/link';
import styles from '@/styles/ProductCard.module.css'




function ProductCard({ product }) {

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      {/* <div className={styles.product_list}> */}
      <Link href={`/products/${product.id}`}>
        <div className={styles.product_card}  >

          <div className={styles.product_card_image}>
            <img  src={product.image} alt={product.name} />
          </div>
          <div className={styles.product_card_details}>
            <h2 className={styles.product_name}>{product.name}</h2>
            <p className={styles.product_card_price}>{`$${product.price}`}</p>

          </div>

        </div>
      </Link>
      {/* </div> */}

    </div>


  );
}

export default ProductCard;
