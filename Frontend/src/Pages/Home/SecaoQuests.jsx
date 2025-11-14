import { useEffect, useState } from "react";

import Button from "../../Components/Button/Button.jsx";

import Header from "../../Components/Header/Header";

import CardQuest from "../../Components/CardHome/CardQuests/CardQuest";

import styles from "./home.module.css"

function SecaoQuests(){

    const [quest, setQuests] = useState([]);
    const [questCertas, setQuestCertas] = useState(0);

    const pegarQuestoes = () => {
        //requisição de pegar todas as questões
        const questoes = [
        {
            "id": 1,
            "enunciado": "Teste1",
            "alternativas": [
                "Letra A",
                "Letra B",
                "Letra C"
            ],
            "alternativaCorreta": "Letra A",
            "dono": {
                "nickname": "Rony",
                "nivel": "UPE"
            }
        },
        {
            "id": 2,
            "enunciado": "Teste2",
            "alternativas": [
                "Letra n",
                "Letra m",
                "Letra ç"
            ],
            "alternativaCorreta": "Letra ç",
            "dono": {
                "nickname": "Rony",
                "nivel": "UPE"
            }
        }
    ]
    setQuests(questoes);

    }

    useEffect(() => {
        pegarQuestoes(); 
    },[])

    const finalizar = () => {
        console.log("Questões corretas: "+questCertas);
    }
    

    return(
        <div className={styles.container_home}>
            <div className={styles.sub_container_home}>
                <Header />
                <div className={styles.informations_quests}>
                    <h1>BigO</h1>
                    <p>Questões sobre notação bigO, foco em constantes e logaritmicas.</p>
                </div>
                <section className={styles.cards_quests}>
                    {quest.map((e, index) => (
                        <CardQuest key={index} id_quest = {e.id} numQuest={index} enunciado={e.enunciado} alternativas={e.alternativas} alternativaCorreta={e.alternativaCorreta} acertou={() => setQuestCertas(questCertas+1)}/>
                    ))}
                    <Button assunto="Finalizar" click={()=>finalizar()}/>
                </section>
            </div>
        </div>
    )
}

export default SecaoQuests; 