import styles from "./Button.module.css";

function Button(props){
    return (
        <div className={styles.butao}>
            <button onClick={() => props.click()}>{props.assunto}</button>
        </div>
    )
}
export default Button