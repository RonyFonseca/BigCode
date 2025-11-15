import styles from "./CardHome.module.css";

import { useNavigate } from "react-router-dom";

import Button from "../Button/Button.jsx";

function CardHome(props){

    const navigate = useNavigate(); 

    const comecarQuests = (e) => { 
        //Valido token para segurança; 
        //Guardar a informação da questao no localHost 
        navigate(`/quests/res/${e}`);
    }
    return(
        <div className={styles.card_container}>

            <div className={styles.card_header}>
                <h3>{props.titulo}</h3>
                <p>{props.subTitulo}</p>
            </div>

            <div className={styles.card_footer}>

                <div className={styles.card_informations}>
                    <h5>Informações adicionais.</h5>
                    <ul>
                        <li><i className="bi bi-exclamation-circle-fill"></i> Quantidade de Questões:{props.qntd_quest}</li>
                        <li><i className="bi bi-exclamation-circle-fill"></i> XP final:{props.xp_final}</li>
                    </ul>
                </div>

                <div className={styles.card_informations}>
                    <h5>Informações adicionais.</h5>
                    <ul>
                        <li><i className="bi bi-exclamation-circle-fill"></i> Professor: {props.professorNivel}</li>
                        <li><i className="bi bi-exclamation-circle-fill"></i> XP: {props.xp_prof}</li>
                    </ul>
                </div>

                <div className={styles.card_teacher}>
                    <h5><i className="bi bi-person"></i> Prof: {props.name_prof}</h5>
                    <Button assunto="Iniciar questão" click={() => comecarQuests(props.card_id)}/>
                </div>

            </div>

        </div>
    )
}

export default CardHome; 