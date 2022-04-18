import React from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';



import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
export default function Navbar({keyword, getItem}) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logo}>
          <Link className={styles.linkLogo} to="/">
          <img src="/logo.png" alt="logo" width={125} />
          <span>AFRA SHOP</span>
          </Link>
        </div>
        <div className={styles.search}>
          <SearchBar keyword={keyword} getItem={getItem} />
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Link  className={styles.link} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className={styles.iconText}>Sepetim</div>
            </Link>
          </div>
          <div className={styles.icon}>
            <Link className={styles.link} to="/favorite">
            <FontAwesomeIcon icon={faHeart} />
            <div className={styles.iconText}>Favoriler</div>
            </Link>
          </div>
          <div className={styles.icon}>
            <Link className={styles.link} to="/profile">
            <FontAwesomeIcon icon={faUserAlt} />
            <div className={styles.iconText}>Hesabım</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
