import React from 'react'
import style from './UserPhotoPost.module.css'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'
import { UseFetch } from '../../Hooks/UseFetch'
import { PHOTO_POST } from '../../api'
import styles from './UserPhotoPost.module.css'
import {Error} from '../Helper/Error'
import { useNavigate } from 'react-router'
export const UserPhotoPost = () => {

const nome = useForm();
const peso = useForm('number');
const idade = useForm('number');
const [img, setImg] = React.useState({});
const {data, error, loading, request} = UseFetch();
const navigate = useNavigate();

    React.useEffect(() => {
        if (data) navigate('/conta');
    }, [data, navigate]);

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);
        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token)
        request(url, options )
        console.log(formData)
    }

    function handleImgChange({ target }) {
        setImg({
          preview: URL.createObjectURL(target.files[0]),
          raw: target.files[0],
        });
      }

    return (
        <section className={`${style.photoPost} animeLeft`}>
         <form  onSubmit={handleSubmit}>
             <Input label="Nome" type="text" name="nome" {...nome} />
             <Input label="Peso" type="text" name="peso"{...peso} />
             <Input label="Idade" type="text" name="idade" {...idade} />
             <input 
             className={styles.file}
             type="file" 
             name="img" 
             id="img"
             onChange={handleImgChange} 
             />
             <div  > 
                 {img.preview && 
                 <div  
                 className={styles.preview}
                 style={{ backgroundImage: `url('${img.preview}')` }}
                 ></div>
                 }

             </div>
             {loading 
             ?<Button disabled> Enviando...</Button>
             : <Button> Enviar</Button>
             }
             <Error error={error}></Error>
             
         </form>
        </section>
    )
}
