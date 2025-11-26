import { useState, useEffect } from "react";

import api from "../../services/api.js";

import Header from "../../Components/Header/Header";

import styles from "./home.module.css";

import CardHome from "../../Components/CardHome/CardHome";

function Home(){

    const [quest, setQuests] = useState([]);
    const [questOriginal, setQuestOriginal] = useState([]); // Lista que nunca é alterada
    const [token] = useState(localStorage.getItem("token"));
    const [pesquisa, setPesquisa] = useState("");

    const pegarQuestoes = async () => {
        const res = await api.get("/pegarSecoes", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setQuests(res.data.object); 
        setQuestOriginal(res.data.object); // salva lista original
    }

    useEffect(() => {
        pegarQuestoes(); 
    }, []);

    const pesquisar = (e) => {
        const texto = e.target.value.toLowerCase();
        setPesquisa(texto);

        const questsFiltradas = questOriginal.filter(card =>
            card.titulo.toLowerCase().includes(texto) ||
            card.resumo.toLowerCase().includes(texto)
        );

        setQuests(questsFiltradas);
    }

    return(
        <div className={styles.container_home}>
            <div className={styles.sub_container_home}>
                <Header />

                <div className={styles.pesquisa}>
                    <div className={styles.pesquisa_input}>
                        <i className="bi bi-search"></i>
                        <input 
                            type="text" 
                            placeholder="Procure por questões" 
                            value={pesquisa} 
                            onChange={pesquisar}
                        />
                    </div>

                    <div className={styles.pesquisa_informacoes}>
                        <p>
                            Pesquise pelo nome ou pelo resumo e encontre as 
                            <span className={styles.theme}> melhores questões </span>
                            relacionadas ao seu interesse.
                        </p>
                    </div>
                </div>

                <main>
                    <section className={styles.cards_home}>
                        {quest.length > 0 ? (
                            <>
                                {quest.map((questao_dados, index) => (
                                    <CardHome 
                                        key={index}
                                        card_id={questao_dados.id}
                                        titulo={questao_dados.titulo}
                                        subTitulo={questao_dados.resumo}
                                        qntd_quest={questao_dados.questoesList.length}
                                        xp_final={questao_dados.questoesList.length * 20}
                                        professorNivel={questao_dados.dono.nivel}
                                        xp_prof={questao_dados.dono.pontuacao}
                                        name_prof={questao_dados.dono.nickname}
                                    />
                                ))}
                            </>
                        ) : (
                            "Não tem questões"
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Home;
