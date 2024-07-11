const getData = async () => {
  const response = await fetch('http://localhost:8000/api/');
  const result = response.json()
  return result
}

const Home = async () => {
  const data = await getData()
  
  const { message } = data;

  return (
    <main>
      <h1>{message}</h1>
    </main>
  );
}

export default Home;