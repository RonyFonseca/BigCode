import styles from "./CriarQuestao.module.css"; 

import Text from "../../Components/Text/Text.jsx";

import { useLocation,useNavigate } from "react-router-dom";

import { useState } from "react";

import Alternativa from "../../Components/Alternativa/Alternativa.jsx";

import Button from "../../Components/Button/Button.jsx";

import api from "../../services/api.js";

function CriarQuestao(){


    const [token] = useState(localStorage.getItem("token"));

    const navigate = useNavigate(); 

    const location = useLocation(); 

    const {titulo, resumo} = location.state || {}

    const [letras] = useState(["A","B","C","D"])

    const [enunciado,setEnunciado] = useState("")
    const [alternativa, setAlternativa] = useState("");
    const [alternativas, setAlternativas] = useState([]);
    const [alterCorreta, setAlterCorreta] = useState("");
    const [indexAlterCorreta, setIndexAlterCorreta] = useState();

    const [quests, setQuests] = useState([]);

    const pegarEnunciado = (e) => {
        setEnunciado(e);
    }

    const pegarAlternativa = (e) => {
        setAlternativa(e)
    }

    const criarAlternativa = () => {
        if(alternativas.length < 4){
            setAlternativas([...alternativas, alternativa]);
            setAlternativa("");   
        }else {
            console.log("Erro de maior que 4 alternativas n")
        }
    }


    const selecionarAlternativaCorreta = (e, index) => {
        setAlterCorreta(e)
        setIndexAlterCorreta(index);
    }


    const apagarAlternativa = (index) => {
        const alter = alternativas; 
        alter.splice(index, 1); 
        setAlternativa([...alter]);
    }


    const adicionarQuestao = () => {
        const quest = {"enunciado": enunciado, "alternativas":[...alternativas], "alternativa_correta":alterCorreta}
        setQuests([...quests, quest]);
        setAlternativas([]);
        setEnunciado("");
        setAlterCorreta("");
        setAlternativa("");
        setIndexAlterCorreta();
    }

    const apagarQuest = (index) => {
        const questsRemover = [...quests]; 
        questsRemover.splice(index, 1); 
        setQuests([...questsRemover])
    }

    const criarSecao = async() => {

        const res = await api.post("/create/secao",{
            titulo:titulo,
            resumo:resumo
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(res.status==200){
            await adicionarQuestsASecao(res.data.object)
        }

    }

    const criarQuests = async() => {
        let questoesEncontradas = []; 
        for(let i=0; i<quests.length;i++){
            const res = await api.post("questoes/create",{
                enunciado:quests[i].enunciado,
                alternativas:quests[i].alternativas, 
                alternativaCorreta:quests[i].alternativa_correta
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            questoesEncontradas.push(res.data.object)
        }
        return questoesEncontradas; 
    }

    const adicionarQuestsASecao = async(id) => {
        const questsDb = await criarQuests();
        for(let i=0; i<questsDb.length; i++){
            const res = await api.put(`/adicionar/secao/${id}/${questsDb[i].id}`);
        }

        navigate("/criar/secao/concluido", {state:{titulo:titulo,resumo:resumo,quests:quests}})
    }



    return (
        <div className={styles.criar_questao}>
            <div className={styles.criar_questao_header}>
                <h1>{titulo}</h1>
                <p>{resumo}</p>
            </div>
            <form action="">
                <Text placeholder="Digite o enunciado" onChange={(e) => pegarEnunciado(e)} value={enunciado}/>

                <div className={styles.alternativas_container}>
                    {alternativas.map((e, index) => 
                    <Alternativa key={index} letra={letras[index]}value={e} apagarAlternativa = {() => apagarAlternativa(index)}/>)}
                </div>
                <div className={styles.adicionar_alternativas}>
                    <input type="text" placeholder="Digite alternativa" value={alternativa} onChange={(e) => pegarAlternativa(e.target.value)}/>
                    <button type = "button" onClick={criarAlternativa}>Adicionar</button>
                </div>
                <div className={styles.adicionar_alternativa_correta}>
                    <p>Selecione a alternativa dada como correta:</p>
                    <div className={styles.adicionar_alternativa_correta_opcs}>
                        {alternativas.map((e, index) => (
                            <Alternativa key={index} letra={letras[index]} value = {e} alternativaCorreta={true} selecionarCorreta={() => selecionarAlternativaCorreta(e , index)} selecionada={indexAlterCorreta==index?true:false}/>
                        ))}
                    </div>
                </div>
                <button type="button" className={styles.butao_criar_quests} onClick={adicionarQuestao} >Cria questão</button>
            </form>

            <div className={styles.questoes}>
                {quests.length>0? quests.map((e, index) => (
                    <div key={index} className={styles.card_questoe}>
                        <h3>{e.enunciado}</h3>
                        <ul>
                            {e.alternativas.map((e, index) => (
                                 <Alternativa key={index} letra={letras[index]} value = {e} alternativaCorreta={true} selecionarCorreta={() => selecionarAlternativaCorreta(e , index)}/>
                            ))}
                        </ul>
                        <p>Correta:{e.alternativa_correta}</p>
                        <div className={styles.card_questao_lixo}>
                            <button type="button" onClick={() => apagarQuest(index)}><i className="bi bi-trash2-fill"></i></button>
                        </div>
                    </div>
                    
                )): (<p>Ainda não tem questões</p>)}
                {quests.length>0?(
                    <div>
                        <Button assunto="Criar Seção" click={() => criarSecao()}/>
                    </div>
                ):""}
            </div>
        </div>
    )
}

export default CriarQuestao;