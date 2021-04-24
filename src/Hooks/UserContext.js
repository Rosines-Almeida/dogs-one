import React from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST} from '../api'
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData ] = React.useState(null);
    const [login, setLogin ] = React.useState(null)
    const [loading , setLoading ] = React.useState(false)
    const [error, setError ] = React.useState(null) 
    const navigate = useNavigate();

    const userLogout = React.useCallback(
        async function () {
          setData(null);
          setError(null);
          setLoading(false);
          setLogin(false);
          window.localStorage.removeItem('token');
          navigate('/login/');
        },
        [navigate],
      );

    
    
    async function getUser(token){ 
        console.log(token)
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();

        setData(json);  
        setLogin(true)
        console.log(`json -context`, json)
    }

    async function userLogin(username, password){
 
        try{
            setError(null);
            setLoading(true)
            const { url, options } = TOKEN_POST({username, password})
            const tokenRes = await fetch(url, options);
            console.log(tokenRes)
            if (!tokenRes.ok) throw new Error(`Error: Usuario inválido`);
            const { token } = await tokenRes.json();
            window.localStorage.setItem('token', token);
            await getUser(token);;
            navigate('/conta')
        }catch(err){
            console.log('catch', err)
            setError(err.message)
            console.log(error)
        }finally{
            setLoading(false);
        }
 
    }
 
    React.useEffect(() =>{
        async function autoLogin(){
            const token = window.localStorage.getItem('token');
            console.log(token)
            if(token){
                try{
                setError(null)
                setLoading(true)
                const { url, options} = TOKEN_VALIDATE_POST(token);
                const response = await fetch(url, options);
                await getUser(token)
                if(!response.ok) throw new Error('Token inválido')
                
                }catch(err){
                    userLogout()
                }finally{
                    setLoading(false)
                }
            }
        }
        autoLogin()
    },[userLogout])


    return (
     <UserContext.Provider value ={{ userLogin, data, userLogout, error, loading, login }}>
         {children}
     </UserContext.Provider>
    )
}
