import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend con Vite + React</h1>
      <p>Mensaje del backend: <strong>{message}</strong></p>
    </div>
  );
}

export default App;