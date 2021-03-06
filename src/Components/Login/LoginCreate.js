import React from 'react'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'
import { USER_POST } from '../../api'
import { UseFetch } from '../../Hooks/UseFetch'
import { Error } from '../Helper/Error'
import { Head } from '../Helper/Head'
import { userLogin } from '../../store/user'
import { useDispatch } from 'react-redux'

export const LoginCreate = () => {
    const username = useForm();
    const password = useForm();
    const email = useForm('email')

    const dispatch = useDispatch()
    const { error, loading, request } = UseFetch()

    async function handleSubmit(event) {
        event.preventDefault()
        const { url, options } = USER_POST({
            password: password.value,
            username: username.value,
            email: email.value
        })
        const { response } = await request(url, options);
        if (response.ok) {
            dispatch(userLogin({ username: username.value, password: username.value }))
        }

    }
    return (
        <section className="animeLeft">
            <Head title="Crie sua conta"
            />
            <h1 className="title"> Cadastre-se </h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}

                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    {...email}

                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}

                />
                {loading
                    ? (<Button disabled > Cadastrando ..  </Button>)
                    : (<Button> cadastrar </Button>)
                }
                <Error error={error}></Error>

            </form>
        </section>


    )
}
