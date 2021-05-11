import React from 'react'
import { PHOTO_DELETE } from '../../api'
import { UseFetch } from '../../Hooks/UseFetch'
import styles from './PhotoDelete.module.css'

export const PhotoDelete = ({id}) => {
    const { request, loading } = UseFetch();
    
   async function handleChange( ){ 
   if(window.confirm("Have you sure?")){
        const {url, options} = PHOTO_DELETE(id)
        const {response } = await request(url, options)
        if(response.ok) window.location.reload() 
   } 
    }
    UseFetch()
    return (
        <>
            {loading
                ? <button
                    disabled
                    className={styles.delete}
                > Delete </button>
                : <button
                    onClick={handleChange}
                    className={styles.delete}
                > Delete </button>
            }

        </>
    )
}
