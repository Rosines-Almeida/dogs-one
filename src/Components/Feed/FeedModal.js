import React from 'react'
import { PHOTO_GET } from '../../api';
import { UseFetch } from '../../Hooks/UseFetch'
import { Error } from '../Helper/Error';
import { Loading } from '../Helper/Loading';
import { PhotoContent } from '../Photo/PhotoContent';
import styles from './FeedModal.module.css'

export const FeedModal = ({photo, setModalPhoto}) => {
    console.log(photo.id)
    
   const {data,loading, error, request} = UseFetch();

   React.useEffect(()=>{
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
 
  function handleOutSideClick(event) {
      if( event.target ===  event.currentTarget) setModalPhoto(null)
      console.log(`event.target`, event.target)
      console.log(`event.target`, event.currentTarget)
  }
  
    return (
        <div className={styles.modal} onClick={handleOutSideClick}>
            {error && <Error error={error}/>  }
            {loading && <Loading/>}
            {data &&  <PhotoContent data={data}/>}
            
        </div>
    )
}
