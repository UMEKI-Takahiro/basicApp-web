import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [info, setInfo] = useState("loading...");

  useEffect(() => {
    (async() => {
      const response = await fetch("/api");
      setInfo(await response.text());
    })()
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div> DB info: {info}</div>
    </div>
  );
}

export default App;
