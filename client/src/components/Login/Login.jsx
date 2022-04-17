import React, { useContext, useRef } from 'react'
import { UserContext } from '../../context/UserContext'

export default function Login() {
    const { login } = useContext(UserContext);
    const inputRef = useRef({
        email : '',
        password : ''
    })

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        inputRef.current[name] = value
    }

  return (
    <form onSubmit={(e) => login(e, inputRef.current)}>
        <input type='text' placeholder='email' name='email' onChange={handleInputChange} />
        <input type='text' placeholder='password' name='password' onChange={handleInputChange}/>
        <button>Login</button>
    </form>
  )
}
