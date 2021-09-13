import React from 'react'
import { PHOTO_GET } from '../../api';
import { UseFetch } from '../../Hooks/UseFetch'
import { Error } from '../Helper/Error';
import { Loading } from '../Helper/Loading';
import { PhotoContent } from '../Photo/PhotoContent';
import styles from './FeedModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhoto } from '../../store/photo';

export const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, loading, error } = useSelector((state) => state.photo);
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchPhoto(photo.id));
    }, [dispatch, photo])

    function handleOutSideClick(event) {
        if (event.target === event.currentTarget) setModalPhoto(null)
    }

    return (
        <div className={styles.modal} onClick={handleOutSideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}

        </div>
    )
}
