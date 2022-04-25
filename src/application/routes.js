import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Llista_naus from "../components/Llista_naus";
import Nau_detalls from "../components/Nau_detalls";
import Registre from "../components/Registre";


export default () => (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/llista_naus" element={<Llista_naus/>}/>
          <Route path="/nau_detalls/:id" element={<Nau_detalls/>}/>
          <Route path="/registre" element={<Registre/>}/>
          
          <Route path="*" element={() => <div>404</div>}/>
        </Routes>
      </BrowserRouter>
    );

    
  
