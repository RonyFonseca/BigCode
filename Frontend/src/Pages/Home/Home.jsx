import { useState,useEffect } from "react";

import api from "../../services/api.js";

import Header from "../../Components/Header/Header";

import styles from "./home.module.css";

import CardHome from "../../Components/CardHome/CardHome";

function Home(){

    const [quest, setQuests] = useState([])
    const [token] = useState(localStorage.getItem("token"));

    const pegarQuestoes = async () => {
        const res = await api.get("/pegarSecoes",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });


        setQuests(res.data.object)
    }

    useState(() => {
        pegarQuestoes(); 
    },[])

    return(
        <div className={styles.container_home}>
            <div className={styles.sub_container_home}>
                <Header />
                <main>
                    <div>
                        informações gerais.
                    </div>
                    <section className={styles.cards_home}>
                        {quest.map((questao_dados) =>(
                            <CardHome key={questao_dados.id}

                                card_id={questao_dados.id}    

                                titulo={questao_dados.titulo} 
                                subTitulo={questao_dados.resumo} 

                                qntd_quest={questao_dados.questoesList.length}
                                xp_final={questao_dados.questoesList.length*10}

                                professorNivel={questao_dados.dono.nivel}
                                xp_prof={questao_dados.dono.pontuacao}
                                name_prof={questao_dados.dono.nickname}
                            />
                        ))}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Home;