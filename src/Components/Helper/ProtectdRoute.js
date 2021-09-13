import React from 'react'
import { Navigate, Route } from 'react-router';
import { UserContext } from '../../Hooks/UserContext'
import { useSelector, useDispatch } from 'react-redux';

export const ProtectdRoute = (props) => {
    const { data } = useSelector(state => state.user)
    if (data) return <Route {...props} />
    else if (data === null) return <Navigate to="/login" />
    else return null
}

/*criado para identificar se o user esta logado
se true - direciona para rota conta (criada no App.js)
se não direciona para rota de login (setado nesta aruivo)

*/