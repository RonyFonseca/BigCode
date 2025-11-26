import styles from "./SubEstudos.module.css";

import { Link } from "react-router-dom";

function LogLinear(){
    const codigo = `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
} `;

    return(
        <main>
            <section>
                <h1 className={styles.titulo}>O(n log n): Tempo loglinear</h1>

                     <p>
                        <em>O(n log n)</em> significa que o tempo do algoritmo cresce um pouco mais rápido que o linear, mas ainda é bem eficiente. 
                        Ele aparece quando o algoritmo precisa percorrer os dados (<em>n</em>) e, ao mesmo tempo, fazer alguma operação que divide 
                        o problema pela metade várias vezes (<em>log n</em>). É por isso que ele é chamado de loglinear. <br/> <br/>

                        Esse tipo de complexidade é muito comum em algoritmos de ordenação mais rápidos, como Merge Sort e Quick Sort, que combinam 
                        essas duas ideias: trabalham em todos os elementos, mas dividem o problema em partes menores durante o processo.
                    </p>
                </section>

                <section>
                    <h2>Exemplos de algoritmos com complecidade O(n log n) </h2>

                    <ul>
                        <li>
                            <strong>Merge Sort:</strong> O Merge Sort divide a lista em partes pequenas, ordena cada parte e depois junta 
                            tudo de forma organizada. Ele usa a ideia de “dividir para conquistar”.
                        </li>
                        <li>
                            <strong>Heap Sort:</strong> O Heap Sort usa uma estrutura chamada <em>heap</em> para reorganizar os elementos 
                            de forma eficiente, mantendo sempre o maior ou menor no topo. Isso garante um desempenho <em>O(n log n)</em>.
                        </li>
                        <li>
                            <strong>Ordenação com Árvores Binárias:</strong> Quando usamos árvores de busca balanceadas para ordenar, 
                            cada inserção e busca leva <em>O(log n)</em>, então organizar todos os elementos acaba dando <em>O(n log n)</em>.
                        </li>
                        <li>
                            <strong>QuickSort:</strong> O QuickSort separa os elementos em partes menores e ordena cada uma. Na média, 
                            ele é bem rápido <em>O(n log n)</em>, mas em casos ruins pode chegar a <em>O(n²)</em>.
                        </li>
                        <li>
                            <strong>Problemas Divididos em Subproblemas</strong> Algoritmos que quebram um problema grande em pedaços menores, 
                            resolvem cada um e depois juntam os resultados costumam ter <em>O(n log n)</em>. Um exemplo é encontrar dois pontos 
                            mais próximos em um conjunto.
                        </li>
                        
                    </ul>

                </section>

                <section>
                    <h2>Exemplo prático 1 — Merge Sort</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                    {codigo}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        O <em>log n</em> vem das divisões da lista ao meio. <br/>
                    O <em>n</em> vem da fusão (merge) de cada divisão.
                    </div>
                </section>

                <div className={styles.conteiner_botoes}>
                    <Link to="/linear" className={styles.botao_voltar} type="button" >Voltar</Link>
                    <Link to="/quadratico" className={styles.botao_aprendizado} type="button" >Continuar aprendizado</Link>
                </div>
        </main>
    )
}

export default LogLinear; 