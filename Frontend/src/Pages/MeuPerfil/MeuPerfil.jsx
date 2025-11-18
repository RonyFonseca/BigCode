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

    useEffect(()=> {
    const pegarUsuario = async() => {
        const res = await api.get(`/users/${id}`);
        setUser({...res.data});
    }

    pegarUsuario();
    },[id])
    return (
        <div>
            <Header></Header>
            <section>
                <div className={styles.foto_perfil}>
                    
                </div>
                <div>
                    {user?(
                        <>
                            <h2>{user.nickname}</h2>
                            <ul>
                                <li>Email: {user.email}</li>
                                <li>Nível: {user.nivel}</li>
                                <li>XP: {user.pontuacao}</li>
                            </ul>
                        </>
                    ):"Carregando..."}
                </div>
            </section>
        </div>
    )
}

export default MeuPerfil;