import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";

import styles from ".././Auth.module.css";

import usuarioLogando from "../../assets/images/auth/usuario_logando.svg";

import { useState } from "react";

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const pegarValorEmail = (event) => {
        if(event.trim() ==  ""){
            console.log("O email ta vazio !")
        }
        setEmail(event);
    }

    const pegarValorSenha = (event) => {
        if(event.trim() == ""){
            console.log("Senha está vazia")
        }
        setSenha(event); 
    }

    const enviarDados = (e) => {
        e.preventDefault();
        if(email.includes("@")){
            console.log(email);
        }
    }
    

    return(
        <main id={styles.tela_central}>
            <div className={styles.logo}>
                <img src={usuarioLogando} />
            </div>
            <div className={styles.form_lateral}>
                <h1>Logo</h1>
                <div className={styles.form_lateral_informacoes}>
                    <p>Bem vindo!</p>
                    <p>faça login e aproveite a plataforma</p>
                </div>
                    <form action="" onSubmit={(e) => enviarDados(e)} className={styles.form_lateral_inputs}>
                        <Input icon="bi bi-envelope" placeholder="teste" valor={email} onChange={(event) => pegarValorEmail(event)}/>
                        <Input icon="bi bi-person-lock" placeholder="teste" valor={senha} onChange={(event) => pegarValorSenha(event)}/>
                        <Button assunto="Acessar" />
                    </form>
                </div>
        </main>
    )
}

export default Login; 