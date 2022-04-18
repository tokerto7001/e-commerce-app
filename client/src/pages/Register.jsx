import React, {useRef, useContext} from 'react'
import styles from '../components/Login/Login.module.css';
import { faUserAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../context/UserContext';

function Register() {
  const { register } = useContext(UserContext);
  const inputRef = useRef({
      email: '',
      password: '',
      name : '',
      surname : ''
  })

  const handleInputChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      inputRef.current[name] = value
  }
  return (
    <>
              <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src="/login2.png" alt="login" className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={(e) => register(e, inputRef.current)}>
                    <div className={styles.formTitle}>
                        <h1 className={styles.title}>Register</h1>
                    </div>
                    <div className={styles.formInput}>
                    <div className={styles.inputContainer}>
                            <label className={styles.label}>Name:</label>
                            <div className={styles.inputGroup}>
                                <FontAwesomeIcon className={styles.icon} icon={faUserAlt} />
                                <input className={styles.input} type='text' placeholder='name' name='name' onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Surname:</label>
                            <div className={styles.inputGroup}>
                                <FontAwesomeIcon className={styles.icon} icon={faUserAlt} />
                                <input className={styles.input} type='text' placeholder='surname' name='surname' onChange={handleInputChange} />
                            </div>
                        </div>
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
                                <input className={styles.input} type='password' placeholder='password' name='password' onChange={handleInputChange} />
                            </div>
                        </div>
                        <button type='submit' className={styles.button}>Register</button>
                    </div>
                </form>
            </div>

        </div>
    </>
  )
}

export { Register };
