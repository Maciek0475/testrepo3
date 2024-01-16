import logo from './logo.svg';
import './App.css';

const handleGet = async() => {
  const smh = {};
  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(smh)
  }
  fetch("http://localhost:5000/", requestOptions)
  .then(response => response.json())
  .then(data => console.log(data));
}

function App() {
  return (
    <div>
      <button onClick={handleGet}>Get</button>
    </div>
  );
}

export default App;
