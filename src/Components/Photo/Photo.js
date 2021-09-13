import React from 'react'
import { useParams } from 'react-router'
import { Error } from '../Helper/Error';
import { Head } from '../Helper/Head';
import { Loading } from '../Helper/Loading';
import { PhotoContent } from './PhotoContent';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhoto } from '../../store/photo'

export const Photo = () => {
    const { id } = useParams();
    const { data, loading, error } = useSelector(state => state.photo)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPhoto(id));
    }, [dispatch, id])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <section className="container mainContainer">
                <Head
                    title={data.photo.title}
                />
                <PhotoContent single={true} />
            </section>

        )
    else return null
}
