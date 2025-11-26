import styles from "./SubEstudos.module.css";

import { Link } from "react-router-dom";

function Quadratico(){
    const codigo = `function compareAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
} `;

    const codigo2 = `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
} `

    return(
        <main>
            <section>
                <h1 className={styles.titulo}>O(n²): Tempo Quadrático</h1>

                    <p>
                <em>O(n²)</em> é a notação de tempo quadrático, o que significa que o tempo de execução de um algoritmo aumenta proporcionalmente 
                ao quadrado do tamanho da entrada (<em>n</em>). Isso geralmente ocorre em algoritmos com loops aninhados, onde cada elemento 
                da entrada é comparado com todos os outros elementos.
            </p>
                </section>

                <section>
                    <h2>Exemplos de algoritmos com tempo quadrático</h2>

                    <ul>
                <li>Algoritmos de Ordenação Simples:
                    <ul>
                        <li>
                            <strong>Bubble Sort:</strong> Compara pares de elementos adjacentes e os troca se estiverem na ordem errada, 
                            repetindo o processo até a lista estar ordenada.
                            </li>
                        <li>
                            <strong>Selection Sort:</strong> Divide a lista em duas partes: uma ordenada e outra não ordenada. Em cada iteração, 
                            encontra o menor elemento na parte não ordenada e o move para o final da parte ordenada.
                        </li>
                        <li>
                            <strong>Insertion Sort:</strong> Constrói a lista final um item de cada vez, inserindo cada elemento na 
                            posição correta dentro da parte já ordenada da lista. 
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>Algoritmos de Busca:
                    <ul>
                        <li>
                            Uma busca por força bruta em uma matriz bidimensional para encontrar um par de valores específicos.
                            </li>
                        <li>
                            Um algoritmo que verifica se existem valores duplicados em um array. 
                        </li>
                    </ul>
                </li>
            </ul>

                </section>

                <section>
                    <h2>Exemplo prático 1 — Comparar cada par</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                    {codigo}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>Para cada elemento i, percorremos todos os <em>j → n * n</em>.</p>
                    </div>
                </section>

                <section>
                    <h2>Exemplo prático 2 — Bubble Sort</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                {codigo2}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>Dois loops completos → quadrático.</p>
                    </div>
                </section>

                <div className={styles.conteiner_botoes}>
                    <Link to="/loglinear" className={styles.botao_voltar} type="button" >Voltar</Link>
                    <Link to="/exponencial" className={styles.botao_aprendizado} type="button" >Continuar aprendizado</Link>
                </div>
        </main>
    )
}

export default Quadratico; 