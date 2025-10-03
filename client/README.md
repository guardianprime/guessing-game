### GUESSING GAME

## Context

This is a fun game for you and your friends. The idea here is to build a live guessing game such that you and your friends can easily see your results, scores and answers.

Requirements:
Game session interface should be like a chat interface
User should be able to start a game session(game master)
Other users can join the game session(players) before the game session starts
Users should be able to see number of players connected to a game session
Game master should be able to create a question and an answer for other players in this game session
Game session can only be started by the game master and there must be more than two players before game session starts
When the game master starts the game sessions:
a question is displayed for each player and each player has 3 attempts to guess the right answer.
Other users(players) cannot join this session while the game is in progress
The game session ends on the following conditions:
A player gets the right answer
The time for the game session expires(default to 60 seconds)
When a player gets the right answer:
other players cannot guess the answer
The winner and answer is displayed to other players and the winning player(You have won)
10 points is assigned to the winning player
When the time for the game session expires
other players cannot guess the answer
No winner is displayed to other players
No points is assigned to any player
Answer is displayed to the other players
Players can see each others scores
When game session ends, another player becomes the game master and can create a question with an answer for other players to guess
Game session is deleted when all the players in the session has left the session

Notice Board

1. Remember to validate inputs.
2. Remember there are more than one ways to skin a cat.
3. Don’t focus on beautiful design (but design anyway for your portfolio).
