import React from 'react'

function Produto({ produto, carrinho, atualizarQuantidade }) {
  const quantidade = carrinho[produto.id] || 0

  const handleQuantidadeChange = (e) => {
    const newQuantidade = parseInt(e.target.value) || 0
    atualizarQuantidade(produto.id, newQuantidade)
  }

  return (
    <div className="produto">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <input
        type="number"
        value={quantidade}
        onChange={handleQuantidadeChange}
        min="0"
        step="1"
      />
    </div>
  )
}

export default Produto
