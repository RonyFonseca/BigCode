import styles from "./CriarQuestao.module.css"; 

import Text from "../../Components/Text/Text.jsx"; 

function CriarQuestao(){
    return (
        <div className={styles.criar_questao}>
            <form action="">
                <Text />

                <div className={styles.alternativas_container}>

                </div>
                <div className={styles.adicionar_alternativas}>
                    <input type="text" placeholder="Digite alternativa"/>
                    <button>Adicionar</button>
                </div>
            </form>
        </div>
    )
}

export default CriarQuestao;