import { Game } from "./src/Game";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const amountOfPlayers = parseInt(await rl.question("How many players? "));
const dicePerPlayer = parseInt(await rl.question("How many dice per player? "));

const game = new Game(amountOfPlayers, dicePerPlayer);

let choice = 0;
while (choice !== 3) {
    printMenu();
    choice = parseInt(await rl.question("Your choice: "));
    switch (choice) {
        case 1:
            game.getCurrentPlayer().player.roll();
            console.log(`Player ${game.getCurrentPlayer().index + 1} rolled ${game.getCurrentPlayer().player.toString()} which evaluates to ${game.getCurrentPlayer().player.getSum()}`);
            
            game.nextTurn();
            break;
        case 2:
            const leaderboard = game.getLeaderBoard();
            leaderboard.forEach((entry) => {
                console.log(`Player ${entry.index + 1} has ${entry.player.toString()}: ${entry.player.getSum()}`);
            });
            break;
        case 3:
            console.log("Goodbye!");
            process.exit();
        default:
            console.log("Invalid choice");
    }

}

function printMenu() {
    console.log(`\n1. Roll dice for player ${game.getCurrentPlayer().index + 1}`);
    console.log("2. Show leaderboard");
    console.log("3. Exit\n");
};