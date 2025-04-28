import { useState } from 'react'


function Resumo({ produtos, carrinho }) {
  const [metodo, setMetodo] = useState('dinheiro')

  const totalItens = Object.values(carrinho).reduce((a, b) => a + b, 0)
  const totalPreco = produtos.reduce((acc, prod) => {
    const qtd = carrinho[prod.id] || 0
    return acc + prod.preco * qtd
  }, 0)

  return (
    <section className="resumo">
      <h2>Resumo da Compra</h2>
      <p>Total de itens: {totalItens}</p>
      <p>Total a pagar: <strong>R$ {totalPreco.toFixed(2)}</strong></p>

      <div className="pagamento">
        <h3>Método de Pagamento:</h3>
        <select value={metodo} onChange={e => setMetodo(e.target.value)}>
          <option value="dinheiro">Dinheiro</option>
          <option value="pix">Pix</option>
          <option value="debito">Débito</option>
          <option value="credito">Crédito</option>
        </select>
        <p style={{ marginTop: '8px' }}>Selecionado: <strong>{metodo}</strong></p>
      </div>
    </section>
  )
}

export default Resumo
