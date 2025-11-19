import { useEffect,useState } from "react";

import { jwtDecode } from "jwt-decode";

import Header from "../../Components/Header/Header.jsx";

import styles from "./MeuPerfil.module.css";

import api from "../../services/api.js";

function MeuPerfil(){

    const [token] = useState(localStorage.getItem("token"));

    const decode = jwtDecode(token); 

    const id = decode.user_id;

    const [user, setUser] = useState({});

    const [posicao, setPosicao] = useState();

    useEffect(()=> {
    const pegarUsuario = async() => {
        const res = await api.get(`/users/${id}`);
        setUser({...res.data});
    }

    const pegarRanking = async() => {
        const res = await api.get(`/ranking/meuRanking/${id}`);
        setPosicao(res.data.object.minhaPosicao);
    }

    pegarUsuario();
    pegarRanking();
    },[id])
    return (
        <div className={styles.meu_perfil}>
            <Header></Header>
            <section>
                <div>
                    {user?(
                        <>
                            <div className={styles.header_perfil}>
                                <div className={styles.foto_perfil}>
                                    <i className="bi bi-person"></i>
                                </div>
                                <h2>{user.nickname}</h2>
                                <ul>
                                    <li><i className="bi bi-envelope"></i> <span className={styles.theme}>Email:</span> {user.email}</li>
                                    <li><i className="bi bi-bar-chart"></i> <span className={styles.theme}>Nível:</span> {user.nivel}</li>
                                    <li><i className="bi bi-flask-florence"></i> <span className={styles.theme}>XP:</span> {user.pontuacao}</li>
                                    <li><i className="bi bi-award"></i> <span className={styles.theme}>Posiçao:</span> {posicao}</li>
                                </ul>
                            </div>
                        </>
                    ):"Carregando..."}
                </div>
                <div className={styles.dicas}>
                    <div>
                        <h2>Nível</h2>
                        <p><span className={styles.theme}>Aumente seu nível</span> resolvendo questões. Dê preferência a questões criadas por professores com mais de 1000 XP.</p>
                    </div>

                    <div>
                        <h2>XP</h2>
                        <p><span className={styles.theme}>Aumente seu XP</span> resolvendo ou criando questões. Lembre-se: questões respondidas mais de uma vez concedem menos XP.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MeuPerfil;