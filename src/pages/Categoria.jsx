import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Produto from './Produto'; // Se você já tem esse componente





function Categoria({ produtos, carrinho, atualizarQuantidade }) {
  const { nome } = useParams();
  const [visiveis, setVisiveis] = useState(6); // Mostra 6 produtos primeiro

  const produtosFiltrados = produtos.filter(p => p.categoria === nome);

  const mostrarMais = () => {
    setVisiveis(prev => prev + 3); // Cada clique mostra +3
  };

  return (
    <div className="categoria-page">
      <h2 className="titulo-cardapio">{nome.toUpperCase()}</h2>

      <div className="produtos-lista">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.slice(0, visiveis).map(produto => (
            <div key={produto.id} className="produto-item">
              <img src={produto.imagem} alt={produto.nome} />
              <p>{produto.nome}</p>
              <span>R$ {produto.preco}</span>
            </div>
          ))
        ) : (
          <p>Não há produtos disponíveis nesta categoria ainda.</p>
        )}
      </div>

      {visiveis < produtosFiltrados.length && (
        <button className="botao-ver-mais" onClick={mostrarMais}>
          Ver mais produtos
        </button>
      )}
    </div>
  );
}

export default Categoria;
