import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chiu from "./components/Chiu";
import TraiTim from "./components/Traitim";
import TraiTimTanVo from "./components/TraitimTanvo";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<TraiTim />}/>  
        <Route path="/traitimtanvo" element={<TraiTimTanVo />}/>  
        <Route path="/traitimtanvo/chiu" element={<Chiu />}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App;
