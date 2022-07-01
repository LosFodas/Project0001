import { useState } from 'react';

function Home() {
  return (
    <div>
      <h1>Projeto 0001</h1>
      <Contador />
      <p>Testando a minha paginazinha</p>
    </div>

  )
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1)
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Home
