import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";

function Logout(){

    const {logout} = useAuth();

    const navigate = useNavigate();

    useEffect(()=> {
        const deslogar = async() => {
            const ok = await logout();
            navigate("/")
        }
        deslogar();
    },[])

    return(
        <></>
    )
}

export default Logout; 