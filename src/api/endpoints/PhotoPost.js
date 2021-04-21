import React from 'react'
//import style from './UserPost.module.css'

export const PhotoPost = () => {
    const [token, setToken] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [img, setImg] = React.useState('');
    const URL = 'https://dogsapi.origamid.dev/json';
    
    function handleSubmit(event){
        event.preventDefault(event)
        
        const formData = new FormData();
        formData.append('img', img);
        formData.append('nome', nome);
        formData.append('peso', peso);
        formData.append('idade', idade);
        console.log(formData);

        fetch(`${URL}/api/photo`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body:formData 
          })
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then((json) => {
              console.log(json);
              return json;
            });
        }
/*
const USER_POST = {
  endpoint: '/api/user',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    username: '',
    password: '',
    email: '',
  },
};
*/

    return (
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        placeholder="Peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        placeholder="Idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
     
      <button>Enviar</button>
    </form>
    )
}
