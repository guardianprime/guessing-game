function LandingPage({ setNewGameId }) {
  function handleCreateGame() {
    console.log("Create game button clicked");
    setNewGameId("12345"); // Example game ID
  }

  function handleJoinGame(e) {
    e.preventDefault();
    console.log("Join game button clicked");
  }

  return (
    <div>
      <h1>This is a guessing game</h1>
      <p>join a game and guess the answer!</p>
      <form onSubmit={(e) => handleJoinGame(e)}>
        <input type="text" />
        <input type="submit" value="join game" />
      </form>
      <p>or create your own game</p>
      <button
        onClick={() => {
          handleCreateGame();
        }}
      >
        Create a game
      </button>
    </div>
  );
}

export default LandingPage;
