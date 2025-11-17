import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import SubLogo from "../../assets/images/sub-logo.PNG";

function Header(){
    return (
        <header>
            <i className="bi bi-house"></i>
            <div>
                <ul>
                    <li><Link to="/criar/secao">Criar Questões</Link></li>
                    <li><Link>Meu perfil</Link></li>
                    <li><Link>Ranking Global</Link></li>
                </ul>
                <img src={SubLogo} />
            </div>
        </header>
    )
}

export default Header;