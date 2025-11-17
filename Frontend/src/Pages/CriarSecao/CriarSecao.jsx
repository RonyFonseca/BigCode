import styles from "./CriarSecao.module.css";

import InputSecao from "../../Components/Input/InputSecao/InputSecao.jsx";

import Text from "../../Components/Text/Text.jsx"

import Button from "../../Components/Button/Button.jsx"

import Header from "../../Components/Header/Header.jsx";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function CriarSecao(){

    const navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");

    const onchangeInput = (e) => {
        setTitulo(e);
    }

    const onchangeText = (e) => {
        setResumo(e); 
    }

    const criarSecao = (e) => {
        e.preventDefault();
        navigate("/criar/quests", {state:{titulo:titulo, resumo:resumo}});
    }

    return (
        <div>
            <Header />
            <div className={styles.criar_secao}>
                <div className={styles.header_criar_secao}>
                    <h2>Criação da seção</h2>
                    <p>Crie uma seção e adicione quantas questões quiser.</p>
                </div>
                <form className={styles.form_criar_secao} onSubmit={(e) => criarSecao(e)}>
                    <InputSecao placeholder="Digite um titulo para a seção" onChange={(e) => onchangeInput(e)} />
                    <Text placeholder="Digite um pouco sobre a seção." onChange={(e) => onchangeText(e)}/>
                    <p className={styles.criar_secao_informacoes_adicionais}>Todo conteúdo publicado é de responsabilidade exclusiva do autor. A plataforma só aceita materiais relacionados ao ensino; conteúdos fora desse propósito serão recusados.</p>
                    <Button assunto="Criar"/>
                </form>
            </div>
        </div>
    )
}

export default CriarSecao;