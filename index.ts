import { Die } from "./src/Die";
import { Game } from "./src/Game";

const amountOfPlayers = 3;
const dicePerPlayer = 5;

const game = new Game(amountOfPlayers, dicePerPlayer);

for (let i = 0; i < amountOfPlayers; i++) {
    game.getCurrentPlayer().player.roll();
    game.nextTurn();
}

const leaderboard = game.getLeaderBoard();
leaderboard.forEach((entry) => {
    console.log(`Player ${entry.index + 1} has ${entry.player.toString()}: ${entry.player.getSum()}`);
});