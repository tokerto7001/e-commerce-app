import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.iconContainer}>
        <input className={styles.input} type='text' placeholder='Aradığınız ürünü giriniz..' />
        <div className={styles.icon}>
         <FontAwesomeIcon icon={faSearch} />

        </div>
    </div>
  )
}
