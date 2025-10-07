import LandingPage from "./pages/LandingPage";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
//import Lobby from "./pages/Lobby";

function App() {
  const [newGameId, setNewGameId] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <LandingPage setNewGameId={setNewGameId} />
      {newGameId && <Lobby />}
    </>
  );
}

export default App;
