import React from 'react'
import { UserContext } from '../../Hooks/UserContext'
import { PhotoComentsForm } from './PhotoComentsForm';
import styles from './PhotoComents.module.css'

export const PhotoComents = (props) => {
    const [comments, setComments] = React.useState(()=>props.comments)
    const { login  } = React.useContext(UserContext);
    const commentsSection = React.useRef(null);
    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
      }, [comments]);
    return (
        
        <div className={styles.comments}>
            {comments&&
                <ul ref={commentsSection}>
                    {comments.map((comment) => <li key={comment.comment_ID}>
                        <b> {comment.comment_author}</b>
                        <span> {comment.comment_content}</span>
                    </li>)}
                </ul>
            }
             
            {login && <PhotoComentsForm id={props.id} setComments={setComments}/>}
            PhotoComents
        </div>
    )
}
