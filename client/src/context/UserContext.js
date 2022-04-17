import { createContext, useState } from "react";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({children}) => { 
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (e, user) => {
        e.preventDefault();
        console.log(user)
        axios.post('/user/login', user.email, user.password)
        .then(res => {
            console.log(res.data)
            setUser(res.data);
            setIsAuthenticated(true);
        })
        .catch(err => {
            console.log(err);
        })
    };

    const logout = () => {
    
    };

    return (
        <UserContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </UserContext.Provider>
    );

}