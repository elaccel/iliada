import './styles.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Categoria from './componentes/Categoria';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Resumo from './componentes/Resumo'; // Importando o Resumo existente
import './index.css';  // Certifique-se de que o index.css é importado primeiro
import './app.css';    // app.css pode ser importado depois

import { useNavigate } from 'react-router-dom';






const produtos = [ 
  { id: 1, nome: 'Almofada', preco: 40, imagem: '/imagens/almofada.png', categoria: 'casa' },
  { id: 2, nome: 'Tapete', preco: 70, imagem: '/imagens/tapete.png', categoria: 'casa' },
  { id: 3, nome: 'Colcha', preco: 120, imagem: '/imagens/colcha.png', categoria: 'casa' },
  { id: 4, nome: 'Vasos', preco: 55, imagem: '/imagens/vasos.png', categoria: 'casa' },
  { id: 5, nome: 'Toalha', preco: 65, imagem: '/imagens/toalha.png', categoria: 'casa' },
  { id: 6, nome: 'Manta', preco: 90, imagem: '/imagens/manta.png', categoria: 'casa' },

  { id: 7, nome: 'Big', preco: 80, imagem: '/imagens/big.png', categoria: 'amigurumi' },
  { id: 8, nome: 'Cão', preco: 75, imagem: '/imagens/cao.png', categoria: 'amigurumi' },
  { id: 9, nome: 'Dragão', preco: 85, imagem: '/imagens/dragao.png', categoria: 'amigurumi' },
  { id: 10, nome: 'Coelho', preco: 70, imagem: '/imagens/coelho.png', categoria: 'amigurumi' },
  { id: 11, nome: 'Personalizado', preco: 95, imagem: '/imagens/personalizado.png', categoria: 'amigurumi' },
  { id: 12, nome: 'Capivara', preco: 100, imagem: '/imagens/capivara.png', categoria: 'amigurumi' },

  { id: 13, nome: 'Quadro', preco: 60, imagem: '/imagens/quadro.png', categoria: 'infantil' },
  { id: 14, nome: 'Brinquedo', preco: 45, imagem: '/imagens/brinquedo.png', categoria: 'infantil' },
  { id: 15, nome: 'Kit Bebê', preco: 110, imagem: '/imagens/kitbebe.png', categoria: 'infantil' },
  { id: 16, nome: 'Chapéu', preco: 35, imagem: '/imagens/chapeu.png', categoria: 'infantil' },
  { id: 17, nome: 'Mochila', preco: 90, imagem: '/imagens/mochila.png', categoria: 'infantil' },
  { id: 18, nome: 'Casaco', preco: 85, imagem: '/imagens/casacoI.png', categoria: 'infantil' },

  { id: 19, nome: 'Flor', preco: 15, imagem: '/imagens/flor.png', categoria: 'chaveiros' },
  { id: 20, nome: 'Cereja', preco: 18, imagem: '/imagens/cereja.png', categoria: 'chaveiros' },
  { id: 21, nome: 'Urso', preco: 20, imagem: '/imagens/urso.png', categoria: 'chaveiros' },
  { id: 22, nome: 'Dino', preco: 22, imagem: '/imagens/dino.png', categoria: 'chaveiros' },
  { id: 23, nome: 'Jesus', preco: 25, imagem: '/imagens/jesus.png', categoria: 'chaveiros' },
  { id: 24, nome: 'Letra', preco: 18, imagem: '/imagens/letra.png', categoria: 'chaveiros' },

  { id: 25, nome: 'Capitu', preco: 120, imagem: '/imagens/capitu.png', categoria: 'bolsas' },
  { id: 26, nome: 'Belatrix', preco: 130, imagem: '/imagens/belatrix.png', categoria: 'bolsas' },
  { id: 27, nome: 'Arya', preco: 125, imagem: '/imagens/arya.png', categoria: 'bolsas' },
  { id: 28, nome: 'Bulma', preco: 140, imagem: '/imagens/bulma.png', categoria: 'bolsas' },
  { id: 29, nome: 'Lisa', preco: 115, imagem: '/imagens/lisa.png', categoria: 'bolsas' },
  { id: 30, nome: 'Samus', preco: 135, imagem: '/imagens/samus.png', categoria: 'bolsas' },

  { id: 31, nome: 'Roupa', preco: 40, imagem: '/imagens/roupapet.png', categoria: 'pet' },
  { id: 32, nome: 'Cama', preco: 90, imagem: '/imagens/cama.png', categoria: 'pet' },
  { id: 33, nome: 'Bolsa', preco: 30, imagem: '/imagens/bolsaP.png', categoria: 'pet' },
  { id: 34, nome: 'Tapete', preco: 50, imagem: '/imagens/tapetepet.png', categoria: 'pet' },
  { id: 35, nome: 'Touca', preco: 85, imagem: '/imagens/touca.png', categoria: 'pet' },
  { id: 36, nome: 'Bandana', preco: 30, imagem: '/imagens/bandana.png', categoria: 'pet' },

{ id: 37, nome: 'Mario', preco: 50, imagem: '/imagens/mario.png', categoria: 'geek' },
{ id: 38, nome: 'Pokemon', preco: 60, imagem: '/imagens/pokemon.png', categoria: 'geek' },
{ id: 39, nome: 'Luffy', preco: 55, imagem: '/imagens/luffy.png', categoria: 'geek' },
{ id: 40, nome: 'Rick', preco: 65, imagem: '/imagens/rick.png', categoria: 'geek' },
{ id: 41, nome: 'Mascara', preco: 45, imagem: '/imagens/mascara.png', categoria: 'geek' },
{ id: 42, nome: 'Spock', preco: 80, imagem: '/imagens/spock.png', categoria: 'geek' },

{ id: 43, nome: 'Cropped', preco: 80, imagem: '/imagens/cropped.png', categoria: 'moda' },
{ id: 44, nome: 'Blusa', preco: 100, imagem: '/imagens/blusa.png', categoria: 'moda' },
{ id: 45, nome: 'Camisa', preco: 90, imagem: '/imagens/camisa.png', categoria: 'moda' },
{ id: 46, nome: 'Calça', preco: 110, imagem: '/imagens/calca.png', categoria: 'moda' },
{ id: 47, nome: 'Vestido', preco: 120, imagem: '/imagens/vestido.png', categoria: 'moda' },
{ id: 48, nome: 'Casaco', preco: 130, imagem: '/imagens/casaco.png', categoria: 'moda' },
 
];

