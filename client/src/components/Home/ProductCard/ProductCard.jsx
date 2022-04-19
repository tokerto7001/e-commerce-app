import React from 'react';
import styles from './ProductCard.module.css';
import { FaRegHeart, FaHeart} from 'react-icons/fa';

export default function ProductCard({data}) {
  return (
    <div className={styles.container}>
      <FaRegHeart  className={styles.icon} />
      <div className={styles.imgContainer}>
        <img height={200} src={data.img} alt={data.name} className={styles.img}/>
      </div>
      <div className={styles.infoContainer}>
        <div  className={styles.title}>{data.title.slice(0, 75) + '...'}</div>
        <div className={styles.price}>{data.price}$</div>
      </div>
    </div>
  )
}
