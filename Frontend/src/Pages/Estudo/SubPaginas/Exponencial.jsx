import styles from "./SubEstudos.module.css";

import { Link } from "react-router-dom";

function Exponencial(){
    const codigo = `function fib(n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}  `;

const codigo2 = `função gerarSubconjuntos(lista):
    se lista vazia:
        retornar subconjuntos possíveis anteriores
    ...    `


    return(
        <main>
            <section>
                <h1 className={styles.titulo}>O(2ⁿ): Tempo Exponencial</h1>

                    <p>
                <em>O(2ⁿ)</em> é a notação para complexidade exponencial, onde o tempo de execução de um algoritmo cresce exponencialmente 
                com o tamanho da entrada (<em>n</em>). Isso significa que um pequeno aumento em (<em>n</em>) pode dobrar o tempo de execução 
                do algoritmo, tornando-o impraticável para grandes valores de entrada. Exemplos incluem algoritmos de força bruta que testam 
                todas as combinações possíveis para encontrar uma senha ou a implementação recursiva da sequência de Fibonacci.
            </p>
                </section>

                <section>
                    <h2>Exemplos de algoritmos com complecidade Exponencial O(2ⁿ)</h2>

                    <ul>
                <li>
                    <strong>Problema do Caixeiro Viajante (em sua forma mais simples):</strong> Encontrar o caminho mais curto 
                    que visita todas as cidades exatamente uma vez (embora existam algoritmos mais eficientes para versões aproximadas).
                </li>
                <li>
                    <strong>Sequência de Fibonacci (recursiva ingênua):</strong> O algoritmo recursivo simples para calcular 
                    o <em>n</em>-ésimo número de Fibonacci calcula os mesmos valores várias vezes, resultando em uma complexidade exponencial.
                </li>
                <li>
                    <strong>Força bruta:</strong> Tentar adivinhar uma senha testando todas as combinações possíveis. Para uma senha de <em>n</em> caracteres, 
                    o número de tentativas pode ser <em>2ⁿ</em> (se forem apenas 0s e 1s) ou outra base exponencial.
                </li>          
            </ul>

                </section>

                <section>
                    <h2>Exemplo prático 1 — Fibonacci sem memoização</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                    {codigo}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>A cada chamada, 2 novas chamadas são criadas → árvore de recursão.</p>
                    </div>
                </section>

                <section>
                    <h2>Exemplo prático 2 — Subconjuntos possíveis</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                    {codigo2}
                            </code></pre>
                        </div>
                    <figcaption>Pseudocódigo</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>Sempre resulta em 2ⁿ subconjuntos possíveis.</p>
                    </div>
                </section>

                <div className={styles.conteiner_botoes}>
                    <Link to="/quadratico" className={styles.botao_voltar} type="button" >Voltar</Link>
                    <Link to="/fatorial" className={styles.botao_aprendizado} type="button" >Continuar aprendizado</Link>
                </div>
        </main>
    )
}

export default Exponencial; 