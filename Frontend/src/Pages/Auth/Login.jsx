import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";

import styles from "./Auth.module.css";

import usuarioLogando from "../../assets/images/auth/usuario_logando.svg";
import logo from "../../assets/images/logo.PNG";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const {login} = useAuth();

    const navigate = useNavigate();

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

    const enviarDados = async(e) => {
        e.preventDefault();
        const ok = await login(email,senha);
        navigate("/home")
    }
    

    return(
        <main className ={styles.tela_central}>
            <div className={styles.container_img}>
                <img src={usuarioLogando} />
            </div>
            <div className={styles.form_lateral}>
                <img src={logo} className={styles.logo}/>
                <div className={styles.form_lateral_informacoes}>
                    <p>Bem vindo!</p>
                    <p>faça login e aproveite a plataforma</p>
                </div>
                <form action="" onSubmit={(e) => enviarDados(e)} className={styles.form_lateral_inputs}>
                    <Input icon="bi bi-envelope" placeholder="E-mail" valor={email} onChange={(event) => pegarValorEmail(event)}/>
                    <Input icon="bi bi-person-lock" placeholder="Senha" valor={senha} onChange={(event) => pegarValorSenha(event)}/>
                    <p>Se você ainda não possui uma conta, <Link to="/register">clique aqui</Link> !</p>
                    <Button assunto="Acessar" />
                </form>
            </div>
        </main>
    )
}

export default Login; 