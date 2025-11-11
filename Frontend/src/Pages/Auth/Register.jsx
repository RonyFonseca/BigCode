import { useState } from "react";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";

import styles from ".././Auth.module.css";

import logo from "../../assets/images/logo.PNG";

import usuarioCadastrando from "../../assets/images/auth/usuario_cadastrando.svg"


function Register(){


    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
    const [senha, setSenha] = useState("");

    const pegarValorEmail = (event) => {
        setEmail(event);
    }

    const pegarValorSenha = (event) => {
        setSenha(event);
    }
    const pegarValorNome = (event) => {
        setNome(event);
    }

    const pegarValorSenhaConfirmacao = (event) => {
        setSenhaConfirmacao(event);
    }

    const enviarDados = (e) => {
        e.preventDefault(); 
        console.log(nome,email,senha);
    }

    return (
        <main id={styles.tela_central}>
            <div className={styles.container_img}>
                <img src={usuarioCadastrando} />
            </div>
            <div className={styles.form_lateral}>
                <img src={logo} id={styles.logo}/>
                <div className={styles.form_lateral_informacoes}>
                    <p>Bem vindo!</p>
                    <p>faça a criação e aproveite a plataforma.</p>
                </div>
                <form action="" onSubmit={(e) => enviarDados(e)} className={styles.form_lateral_inputs}>
                    <Input icon="bi bi-person" placeholder="Nome" valor={email} onChange={(event) => pegarValorNome(event)}/>
                    <Input icon="bi bi-envelope" placeholder="Email" valor={email} onChange={(event) => pegarValorEmail(event)}/>
                    <Input icon="bi bi-person-lock" placeholder="Senha" valor={senha} onChange={(event) => pegarValorSenha(event)}/>
                    <Input icon="bi bi-person-lock" placeholder="Confirmação" valor={senha} onChange={(event) => pegarValorSenhaConfirmacao(event)}/>
                    <Button assunto="Acessar" />
                </form>
            </div>
        </main>
    )
}

export default Register; 