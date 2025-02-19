import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [info, setInfo] = useState("loading...");

  useEffect(() => {
    (async() => {
      const backendHost = "http://localhost";
      // const backendHost = process.env.BACKEND_HOST;
      // console.log(backendHost);
      const response = await fetch(`${backendHost}/api`);
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
