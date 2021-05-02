import React from 'react'
import { Navigate, Route } from 'react-router';
import { UserContext } from '../../Hooks/UserContext'


export const ProtectdRoute = (props) => {
    const { login } = React.useContext(UserContext);

    if (login === true) return <Route {...props} />
    else if (login ===false) return <Navigate to="/login" />
    else return null 
}

/*criado para identificar se o user esta logado 
se true - direciona para rota conta (criada no App.js)
se não direciona para rota de login (setado nesta aruivo)

*/