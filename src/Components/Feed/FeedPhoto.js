import React from 'react'
import { PHOTOS_GET } from '../../api';
import { UseFetch } from '../../Hooks/UseFetch'
import { Error } from '../Helper/Error';
import { Loading } from '../Helper/Loading';
import { FeedPhotosItem } from './FeedPhotosItem'
import styles from './FeedPhoto.module.css'

export const FeedPhoto = ({setModalPhoto}) => {
const {  data, loading, error, request} = UseFetch();

   
    React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if(error) return <Error error={error}/>
  if(loading) return <Loading/>
  if(data) 

    return (
        <ul className={`${styles.feed} animeLeft`}>
           {data.map((photo)=> 
            <FeedPhotosItem 
            key={photo.id}
             photo={photo}
             setModalPhoto={setModalPhoto}
             />
            )}
           
            
        </ul>
    );
    else return null;
}