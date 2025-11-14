import styles from "./CardQuest.module.css"; 

import { useState } from "react";

function CardQuest(props){
    const alfa = ["A","B","C","D","E"]

    const [respondido, setRespondido] = useState(false); 

    const [alterCerta, setAlterCerta] = useState(0);

    const [acertou, setAcertou] = useState(false)

    const responderQuest = (idAlternativa,dados) => {
        const alternativas = props.alternativas; 
        setRespondido(true);

        if(props.alternativaCorreta===dados){
            setAlterCerta(idAlternativa);
            setAcertou(true);
            props.acertou();
        }
    }

    return(
            <div className={styles.card_container_nao_respondido}>

                <div className={styles.card_header}>
                    <p className={respondido?
                        acertou?styles.enunciado_respondido:styles.enunciado_nao_respondido: ""}>{(props.numQuest+1)} - {props.enunciado}</p>
                </div>

                <div className={styles.card_footer}>
                    <ul className={styles.card_quest_alternativas}>
                        {props.alternativas.map((dados, index) => (<li key={index} className={styles.card_quest_alternativa} onClick={() => responderQuest(index,dados)}><button className={respondido? acertou&&index==alterCerta?styles.acertou:styles.errou:styles.card_quest_alternativas_buttons}>{alfa[index]}</button>{dados}</li>))}
                    </ul>
                </div>
        </div>
    )
}

export default CardQuest;