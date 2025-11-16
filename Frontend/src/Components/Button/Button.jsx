import styles from "./Button.module.css";

function Button(props){
    return (
        <div className={styles.butao}>
            {props.click?(
                <button onClick={() => props.click()}>{props.assunto}</button>
            ):(
                <button>{props.assunto}</button>
            )}
            
        </div>
    )
}
export default Button