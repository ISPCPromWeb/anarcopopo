const getData = async () => {
  const response = await fetch('http://localhost:8000/api/');
  const result = response.json()
  return result
}

const Home = async () => {
  const data = await getData()
  console.log(data)

  return (
    <main>
      <h1>AnarcoPopo</h1>
      <h2>Productos</h2>
      {data.map((product, index: number) => (
        <li key={index}>
          <p>Nombre: {product.name}</p>
        </li>
      ))}
    </main>
  );
}

export default Home;