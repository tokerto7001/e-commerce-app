import { faHandFist, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({payload, getItem}) {
  const handleInputChange = (e) => {
    payload.keyword = e.target.value
  }

  return (
    <form onSubmit={(e) => getItem(e,payload)}>
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
