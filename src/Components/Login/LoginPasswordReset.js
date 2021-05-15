import React from 'react';
import { useNavigate } from 'react-router';
import { UseFetch } from '../../Hooks/UseFetch';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { Error } from '../Helper/Error';
import { PASSWORD_RESET } from '../../api';
import { useForm } from '../../Hooks/useForm';

import { Head } from '../Helper/Head';

export const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const { error, loading, request } = UseFetch();
    const password = useForm();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');
        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });
            const { response } = await request(url, options);
            if (response.ok) navigate('/login');
        }
    }
    return (
        <section className="animeLeft">
            <Head title="Resete a senha" />
            <h1 className="title">Resete a Senha </h1>
            {/* <p>{key}</p>
            <p>{login}</p> */}
            <form onSubmit={handleSubmit}>
                <Input
                    label="Nova Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading
                    ? (<Button disabled> Resetando... </Button>)
                    : (<Button> Resertar </Button>)}
            </form>
            <Error error={error} />
        </section>
    );
};
