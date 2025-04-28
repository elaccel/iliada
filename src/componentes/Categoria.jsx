import React from 'react'
import { useParams } from 'react-router-dom'
import Produto from './Produto'

function Categoria({ produtos, carrinho, atualizarQuantidade }) {
  // Obtendo o parâmetro da categoria pela URL
  const { nome } = useParams()

  // Filtrando os produtos pela categoria
  const produtosFiltrados = produtos.filter(produto => produto.categoria === nome)

  return (
    <div className="categoria">
      <h2>{nome.charAt(0).toUpperCase() + nome.slice(1)} - Produtos</h2>

      {/* Exibindo os produtos filtrados */}
      <div className="produtos-lista">
        {produtosFiltrados.map(produto => (
          <Produto
            key={produto.id}
            produto={produto}
            carrinho={carrinho}
            atualizarQuantidade={atualizarQuantidade}
          />
        ))}
      </div>
    </div>
  )
}

export default Categoria
