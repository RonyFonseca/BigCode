import styles from "./InputSecao.module.css";
function InputSecao(props){
    return(
        <div className={styles.input_container}>
            <input type="text" placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    )
}

export default InputSecao; 