import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";

import styles from "./Auth.module.css";

import usuarioLogando from "../../assets/images/auth/usuario_logando.svg";
import logo from "../../assets/images/logo.PNG";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import { useAuth } from "../../context/AuthContext.jsx";

import { useLocation,useNavigate } from "react-router-dom";


import api from "../../services/api.js";

function EmailValidate(){

        const {login} = useAuth();

        const location = useLocation();
        const navigate = useNavigate();

        const {nome,email,senha,marcado} = location.state;
        
        const [tipo, setTipo] = useState("");

        const [codigo, setCodigo] = useState("");
        //const [senha, setSenha] = useState("");

        useEffect(() => {
            if(marcado){
                setTipo("ADM");
            }else {
                setTipo("ALUNO");
            }
        },[])

        const pegarValorEmail = (event) => {
            if(event.trim() ==  ""){
                console.log("O Codigo ta vazio !")
            }
            setCodigo(event);
        }

        const enviarDados = async(e) => {
            e.preventDefault();
            const res = await api.post("/users/confirm/create",{
                nickname:nome,
                email:email,
                senha:senha,
                codigo:codigo,
                tipo
            })

            if(res.status==200){
                if(res.data.object){
                    const ok = await login(email,senha);
                    navigate("/home");
                }
            }
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
                        <Input icon="bi bi-envelope" placeholder="Codigo" valor={email} onChange={(event) => pegarValorEmail(event)}/>
                        <Button assunto="Validar" />
                    </form>
                </div>
            </main>
        )
}

export default EmailValidate;