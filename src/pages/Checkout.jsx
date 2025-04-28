import Resumo from '../componentes/Resumo'

function Checkout({ produtos, carrinho }) {
  return (
    <div>
      <h2>Resumo da Compra</h2>
      <Resumo produtos={produtos} carrinho={carrinho} />
    </div>
  )
}

export default Checkout
