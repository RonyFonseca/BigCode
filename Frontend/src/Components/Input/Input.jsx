import "./Input.css";

function Input(props){

    return (
       <div>
        <i className={props.icon}></i>
        <input type="text" placeholder={props.placeholder} valor={props.valor} onChange={(e) => props.onChange(e.target.value)}/>
       </div>
    )
}

export default Input;