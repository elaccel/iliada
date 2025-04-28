import React from 'react';
import './App.css';  // Estilos para o Header (pode ser um arquivo separado se preferir)

function Header() {
  return (
    <header className="cabecalho">
      <div className="logo-container">
        <img alt="Logo Ilíada" className="logo" src="/imagens/topo.webp" />
      </div>
      <div className="nome-container">
        <span className="nome-atelier">Ilíada Ateliê</span>
      </div>
    </header>
  );
}

export default Header;
