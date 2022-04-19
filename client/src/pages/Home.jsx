import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ProductPage from '../components/Home/ProductPage/ProductPage';
import Navbar from '../components/Navbar/Navbar';
import { UserContext } from '../context/UserContext';

function Home() {
  const { token } = useContext(UserContext);
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([]);
  const inputRef = useRef({
    keyword : '',
    min_price: '',
    max_price: '',
    taxonomy_id: '',
  })

  const getItem = (e) => {
    if(e) e.preventDefault();
    const payload = {
      keyword : inputRef.current.keyword,
      min_price: inputRef.current.min_price,
      max_price: inputRef.current.max_price,
      taxonomy_id: inputRef.current.taxonomy_id,
      page: page
    }
    console.log('-----', payload)
      axios.post('http://localhost:8000/products', payload)
      .then(res => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const increasePage = () => {
      console.log('increase')
      setPage(page +1)

  }

  const decreasePage = () => {
    console.log('decrease')
    page > 1 && setPage(page - 1)
  }

  useEffect(() => {
    getItem();
  }, [page])

  return (
    <>
      <Navbar payload={inputRef.current} getItem={getItem} />
      <ProductPage
      page={page} 
        payload={inputRef.current}  
        getItem={getItem} 
        data={products}
        increasePage={increasePage}
        decreasePage={decreasePage}  
      />
    </>
  
  )
}

export { Home };
