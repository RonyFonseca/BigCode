import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";

import api from "../../services/api.js";

import Button from "../../Components/Button/Button";

import styles from "./home.module.css";

import { useNavigate } from "react-router-dom";

function FinalizarQuests(){

    const navigate = useNavigate();

    const location = useLocation(); 
    const {certas, porcentagem} = location.state || {};
    
    return(
        <div className={styles.container_home}>
            <div className={styles.sub_container_home}>
                <Header />
                <main className={styles.finalizado}>
                    <div className={styles.header_analise}>
                        <h1>Seção concluida</h1>
                        <p>Fique a vontade para refazer quantas vezes quiser essa seção.</p>
                    </div>
                    <section className={styles.analise}>
                        <div>
                            <h3>Análise</h3>
                            <p>Olhe seus resultados e em caso de insatisfação, estude mais um pouco.</p>
                            <ul>
                                <li>Acertos: {certas}</li>
                                <li>Porcentagem de acertos: {porcentagem}%</li>
                                <li>XP ganho: {certas*20}</li>
                            </ul>
                        </div>
                    </section>
                    <Button assunto="Voltar" click={() => navigate("/home")} />
                </main>
            </div>
        </div>
    )
}

export default FinalizarQuests;