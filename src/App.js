import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteForm from "./components/ClienteForm";
import EscolherPizza from "./components/EscolherPizza";
import Carrinho from "./components/Carrinho";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/cliente" element={<ClienteForm />} />
        <Route path="/pedido" element={<EscolherPizza />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}

export default App;
