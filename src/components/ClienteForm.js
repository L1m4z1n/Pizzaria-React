import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PedidoContext } from "../context/PedidoContext";

const ClienteForm = () => {
  const [form, setForm] = useState({ nome: "", cpf: "", endereco: "" });
  const { setCliente } = useContext(PedidoContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCliente(form);
    navigate("/pedido");
  };

  return (
    <form onSubmit={handleSubmit} className="cliente-form">
      <h2>Seus Dados</h2>
      <input name="nome" placeholder="Nome" onChange={(e) => setForm({ ...form, nome: e.target.value })} required />
      <input name="cpf" placeholder="CPF" onChange={(e) => setForm({ ...form, cpf: e.target.value })} required />
      <input name="endereco" placeholder="Endereço" onChange={(e) => setForm({ ...form, endereco: e.target.value })} required />
      <button type="submit" className="primary-button">Continuar</button>
    </form>
  );
};

export default ClienteForm;
