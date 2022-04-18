import { faHandFist, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({keyword, getItem}) {
  const handleInputChange = (e) => {
    keyword = e.target.value
  }

  return (
    <form onSubmit={getItem}>
            <div className={styles.iconContainer}>
        <input
          onChange={handleInputChange}
          className={styles.input} 
          type='text' 
          placeholder='Aradığınız ürünü giriniz..' 
        />
        <div className={styles.icon}>
         <FontAwesomeIcon icon={faSearch} />

        </div>
    </div>
    </form>

  )
}
