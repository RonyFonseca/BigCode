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
                    {tipo=="ADM"?(<li><i className="bi bi-box-seam-fill"></i> <Link to="/criar/secao">Criar Questões</Link></li>):""}
                    <li><i className="bi bi-person-bounding-box"></i> <Link to="/meuperfil">Meu perfil</Link></li>
                    <li><i className="bi bi-clipboard-data-fill"></i> <Link to="/ranking">Ranking Global</Link></li>
                    <li><i className="bi bi-book-fill"></i> <Link to="">Estudo</Link></li>
                </ul>
            </div>
            <Link to="/logout">
                <img src={SubLogo} className={styles.sub_logo} />
            </Link>
        </header>
    )
}

export default Header;