import LoadingImg from "../../assets/images/ripples.svg";
import styles from "./Loading.module.css";

function Loading(){
    return (
        <div className={styles.loading_container}>
            <img src={LoadingImg} className={styles.loading} />
            <h4>Cadastrando...</h4>
        </div>
    )
}

export default Loading;