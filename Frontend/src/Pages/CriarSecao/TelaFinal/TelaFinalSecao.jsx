import { useLocation,useNavigate } from "react-router-dom";
import styles from "./TelaFinal.module.css";
import Button from "../../../Components/Button/Button";

function TelaFinalSecao(){
    const location = useLocation(); 
    const navigate = useNavigate();
    const {titulo,resumo,quests} = location.state || {}


    return(
        <div className={styles.aviso}>
            <h2>{titulo}</h2>
            <p>{resumo}</p>
            <p>Quantidade de questões criadas:{quests.length}</p>

            <Button assunto="Voltar" click={()=>navigate("/home")} />
            
        </div>
    )
}

export default TelaFinalSecao;