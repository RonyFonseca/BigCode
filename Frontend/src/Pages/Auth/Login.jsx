import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";

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
        <main>
            <div>
                
            </div>
            <div>
                <h1>Logo</h1>
                <div>
                    <p>Bem vindo!</p>
                    <p>faça login e aproveite a plataforma</p>
                </div>
                <div>
                    <form action="" onSubmit={(e) => enviarDados(e)}>
                        <Input icon="bi bi-person" placeholder="teste" valor={email} onChange={(event) => pegarValorEmail(event)}/>
                        <Input icon="bi bi-person" placeholder="teste" valor={senha} onChange={(event) => pegarValorSenha(event)}/>
                        <Button assunto="Acessar" />
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login; 