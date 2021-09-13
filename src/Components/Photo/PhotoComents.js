import React from 'react'

import { PhotoComentsForm } from './PhotoComentsForm';
import styles from './PhotoComents.module.css'
import { useSelector } from 'react-redux';

export const PhotoComents = (props) => {
    const [comments, setComments] = React.useState(() => props.comments)

    const { data } = useSelector(state => state.user);
    const commentsSection = React.useRef(null);
    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);
    return (

        <div className={styles.comments} className={`${styles.comment} ${props.single ? styles.single : ''}`}>
            {comments &&
                <ul ref={commentsSection}>
                    {comments.map((comment) => <li key={comment.comment_ID}>
                        <b> {comment.comment_author}</b>
                        <span> {comment.comment_content}</span>
                    </li>)}
                </ul>
            }

            {data && <PhotoComentsForm single={props.single} id={props.id} setComments={setComments} />}

        </div>
    )
}
