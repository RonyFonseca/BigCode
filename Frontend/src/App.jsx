import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import 'bootstrap-icons/font/bootstrap-icons.css';


//----------Paginas-----------
import Login from "./Pages/Auth/Login.jsx"; 
import Logout from "./Pages/Auth/Logout.jsx";
import Register from "./Pages/Auth/Register.jsx";
import EmailValidate from "./Pages/Auth/EmailValidate.jsx";
import Home from "./Pages/Home/Home.jsx"
//-------Página de estudos---------
import Estudos from "./Pages/Estudo/Estudos.jsx";
import Constantes  from "./Pages/Estudo/SubPaginas/Constantes.jsx";
import Log from "./Pages/Estudo/SubPaginas/Log.jsx";
import Linear from "./Pages/Estudo/SubPaginas/Linear.jsx";
import LogLinear from "./Pages/Estudo/SubPaginas/LogLinear.jsx";
import Quadratico from "./Pages/Estudo/SubPaginas/Quadratico.jsx";
import Exponencial from "./Pages/Estudo/SubPaginas/Exponencial.jsx";
import Fatorial from "./Pages/Estudo/SubPaginas/Fatorial.jsx";
//---------Páginas de questões------
import SecaoQuests from "./Pages/Home/SecaoQuests.jsx";
import FinalizarQuests from "./Pages/Home/FinalizarQuests.jsx";
//--------Criação-------------------
import CriarQuestao from "./Pages/CriarQuestao/CriarQuestao.jsx"; 
import CriarSecao from "./Pages/CriarSecao/CriarSecao.jsx";
import TelaFinalSecao from "./Pages/CriarSecao/TelaFinal/TelaFinalSecao.jsx";
//--------Usuário-------------------
import MeuPerfil from "./Pages/MeuPerfil/MeuPerfil.jsx";
import Ranking from "./Pages/Ranking/Ranking.jsx";

//---------Private------------
import PrivateRoute from "./routes/PrivateRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>} />
      
          <Route path="/register/validate" element={<EmailValidate />} />

          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/estudos" element={<PrivateRoute><Estudos /></PrivateRoute>} />
          <Route path="/constantes" element={<PrivateRoute><Constantes /></PrivateRoute>} />
          <Route path="/log" element={<PrivateRoute><Log /></PrivateRoute>} />
          <Route path="/linear" element={<PrivateRoute><Linear /></PrivateRoute>} />
          <Route path="/loglinear" element={<PrivateRoute><LogLinear /></PrivateRoute>} />
          <Route path="/quadratico" element={<PrivateRoute><Quadratico /></PrivateRoute>} />
          <Route path="/exponencial" element={<PrivateRoute><Exponencial /></PrivateRoute>} />
          <Route path="/fatorial" element={<PrivateRoute><Fatorial /></PrivateRoute>} />


          <Route path="/quests/res/:id" element={<PrivateRoute><SecaoQuests /></PrivateRoute>} />
          <Route path="/finalizado" element={<PrivateRoute><FinalizarQuests /></PrivateRoute>} />
          <Route path="/criar/quests" element={<PrivateRoute><CriarQuestao /></PrivateRoute>} />
          <Route path="/criar/secao" element={<PrivateRoute><CriarSecao /></PrivateRoute>} />
          <Route path="/criar/secao/concluido" element={<PrivateRoute><TelaFinalSecao /></PrivateRoute>} />

          <Route path="/meuperfil" element={<PrivateRoute><MeuPerfil /></PrivateRoute>} />
          <Route path="/ranking" element={<PrivateRoute><Ranking /></PrivateRoute>} />
 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
