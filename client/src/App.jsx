import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="bg-sky-950">
      <h1>Fullstack App</h1>
      <p className="text-xl text-white">Backend says: {message}</p>
    </div>
  );
}

export default App;
