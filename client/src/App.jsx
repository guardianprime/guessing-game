import LandingPage from "./pages/LandingPage";
import { io } from "socket.io-client";
import { useEffect } from "react";
//import Lobby from "./pages/Lobby";

function App() {
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
      <LandingPage />
      {/*  <Lobby /> */}
    </>
  );
}

export default App;
