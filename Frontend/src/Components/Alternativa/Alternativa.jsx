import styles from "./Alternativa.module.css";

function Alternativa (props){
    return (
        <div className={styles.alternativa}>
            {props.alternativaCorreta?(
                <div className={props.selecionada? styles.selecionada:styles.alternativa_button}>
                    <button type="button" className={props.selecionada? styles.selecionada:styles.alternativa_button} onClick={props.selecionarCorreta}>{props.letra} - {props.value}</button>
                </div>
            ):(
                <div>
                    <p>{props.letra} - {props.value}</p>
                    <button type="button" onClick={props.apagarAlternativa}>x</button>
                </div>
            )}
        </div>
    )
}

export default Alternativa; 