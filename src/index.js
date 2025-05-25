import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PedidoProvider } from './context/PedidoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PedidoProvider> {/* ✅ Envolve o App */}
    <App />
  </PedidoProvider>
);
