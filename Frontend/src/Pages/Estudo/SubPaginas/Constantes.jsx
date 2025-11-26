import styles from "./SubEstudos.module.css";

import { Link } from "react-router-dom";

function Constantes(){
    const codigo = `// Retorna o primeiro elemento do array
function pegarPrimeiro(array) {
    return array[0];
}`;

    const codigo2 = ` function adicionar(arr, value) {
        arr.push(value); // operação de custo constante
    }`

    const codigo3 = ` function isEven(n) {
        return n % 2 === 0;
    }`
    return(
        <main>
            <section>
                <h1 className={styles.titulo}>O(1): Tempo Constante</h1>

                    <p>
                        O tempo de execução de um algoritmo não depende do tamanho da entrada. 
                        Sempre faz a mesma quantidade de trabalho. 
                        Isso porque o algoritmo realiza um número fixo de operações básicas, como acessar 
                        um elemento em um array ou buscar o primeiro item de uma lista, com a execução levando 
                        o mesmo tempo para qualquer tamanho de dados. 
                    </p>
                </section>

                <section>
                    <h2>Exemplos de algoritmos com tempo constante</h2>

                    <ul>
                        <li>Acessar um elemento específico em um array (por exemplo, o terceiro elemento).</li>
                        <li>Obter o comprimento de uma lista que já armazena essa informação internamente.</li>
                        <li>Calcular a distância entre dois pontos, que envolve um número fixo de operações matemáticas.</li>
                    </ul>

                </section>

                <section>
                    <h2>Exemplo prático 1 — Acessar índice</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                    {codigo}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>A operação acessa diretamente uma posição fixa da memória.
                        Independe do tamanho da lista — sempre 1 passo.</p>
                    </div>
                </section>

                <section>
                    <h2>Exemplo prático 2 — Inserir no final com push()</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                {codigo2}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>O push adiciona no final sem percorrer a lista inteira.
                        Operação fixa → constante.</p>
                    </div>
                </section>

                <section> 
                    <h2>Exemplo prático 3 — Verificar se número é par</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                {codigo3}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>Apenas um cálculo simples → sempre 1 operação.</p>
                    </div>
                </section>

                <div className={styles.conteiner_botoes}>
                    <Link to="/estudos" className={styles.botao_voltar} type="button" >Voltar</Link>
                    <Link to="/log" className={styles.botao_aprendizado} type="button" >Continuar aprendizado</Link>
                </div>
        </main>
    )
}

export default Constantes; 