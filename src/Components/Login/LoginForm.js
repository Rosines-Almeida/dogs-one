import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'
// import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../Hooks/UserContext'

export const LoginForm = () => {
    const username = useForm('nome');
    const password = useForm('');
    const {userLogin , error, loading } = React.useContext(UserContext);
    console.log(error)
    
    // React.useEffect(()=>{
    //     const token = window.localStorage.getItem('token');
    //     token && getUser(token)
    // },[])
 
    //  async function getUser(token){
        
    //     console.log(token)
    //     const { url, options } = USER_GET(token)
    //     const response = await fetch(url, options);
    //     console.log('user_get', response)

    // }

    async function handleSubimit(event) {
        event.preventDefault();
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
            // const { url, options } = TOKEN_POST({
            //     username: username.value,
            //     password: password.value
            // })

            // const response = await fetch(url, options);
            // const json = await response.json();
            // window.localStorage.setItem('token', json.token)
            // getUser(json.token)
            
        }
    }
    return (
        <section>
            <h1> Login </h1>
            <form action="" onSubmit={handleSubimit}>  
            <Input 
                type="text"
                label="Usuário"
                name="username"
                {...username}
            />
              <Input 
                type="password"
                label="Senha"
                name="password"
                {...password}
            /> 
            {loading 
            ? <Button disabled> Carrgando ...   </Button>
            :  <Button > Entrar   </Button>
            }
      
        {error && <p>{error}</p>}
            </form>
            <Link to="/login/criar"> Cadastro</Link>
          
        </section>
    )
}
