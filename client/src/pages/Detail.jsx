import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams();

  const fetchData = () => {
    axios({
      method: 'GET',
      url: `http://localhost:8000/products/detail/${id}`,
      headers : {
        token: localStorage.getItem('token')
      }
    })
    .then((res) => console.log(res))
    .catch(err => console.log(err))
  }
  useEffect(() => {
   fetchData();
  }, [])
  return (
    <div>Detail</div>
  )
}

export { Detail };
