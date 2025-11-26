import styles from "./SubEstudos.module.css";

import { Link } from "react-router-dom";

function Linear(){
    const codigo = `function print(arr) {
    for (let item of arr) {
        console.log(item);
    }
} `;

    const codigo2 = `function maxValue(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}`

    const codigo3 = ` function isEven(n) {
        return n % 2 === 0;
    }`
    return(
        <main>
            <section>
                <h1 className={styles.titulo}>O(n): Tempo Linear</h1>

                    <p>
                        <em>O(n)</em> é o tempo linear, que descreve um algoritmo cuja execução leva 
                um tempo proporcional ao tamanho da entrada (<em>n</em>). Isso significa que, 
                se o tamanho da entrada dobrar, o tempo de execução também dobrará. Um exemplo 
                prático é a busca linear, onde é preciso verificar cada um dos (<em>n</em>) itens 
                em uma lista para encontrar um item específico.
                    </p>
                </section>

                <section>
                    <h2>Exemplos de algoritmos com tempo linear</h2>

                    <ul>
                        <li>
                            <strong>Busca linear:</strong> Percorre uma lista ou array elemento por elemento até encontrar o item desejado. 
                            Na pior das hipóteses, precisa verificar todos os (<em>n</em>) elementos, resultando em tempo <em>O(n)</em>.
                        </li>
                        <li>
                            <strong>Counting Sort:</strong> Um algoritmo de ordenação que funciona para inteiros dentro de uma faixa limitada 
                            (<em>0</em> a <em>K</em>). A complexidade de tempo é <em>O(n+k)</em>, que se torna <em>O(n)</em> se (<em>K</em>) 
                            for proporcional a (<em>n</em>) ou limitado por uma constante.
                        </li>
                        <li>
                            <strong>Bucket Sort:</strong> Outro algoritmo de ordenação que, em média, tem tempo de execução linear. 
                            Ele divide os elementos em um número de "baldes" e depois os ordena.
                        </li>
                        <li>
                            <strong>Cálculo de Mínimo, Máximo ou Média:</strong> Encontrar o menor, maior ou a média de um conjunto de 
                            dados exige que cada elemento seja visitado pelo menos uma vez, caracterizando tempo linear.
                        </li>             
                    </ul>

                </section>

                <section>
                    <h2>Exemplo prático 1 — Percorrer lista</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                    {codigo}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>Cada elemento é processado uma única vez.</p>
                    </div>
                </section>

                <section>
                    <h2>Exemplo prático 2 — Encontrar o maior número</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                {codigo2}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>Precisa olhar todos os elementos para ter certeza do maior.</p>
                    </div>
                </section>

                <div className={styles.conteiner_botoes}>
                    <Link to="/log" className={styles.botao_voltar} type="button" >Voltar</Link>
                    <Link to="/loglinear" className={styles.botao_aprendizado} type="button" >Continuar aprendizado</Link>
                </div>
        </main>
    )
}

export default Linear; 