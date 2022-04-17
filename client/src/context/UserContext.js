import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({children}) => { 
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (e, user) => {
        e.preventDefault();
        console.log(user)
        axios.post('http://localhost:8000/user/login', user)
        .then(res => {
            console.log(res.data)
            setUser(res.data);
            setIsAuthenticated(true);
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        })
    };

    const logout = () => {
    
    };

    return (
        <UserContext.Provider value={{ user, isAuthenticated, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );

}