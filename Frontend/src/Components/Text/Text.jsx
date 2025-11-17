import styles from "./Text.module.css";

function Text(props){
    return (
        <textarea placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} value={props.value}>{props.value}</textarea>
    )
}

export default Text;