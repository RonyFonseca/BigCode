import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";

import styles from "./Auth.module.css";

import logo from "../../assets/images/logo.PNG";

import usuarioCadastrando from "../../assets/images/auth/usuario_cadastrando.svg"

import { useAuth } from "../../context/AuthContext.jsx";

import api from "../../services/api.js";


function Register(){

    const {login} = useAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
    const [senha, setSenha] = useState("");

    const [marcado, setMarcado] = useState(false);

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


    const handleChange = (e) => {
        setMarcado(e.target.checked);
    }

    const enviarDados = async(e) => {
        e.preventDefault(); 
        if(senhaConfirmacao!==senha){
            console.log("Senha diferentes")
        }

        const res = await api.post("users/create",{
            nickname:nome, 
            email:email,
            senha:senha
        })

        console.log(res);

        if(res.status==200){
            navigate("/register/validate",{state:{nome:nome,email:email,senha:senha,marcado:marcado}});
        }

        //const ok = await login(email,senha);
        //navigate("/register/validate");
    }

    return (
        <main className ={styles.tela_central}>
            <div className={styles.container_img}>
                <img src={usuarioCadastrando} />
            </div>
            <div className={styles.form_lateral}>
                <img src={logo} className={styles.logo}/>
                <div className={styles.form_lateral_informacoes}>
                    <p>Bem vindo!</p>
                    <p>faça a criação e aproveite a plataforma.</p>
                </div>
                <form action="" onSubmit={(e) => enviarDados(e)} className={styles.form_lateral_inputs}>
                    <Input icon="bi bi-person" placeholder="Nome" valor={email} onChange={(event) => pegarValorNome(event)}/>
                    <Input icon="bi bi-envelope" placeholder="E-mail" valor={email} onChange={(event) => pegarValorEmail(event)}/>
                    <Input icon="bi bi-person-lock" placeholder="Senha" valor={senha} onChange={(event) => pegarValorSenha(event)}/>
                    <Input icon="bi bi-person-lock" placeholder="Confirmação" valor={senha} onChange={(event) => pegarValorSenhaConfirmacao(event)}/>
                    <div className={styles.check_teacher}>
                        <input type="checkbox" checked={marcado} onChange={handleChange} />
                        <p>Deseja criar essa conta como professor ?</p>
                    </div>
                    <Button assunto="Criar" />
                </form>
            </div>
        </main>
    )
}

export default Register; 