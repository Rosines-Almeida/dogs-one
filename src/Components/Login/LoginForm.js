import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'
// import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../Hooks/UserContext'
import { Error } from '../Helper/Error'
import  styles from  './LoginForm.module.css'
import  stylesBtn from  '../Form/Button.module.css'

export const LoginForm = () => {
    console.log(styles)
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
        <section className="animeLeft">
            <h1 className="title"> Login </h1>
            <form className={styles.form}  onSubmit={handleSubimit}>  
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
        <Error error={error}/>
       
            </form>
            <Link className={styles.perdeu} to="/login/perdeu"> Perdeu a Senha</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>
                    Cadastre-se
                </h2>
                <p> Ainda não possui conta? Cadastre-se no site.</p>
            </div>
            <Link className={stylesBtn.button} to="/login/criar"> Cadastro</Link>
            
        </section>
    )
}
