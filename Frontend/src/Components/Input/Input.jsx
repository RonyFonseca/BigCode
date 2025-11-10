import styles from "./Input.module.css";

function Input(props){

    return (
       <div className={styles.input}>
        <div className={styles.icon}>
            <i className={props.icon}></i>
            <p>|</p>
        </div>
        <input type="text" placeholder={props.placeholder} valor={props.valor} onChange={(e) => props.onChange(e.target.value)}/>
       </div>
    )
}

export default Input;