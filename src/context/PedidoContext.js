import { createContext, useState } from "react";

export const PedidoContext = createContext();

export const PedidoProvider = ({ children }) => {
  const [cliente, setCliente] = useState({});
  const [pedido, setPedido] = useState({});

  return (
    <PedidoContext.Provider value={{ cliente, setCliente, pedido, setPedido }}>
      {children}
    </PedidoContext.Provider>
  );
};
