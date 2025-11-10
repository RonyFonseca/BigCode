import {BrowserRouter,Routes,Route} from "react-router-dom"; 

//----------Paginas-----------
import Login from "./Pages/Auth/Login.jsx"; 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
