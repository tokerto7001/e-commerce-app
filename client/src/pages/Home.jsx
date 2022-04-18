import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ProductPage from '../components/Home/ProductPage/ProductPage';
import { UserContext } from '../context/UserContext';

function Home() {
  const { token } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  const getItem = () => {
      axios.post('http://localhost:8000/products')
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
    <ProductPage data={products}/>
  )
}

export { Home };
