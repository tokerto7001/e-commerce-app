import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ProductPage from '../components/Home/ProductPage/ProductPage';
import Navbar from '../components/Navbar/Navbar';
import { UserContext } from '../context/UserContext';

function Home() {
  const { token } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const payload = useRef({
    keyword : '',
    min_price: '',
    max_price: '',
    taxonomy_id: '',
    page: 1
  })

  const getItem = () => {
      axios.post('http://localhost:8000/products', payload)
      .then(res => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getItem();
  }, [])

  return (
    <>
      <Navbar keyword={payload.current.keyword} getItem={getItem} />
      <ProductPage data={products}/>
    </>
  
  )
}

export { Home };
