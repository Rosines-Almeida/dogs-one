import React from 'react'
import { COMMENT_POST } from '../../api'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import { UseFetch } from '../../Hooks/UseFetch'
import { Error } from '../Helper/Error'
import styles from './PhotoComentsForm.module.css'

export const PhotoComentsForm = ({id, setComments, }) => {
    const [comment, setComment] = React.useState('')
    const { data, loading, error, request } = UseFetch()
   

    async function handleSubmit(event){
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment})
         const {response, json} =  await request(url, options)
         console.log('r-c', json)
         
         if(response.ok) 
         setComment('')
         setComments((comments) => [...comments,json ])
    }
    return (
       <form className={styles.form} onSubmit={handleSubmit}>
           <textarea
           className={styles.textarea}
           id="coment"
           name="coment"
           placeholder="Comente ..."
           value={comment}
           onChange={({target})=>setComment(target.value) }
           />
           <button className={styles.button}> <Enviar/></button>
        <Error error={error}/>
       </form>
    )
}
