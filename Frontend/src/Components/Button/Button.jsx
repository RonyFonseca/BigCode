import styles from "./Button.module.css";

function Button(props){
    return (
        <div className={styles.butao}>
            <button>{props.assunto}</button>
        </div>
    )
}
export default Button