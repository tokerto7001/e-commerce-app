import React, { useContext, useEffect, useState } from 'react';
import styles from './ProductCard.module.css';
import { FaRegHeart, FaHeart} from 'react-icons/fa';
import { UserContext } from '../../../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({data}) {
  const { favs, setFavs } = useContext(UserContext)
  // console.log(favs)
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();
  // console.log(data.id)
  const addFav = () => {
    axios({
      method: 'POST',
      url: `http://localhost:8000/user/fav/${data._id}`,
      headers : {
        token: localStorage.getItem('token')
      }
    })
    .then(res => {
      setFavs(res.data.favs)
    })
  }

  const deleteFav = () => {
    axios({
      method: 'DELETE',
      url: `http://localhost:8000/user/fav/${data._id}`,
      headers : {
        token: localStorage.getItem('token')
      }
    }).then(res => {
      console.log('deleted', res.data)
      setFavs(res.data.favs)
    })
  }


  useEffect(() => {
      console.log(favs)
      const checkFav = favs?.filter(el => el._id === data._id)
      checkFav.length ? setIsFav(true) : setIsFav(false)
  },[favs])

  return (
    <div onClick={() => navigate(`/detail/${data._id}`)} className={styles.container}>
      <div className={styles.icon}> 
        {
          isFav ? 
          <FaHeart onClick={(e) => {
            e.stopPropagation();
            deleteFav();
          }}/>
          :
          <FaRegHeart onClick={(e) => {
            e.stopPropagation();
            addFav();
          }} />
        }
      </div>
      <div className={styles.imgContainer}>
        <img height={200} src={data.img} alt={data.name} className={styles.img}/>
      </div>
      <div className={styles.infoContainer}>
        <div  className={styles.title}>{data.title.slice(0, 75) + '...'}</div>
        <div className={styles.price}>{data.price}$</div>
      </div>
        <button
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.buy}>Buy</button>
    </div>
  )
}
