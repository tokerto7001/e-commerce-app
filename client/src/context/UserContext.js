import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({children}) => { 
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [favs, setFavs] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (e, user) => {
        e.preventDefault();
        console.log(user)
        axios.post('http://localhost:8000/user/login', user)
        .then(res => {
            console.log('userInfo', res.data)
            setUser(res.data);
            setIsAuthenticated(true);
            // console.log('****', res.data.favs, '******')
            setFavs(res.data.data.favs)
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        })
    };
    const register = (e, user) => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/register', user)
        .then((res) => {
            if(res.data == 'success'){
            navigate('/');
            }else{
                alert(res.data)
            }
        })
        .catch((err) => alert(err))
    }

    const checkAuth = (token) => {
        axios({
            method: 'POST',
            url: `http://localhost:8000/user/checkAuth`,
            headers : {
              token: localStorage.getItem('token')
            },
            data: {
                token : token
            }
          }).then(res => {
              console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
            // console.log('****', res.data.favs, '******')
            setFavs(res.data.data.favs)
            // localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
          })
    }

    const logout = () => {
    
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log(token)
        token && checkAuth(token)
    }, [])

    return (
        <UserContext.Provider value={{ user, isAuthenticated, token, favs, setFavs, login, logout, register }}>
            {children}
        </UserContext.Provider>
    );

}