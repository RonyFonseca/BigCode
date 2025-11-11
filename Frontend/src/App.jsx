import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import 'bootstrap-icons/font/bootstrap-icons.css';


//----------Paginas-----------
import Login from "./Pages/Auth/Login.jsx"; 
import Register from "./Pages/Auth/Register.jsx";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
