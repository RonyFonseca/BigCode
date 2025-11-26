import styles from "./SubEstudos.module.css";

import { Link } from "react-router-dom";

function Fatorial(){
    const codigo = `function permute(arr, start = 0) {
  if (start === arr.length) {
    console.log(arr);
    return;
  }

  for (let i = start; i < arr.length; i++) {
    [arr[start], arr[i]] = [arr[i], arr[start]];
    permute(arr, start + 1);
    [arr[start], arr[i]] = [arr[i], arr[start]];
  }
}                                                      
 `;

    return(
        <main>
            <section>
                <h1 className={styles.titulo}>O(n!): Tempo Fatorial</h1>

                    <p>
                A notação <em>O(n!)</em> descreve um algoritmo com complexidade de tempo fatorial. 
                Isso significa que, à medida que o tamanho da entrada (<em>n</em>) aumenta, o tempo de execução do algoritmo cresce proporcionalmente ao fatorial de <em>n</em>.
            </p>
                </section>

                <section>
                    <h2>Exemplos de algoritmos com complecidade Fatorial O(n!)</h2>

                    <ul>
                <li>
                    <strong>Problema do Caixeiro Viajante (força bruta):</strong> Nesse problema, o algoritmo tenta todas as ordens possíveis 
                    para visitar as cidades. Como as combinações crescem muito rápido, ele precisa testar todas as permutações, tornando o tempo <em>O(n!)</em>.
                </li>
                <li>
                    <strong>Geração de Permutações:</strong> Quando queremos listar todas as formas possíveis de organizar um conjunto de elementos, 
                    precisamos gerar todas as permutações. Como existem <em>n!</em> arranjos diferentes, o algoritmo naturalmente tem tempo <em>O(n!)</em>.
                </li>
                <li>
                    <strong>Problema das N-Rainhas (força bruta):</strong> Se tentamos colocar <em>n</em> rainhas em um tabuleiro testando todas as 
                    posições possíveis sem nenhuma estratégia de otimização, o número de combinações explode. Por isso, a solução por força 
                    bruta tem comportamento <em>O(n!)</em>.
                </li>          
            </ul>
                </section>

                <section>
                    <h2>Exemplo prático — Gerar todas as permutações</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                    {codigo}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p> O número total de permutações de n elementos é n!.</p>
                    </div>
                </section>

                <div className={styles.conteiner_botoes}>
                    <Link to="/exponencial" className={styles.botao_voltar} type="button" >Voltar</Link>
                    <Link to="/estudos" className={styles.botao_aprendizado} type="button" >Acabou</Link>
                </div>
        </main>
    )
}

export default Fatorial; 