import { Link } from 'react-router-dom';

const categorias = [
  { id: 1, nome: "Casa", imagem: "/imagens/casa.gif" },
  { id: 2, nome: "Amigurumi", imagem: "/imagens/amigurumi.gif " },
  { id: 3, nome: "Infantil", imagem: "/imagens/infantil.gif" },
  { id: 4, nome: "Moda", imagem: "/imagens/moda.gif" },
  { id: 5, nome: "Bolsas", imagem: "/imagens/bolsas.gif" },
  { id: 6, nome: "Chaveiros", imagem: "/imagens/chaveiros.gif" },
  { id: 7, nome: "Geek", imagem: "/imagens/geek.gif" },
  { id: 8, nome: "Pet", imagem: "/imagens/pet.gif" },
];

function Home() {
  return (
    <div className="home">
      <h2 className="titulo-cardapio">Navegue pelas categorias</h2>
      <div className="categorias-lista">
        {categorias.map(cat => (
          <Link to={`/categoria/${cat.nome.toLowerCase()}`} key={cat.id} className="categoria-item">
            <img src={cat.imagem} alt={cat.nome} />
            <p>{cat.nome}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
