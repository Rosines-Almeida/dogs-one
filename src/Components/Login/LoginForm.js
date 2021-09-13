import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Form/Input';
import { Button } from '../Form/Button';
import { useForm } from '../../Hooks/useForm';
import { UserContext } from '../../Hooks/UserContext';
import { Error } from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Form/Button.module.css';
import { Head } from '../Helper/Head';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../store/user';

export const LoginForm = () => {
    const username = useForm('nome');
    const password = useForm('');
    const { token, user } = useSelector(state => state)
    const loading = token.loading || user.loading;
    const error = token.error || user.error;
    const dispatch = useDispatch()


    async function handleSubimit(event) {
        event.preventDefault();
        if (username.validate() && password.validate()) {
            dispatch(userLogin({ username: username.value, password: password.value }));
        }
    }
    return (
        <section className="animeLeft">
            <Head title="Login" />
            <h1 className="title"> Login </h1>
            <form className={styles.form} onSubmit={handleSubimit}>
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
                    : <Button> Entrar   </Button>}
                <Error error={error && 'Dados incorretos.'} />

            </form>
            <Link className={styles.perdeu} to="/login/perdeu"> Perdeu a Senha</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>
                    Cadastre-se
                </h2>
                <p> Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/criar"> Cadastro</Link>
            </div>

        </section>
    );
};