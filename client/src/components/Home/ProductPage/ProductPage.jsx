import React from 'react'
import Filters from '../Filters/Filters';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductPage.module.css';

export default function ProductPage({ payload, getItem, data, increasePage, decreasePage, page}) {
  console.log(data, 'data')

  return (
  
      <div className={styles.container}>
        <Filters getItem={getItem} payload={payload} />
        <div className={styles.productContainer}>
          <div className={styles.product}>
            {
              data.map((item, idx) => <ProductCard key={idx} data={item} />)
            }

          </div>
           <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={decreasePage}>
          geri
        </button>
        <span className={styles.span}>{page}</span>
        <button className={styles.button} onClick={increasePage}>
          ileri
        </button>

      </div>
   
        </div>
      </div>
     

  )
}
