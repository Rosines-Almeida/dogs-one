import React from 'react'
import styles from './Input.module.css'

export const Input = ({label, name, type, value, setValue, error, onBlur }) => {
    return (
      <div className={styles.wrapper}>
        <label
          className={styles.label}
          htmlFor={name}>
          {label}
        </label>
        <input className={styles.input}
          type={type}
          name={name}
          value={value}
          onChange={({ target})=>setValue(target.value)}
          onBlur={onBlur}
        />
        {error && <p className={styles.error}> {error} </p>}
      </div>
    
    )
}
