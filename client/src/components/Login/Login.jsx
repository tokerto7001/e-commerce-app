import React, { useContext, useRef } from 'react';
import { UserContext } from '../../context/UserContext';
import styles from './Login.module.css';
import { faUserAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Login() {
    const { login } = useContext(UserContext);
    const inputRef = useRef({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        inputRef.current[name] = value
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src="/login2.png" alt="login" className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={(e) => login(e, inputRef.current)}>
                    <div className={styles.formTitle}>
                        <h1 className={styles.title}>Login</h1>
                    </div>
                    <div className={styles.formInput}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Username: </label>
                            <div className={styles.inputGroup}>
                                <FontAwesomeIcon className={styles.icon} icon={faUserAlt} />
                                <input className={styles.input} type='text' placeholder='email' name='email' onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Password:</label>
                            <div className={styles.inputGroup}>
                                <FontAwesomeIcon className={styles.icon} icon={faMailBulk} />
                                <input className={styles.input} type='text' placeholder='password' name='password' onChange={handleInputChange} />
                            </div>
                        </div>
                        <button onClick={(e) => login(e, inputRef.current)} type='submit' className={styles.button}>Login</button>
                    </div>
                </form>
            </div>

        </div>

    )
}
