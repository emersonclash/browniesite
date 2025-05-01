import React, { useState } from "react"; 
const produtos = [
  {
    nome: "Brownie Tradicional",
    descricao: "Brownie de chocolate com cobertura cremosa.",
    preco: "R$ 12,00",
    imagem: "/images/br1.jpg"
  },
  {
    nome: "Brownie com Nozes",
    descricao: "Brownie crocante com pedaços de nozes.",
    preco: "R$ 15,00",
    imagem: "/images/br2.jpg"
  },
  {
    nome: "Brownie com Sorvete",
    descricao: "Brownie com sorvete.",
    preco: "R$ 19,00",
    imagem: "/images/br3.jpg"
  }
];

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  return (
    <div>
      <header>
        <h1>Show de brownie</h1>
        <input type="text" placeholder="Buscar..." />
      </header>

      <section style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f8d7da" }}>
        <h2>Descubra o sabor do nosso brownie artesanal</h2>
        <p>Feito com amor e os melhores ingredientes</p>
      </section>

      <main className="container">
        {produtos.map((produto, index) => (
          <div key={index} className="card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <strong>{produto.preco}</strong><br />
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar</button>
          </div>
        ))}
      </main>

      <footer>
        <p>&copy; 2025 Show de Brownie. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}