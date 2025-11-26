import styles from "./Estudos.module.css";

import Header from "../../Components/Header/Header.jsx";

import { Link } from "react-router-dom";

function Estudos(){
    return(
        <div className={styles.body}>
            <Header />
            <main className={styles.main}>
                <div>
                    <h1 className={styles.titulo}>Notações de complexidade de algoritmos</h1>
                </div>

                <div className={styles.cards}>
                    <div className={styles.card_item}>
                        <Link className={styles.pagina} to="/constantes">
                            <h2 className={styles.titulo_card}>Constante: O(1)</h2>
                        </Link>
                    </div>

                    <div className={styles.card_item}> 
                        <Link className={styles.pagina} to="/log">
                            <h2 className={styles.titulo_card}>Logarítmico: O(log n)</h2>
                        </Link>
                    </div>

                    <div className={styles.card_item}> 
                        <Link className={styles.pagina} to="/linear">
                            <h2 className={styles.titulo_card}>Linear: O(n)</h2>
                        </Link>
                    </div>

                    <div className={styles.card_item}> 
                        <Link className={styles.pagina} to="/loglinear">
                            <h2 className={styles.titulo_card}>Linear Logarítmico: O(n log n)</h2>
                        </Link>
                    </div>

                    <div className={styles.card_item}>
                        <Link className={styles.pagina} to="/quadratico">
                            <h2 className={styles.titulo_card}>Quadrático: O(n²)</h2>
                        </Link>
                    </div>

                    <div className={styles.card_item}> 
                        <Link className={styles.pagina} to="/exponencial">
                            <h2 className={styles.titulo_card}>Exponencial: O(2ⁿ)</h2>
                        </Link>
                    </div>

                    <div className={styles.card_item}>
                        <Link className={styles.pagina} to="/fatorial">
                            <h2 className={styles.titulo_card}>Fatorial: O(n!)</h2>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Estudos; 