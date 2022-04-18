import React from 'react'
import Filters from '../Filters/Filters';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductPage.module.css';

export default function ProductPage({ data }) {
  console.log(data, 'data')

  return (
    <div className={styles.container}>
        <Filters />
        <div className={styles.productContainer}>
          {
              data.map((item, idx) => <ProductCard key={idx} data={item}/>)
          }
        </div>
    </div>
  )
}
