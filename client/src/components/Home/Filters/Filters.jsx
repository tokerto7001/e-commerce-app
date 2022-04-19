import React from 'react';
import styles from './Filters.module.css'

export default function Filters({payload, getItem}) {
    const handleInputChange = (e) => {
        const name = e.target.name;
        payload[name] = e.target.value
    }

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Filters
        </div>
        <div className={styles.select}>
            <div className={styles.cat}>Category</div>
            <div className={styles.listContainer}>
            <select className={styles.list} name='taxonomy_id' onChange={handleInputChange}>
                <option value=''>Select Category..</option>
                <option value="1">Accessories</option>
                <option value="2">Art & Collectibles</option>
                <option value="3">Bags & Purses</option>
                <option value="4">Bath & Beauty</option>
                <option value="5">Books, Movies & Music</option>
                <option value="6">Clothing</option>
                <option value="7">Craft Supplies & Tools</option>
                <option value="8">Electronics & Accessories</option>
                <option value="9">Home & Living</option>
                <option value="10">Jewelry</option>
                <option value="11">Paper & Party Supplies</option>
                <option value="12">Pet Supplies</option>
                <option value="13">Shoes</option>
                <option value="14">Toys & Games</option>
                <option value="15">Weddings</option>
            </select>

            </div>
        </div>
        <div>
            <div className={styles.price}>Price</div>
            <div className={styles.inputContainer}>
                <input 
                placeholder='Min.'
                name='min_price' onChange={handleInputChange} className={styles.input} />
                <span className={styles.span}> - </span>
                <input 
                placeholder='Max.'
                name='max_price' onChange={handleInputChange} className={styles.input} />
            </div>
        </div>

        <button className={styles.button} onClick={getItem}>Search</button>
    </div>
  )
}
