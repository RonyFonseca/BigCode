import styles from "./Header.module.css";

import SubLogo from "../../assets/images/sub-logo.PNG";

function Header(){
    return (
        <header>
            <i className="bi bi-house"></i>
            <img src={SubLogo} />
        </header>
    )
}

export default Header;