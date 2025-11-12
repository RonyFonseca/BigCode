import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import 'bootstrap-icons/font/bootstrap-icons.css';


//----------Paginas-----------
import Login from "./Pages/Auth/Login.jsx"; 
import Register from "./Pages/Auth/Register.jsx";
import EmailValidate from "./Pages/Auth/EmailValidate.jsx";

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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
