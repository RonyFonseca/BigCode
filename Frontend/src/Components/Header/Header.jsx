import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import SubLogo from "../../assets/images/sub-logo.PNG";

import { useEffect,useState } from "react";

import { jwtDecode } from "jwt-decode";

function Header(){

    const [token] = useState(localStorage.getItem("token"))

    const [tipo,setTipo] = useState("")

    useEffect(()=>{
        const pegarUser = async() => {
            const decode = await jwtDecode(token); 

            setTipo(decode.tipo);
        }

        pegarUser();
    },[])

    return (
        <header>
            <Link to="/home" className={styles.logo_home_link}><i className="bi bi-house"></i></Link>
            <div>
                <ul>
                    {tipo=="ADM"?(<li><Link to="/criar/secao">Criar Questões</Link></li>):""}
                    <li><Link to="/meuperfil">Meu perfil</Link></li>
                    <li><Link to="/ranking">Ranking Global</Link></li>
                    <li><Link to="">Estudo</Link></li>
                </ul>
                <img src={SubLogo} />
            </div>
        </header>
    )
}

export default Header;