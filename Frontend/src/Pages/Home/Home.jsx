import { useState,useEffect } from "react";


import Header from "../../Components/Header/Header";

import styles from "./home.module.css";

import CardHome from "../../Components/CardHome/CardHome";

function Home(){

    const [quest, setQuests] = useState([])

    const pegarQuestoes = () => {

        const questoes = [{
            "id": 1,
            "titulo": "bigO",
            "resumo": "Questõe sobre complexidade bigO",
            "questoesList": [
                {
                    "id": 1,
                    "enunciado": "O que é Ranma ?",
                    "alternativaCorreta": "É tipo de viado",
                    "dono": {
                        "nickname": "Rony",
                        "nivel": "UPE"
                    }
                },
                {
                    "id": 2,
                    "enunciado": "Teste1",
                    "alternativaCorreta": "Letra A",
                    "dono": {
                        "nickname": "Rony",
                        "nivel": "UPE"
                    }
                },
                {
                    "id": 6,
                    "enunciado": "Teste3",
                    "alternativaCorreta": "Letra A",
                    "dono": {
                        "nickname": "Rony",
                        "nivel": "UPE"
                    }
                }
            ],
            "dono": {
                "nickname": "Rony",
                "nivel": "UPE",
                "pontuacao": "100"
            }
        }, {
            "id": 2,
            "titulo": "Arrays",
            "resumo": "Questõe sobre arrays e suas aplicações",
            "questoesList": [
                {
                    "id": 3,
                    "enunciado": "O que é a vida ?",
                    "alternativaCorreta": "É tipo de viado",
                    "dono": {
                        "nickname": "Rony",
                        "nivel": "UPE"
                    }
                },
                {
                    "id": 4,
                    "enunciado": "Teste2",
                    "alternativaCorreta": "Letra A",
                    "dono": {
                        "nickname": "Rony",
                        "nivel": "UPE"
                    }
                }
            ],
            "dono": {
                "nickname": "Rubens",
                "nivel": "Iniciante",
                "pontuacao": "50"
            }
        }]

        setQuests(questoes)
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
                        
                                titulo={questao_dados.titulo} 
                                subTitulo={questao_dados.resumo} 

                                qntd_quest={questao_dados.questoesList.length}
                                xp_final="20"

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