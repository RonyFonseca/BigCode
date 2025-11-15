import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../Components/Button/Button.jsx";

import Header from "../../Components/Header/Header";

import CardQuest from "../../Components/CardHome/CardQuests/CardQuest";

import styles from "./home.module.css"
import api from "../../services/api.js";

function SecaoQuests(){

    const {id} = useParams(); //id da secao
    const [token] = useState(localStorage.getItem("token"));
    const [quest, setQuests] = useState([]);
    const [porcentagem, setPorcentagem] = useState(0);
    const [questCertas, setQuestCertas] = useState(0);

    const navigate = useNavigate();

    const pegarQuestoes = async() => {

        const res = await api.get(`/pegarQuestoes/secao/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res);
        //requisição de pegar todas as questões
    setQuests(res.data.object);
    }

    useEffect(() => {
        pegarQuestoes(); 
    },[])

    const finalizar = () => {
        setPorcentagem((questCertas/quest.length)*100);
        navigate("/finalizado",{state:{certas:questCertas, porcentagem:(questCertas/quest.length)*100}})
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