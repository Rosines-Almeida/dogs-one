import React from 'react'
import style from './UserPost.module.css'

export const TokenPost = () => {
    const [username, setUserName ] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken ] = React.useState('');
    const URL = 'https://dogsapi.origamid.dev/json';
    
    function handleSubmit(event){
        event.preventDefault(event)
        fetch(`${URL}/jwt-auth/v1/token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
         
            }),
          })
            .then((response) => { 
              return response.json();
            })
            .then((json) => { 
              return json;
            });
        }
 
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='username'
            value={username}
            onChange={({ target })=>setUserName(target.value)}
            />
           
             <input 
            type='text'
            placeholder='password'
            value={password}
            onChange={({ target })=>setPassword(target.value)}
            />
            <button> enviar </button>

        </form>
       
    )
}
