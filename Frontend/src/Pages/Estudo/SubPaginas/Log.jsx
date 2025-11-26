import styles from "./SubEstudos.module.css";

import { Link } from "react-router-dom";

function Log(){
    const codigo = `function binarySearch(arr, target) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}`;

    const codigo2 = `function divideByTwo(n) {
    let count = 0;
    while (n > 1) {
        n = Math.floor(n / 2);
            count++;
        }
        return count;
}`

    const codigo3 = ` function isEven(n) {
        return n % 2 === 0;
    }`
    return(
        <main>
            <section>
                <h1 className={styles.titulo}>O(log n): Tempo Logarítmico</h1>

                    <p>
                        <em>O(log n)</em> é o tempo logarítmico, que descreve a eficiência de um algoritmo cuja execução aumenta de 
                forma muito lenta conforme o tamanho da entrada (<em>n</em>) cresce. Isso acontece quando o algoritmo, a 
                cada iteração, divide o problema em partes muito menores, como na busca binária, onde a lista é repetidamente 
                dividida ao meio. Por isso, um aumento no tamanho da entrada não resulta em um aumento proporcional no tempo 
                de execução; dobrar a entrada pode adicionar apenas uma pequena quantidade de tempo.
                    </p>
                </section>

                <section>
                    <h2>Exemplos de algoritmos com tempo logarítmico</h2>

                    <ul>
                        <li><strong>Busca binária:</strong> Encontra um elemento em uma lista ordenada dividindo-a ao meio a cada passo.</li>
                        <li>
                            <strong>Algoritmos de divisão e conquista:</strong> Quebram um problema em partes menores, resolvem cada parte e 
                            depois juntam tudo. Como o problema é repetidamente reduzido pela metade, essa etapa tem comportamento logarítmico.
                        </li>
                        <li>
                            <strong>Exponenciação Binária:</strong> Calcula potências reduzindo o expoente pela metade a cada operação, 
                            em vez de multiplicar várias vezes. Isso diminui muito o número de passos e torna o cálculo muito eficiente.
                        </li>
                        <li>
                            <strong>Algoritmo de Euclides (MDC):</strong> Encontra o MDC repetindo divisões e substituindo o número maior pelo resto.
                                Cada passo reduz bastante o valor analisado, fazendo o algoritmo avançar de forma logarítmica e rápida.
                        </li>
                    </ul>

                </section>

                <section>
                    <h2>Exemplo prático 1 — Busca binária</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                    {codigo}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>A cada passo, reduzimos o espaço de busca pela metade.</p>
                    </div>
                </section>

                <section>
                    <h2>Exemplo prático 2 — Dividir número repetidamente</h2>
                    <figure>
                        <div className={styles.codigo}>
                            <pre><code>
                                {codigo2}
                            </code></pre>
                        </div>
                    <figcaption>Linguagem JavaScript</figcaption>
                    </figure>

                    <div className={styles.explicacao}>
                        <p>A entrada <em>n</em> diminui pela metade cada vez..</p>
                    </div>
                </section>

                <div className={styles.conteiner_botoes}>
                    <Link to="/constantes" className={styles.botao_voltar} type="button" >Voltar</Link>
                    <Link to="/linear" className={styles.botao_aprendizado} type="button" >Continuar aprendizado</Link>
                </div>
        </main>
    )
}

export default Log; 