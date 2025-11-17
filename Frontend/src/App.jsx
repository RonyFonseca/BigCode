import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import 'bootstrap-icons/font/bootstrap-icons.css';


//----------Paginas-----------
import Login from "./Pages/Auth/Login.jsx"; 
import Register from "./Pages/Auth/Register.jsx";
import EmailValidate from "./Pages/Auth/EmailValidate.jsx";
import Home from "./Pages/Home/Home.jsx"

//---------Páginas de questões------
import SecaoQuests from "./Pages/Home/SecaoQuests.jsx";
import FinalizarQuests from "./Pages/Home/FinalizarQuests.jsx";
//--------Criação-------------------
import CriarQuestao from "./Pages/CriarQuestao/CriarQuestao.jsx"; 
import CriarSecao from "./Pages/CriarSecao/CriarSecao.jsx";
import TelaFinalSecao from "./Pages/CriarSecao/TelaFinal/TelaFinalSecao.jsx";

//---------Private------------
import PrivateRoute from "./routes/PrivateRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
      
          <Route path="/register/validate" element={<PrivateRoute><EmailValidate /></PrivateRoute>} />

          <Route path="/home" element={<Home />} />
          <Route path="/quests/res/:id" element={<SecaoQuests />} />
          <Route path="/finalizado" element={<FinalizarQuests />} />
          <Route path="/criar/quests" element={<CriarQuestao />} />
          <Route path="/criar/secao" element={<CriarSecao />} />
          <Route path="/criar/secao/concluido" element={<TelaFinalSecao />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
