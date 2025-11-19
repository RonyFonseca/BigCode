import styles from "./Input.module.css";

import { useState } from "react";

function Input(props){

    const [input, setInput] = useState("");
    const [contemAssunto, setContemAssunto] = useState(false);

    const pegarValorInput = (valor)=> {
        if(!(input.trim()=="")){
            if(input.length >= 20){
                setContemAssunto(true);
            }
        }
        setInput(valor);
        return valor; 
    } 

    const ativarIcons = () =>{
        if(!(input.trim()=="")){
            if(input.length >= 20){
                setContemAssunto(true);
            } else {
                setContemAssunto(false);
            }
        }else {
            setContemAssunto(false);
        }
    }

    return (
       <div className={styles.input}>
        {contemAssunto?"":(
            <div className={styles.icon}>
                <i className={props.icon}></i>
                <p>|</p>
            </div>
        )}
        <input type="text" placeholder={props.placeholder} valor={props.valor} onChange={(e) => props.onChange(pegarValorInput(e.target.value))} onFocus={() => ativarIcons()} onBlur={() => ativarIcons()}/>
       </div>
    )
}

export default Input;