const categorias = [
  { id: 1, nome: 'casa', imagem: '/imagens/casa.jpg' },
  { id: 2, nome: 'amigurumi', imagem: '/imagens/amigurumi.jpg' },
  { id: 3, nome: 'infantil', imagem: '/imagens/infantil.jpg' },
  { id: 4, nome: 'moda', imagem: '/imagens/moda.jpg' },
  { id: 5, nome: 'bolsas', imagem: '/imagens/bolsas.jpg' },
  { id: 6, nome: 'chaveiros', imagem: '/imagens/chaveiros.jpg' },
  { id: 7, nome: 'geek', imagem: '/imagens/geek.jpg' },
  { id: 8, nome: 'pet', imagem: '/imagens/pet.jpg' },
];

function App() {
  const [carrinho, setCarrinho] = useState({});

  const atualizarQuantidade = (id, quantidade) => {
    setCarrinho(prev => ({ ...prev, [id]: quantidade }));
  };

  return (
    <Router>
      <div className="container">

        {/* Redes sociais */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/elainecelestino/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/elaccel" target="_blank"><i className="fas fa-globe"></i></a>
          <a href="https://github.com/elaccel" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/elaine__cel/profilecard/?igsh=ajRwMmtpaG43b2Vl" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="mailto:elacelestinocontato@gmail.com?subject=Fale%20Conosco"><i className="far fa-envelope"></i></a>
          <a href="https://wa.me/5521999121451" target="_blank" className="whatsapp-link"><i className="fab fa-whatsapp"></i></a>
        </div>

        {/* Nova div com o nome "Ilíada Ateliê" */}
      <div className="nome-atelie">
      <h1>Ilíada Ateliê</h1>
      </div>

        {/* Cabeçalho */}
        <header className="cabecalho">
          <img src="/imagens/topo.webp" alt="Logo Ilíada" className="logo" />
        </header>

        

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home categorias={categorias} />} />

          <Route
            path="/categoria/:nome"
            element={
              <>
                <Categoria
                  produtos={produtos}
                  carrinho={carrinho}
                  atualizarQuantidade={atualizarQuantidade}
                />
                {/* Exibe o resumo da compra aqui */}
                <Resumo carrinho={carrinho} produtos={produtos} />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Checkout
                  produtos={produtos}
                  carrinho={carrinho}
                />
                {/* Exibe o resumo da compra aqui também */}
                <Resumo carrinho={carrinho} produtos={produtos} />
              </>
            }
          />
        </Routes>

        {/* Rodapé */}
        <footer className="rodape">
          <p>© 2025 Ilíada Crochê — 
          Desenvolvido por <a href="https://github.com/elaccel" target="_blank">ElaCel</a>, no Curso de Programador FrontEnd do Senai (2025) Todos os direitos reservados
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
