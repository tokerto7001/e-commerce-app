import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductPage.module.css';

export default function ProductPage({ data }) {
    console.log(data, 'data')

  return (
    <div className={styles.container}>
        {
            data.map((item, idx) => <ProductCard key={idx} data={item}/>)
        }
    </div>
  )
}
