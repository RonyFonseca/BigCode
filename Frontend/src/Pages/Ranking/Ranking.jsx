import Header from "../../Components/Header/Header.jsx";

import { useEffect,useState } from "react";

import api from "../../services/api.js";

import styles from "./Ranking.module.css";

function Ranking(){

    const [token] = useState(localStorage.getItem("token"))

    const [users, setUsers] = useState([]);

    const [top, setTop] = useState({});

    useEffect(()=>{
        const pegarRank = async() => {
            const res = await api.get("/ranking",{headers:{Authorization: `Bearer ${token}`}});
            setTop({...res.data.object[0]})
            setUsers([...res.data.object])
        }

        pegarRank();
    },[])


    return(
        <div>
            <Header />
            <div className={styles.ranking_container}>
                <div className={styles.informacoes}>
                    <h1>Ranking Global</h1>
                    <p><span className={styles.theme}>Desafie-se!</span> Dispute com usuários de todo o mundo e suba no placar acumulando Pontos de Experiência (XP), se torne um do ranking dos 5 melhores.</p>
                </div>
                <section className={styles.ranking}>
                    {users.map((e, index)=> (
                        <div className={styles.topFrag} key={index}>
                            {index==0?(<h1 className={styles.top1}><i className="bi bi-award-fill"></i></h1>):""}
                            {index==1?(<h1 className={styles.top2}><i className="bi bi-award-fill"></i></h1>):""}
                            {index==2?(<h1 className={styles.top3}><i className="bi bi-award-fill"></i></h1>):""}
                            <h3>{e.nickname}</h3>
                            <p>{e.pontuacao}</p>
                        </div>
                    ))}
                </section>
                <div className={styles.melhor_usuario}>
                    {top?(<></>):"Sem o top frag"}
                    <div>
                        <h1 className={styles.top1}><i className="bi bi-award-fill"></i></h1>
                        <h2>Nome:{top.nickname}</h2>
                    </div>
                    <h3>XP total: {top.pontuacao}</h3>
                    <p>O <span className={styles.theme}>Solucionador da Vez!</span> Este usuário está dominando a resolução de problemas. Seu desafio é alcançá-lo.</p>
                </div>
            </div>
        </div>
    )
}

export default Ranking; 