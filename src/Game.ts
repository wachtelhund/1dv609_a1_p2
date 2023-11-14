import { Die } from "./Die";
import { Player } from "./Player";

export class Game {
    private players: Player[] = [];
    private turn: number = 0;

    constructor(amountOfPlayers: number, dicePerPlayer: number) {
        if (amountOfPlayers < 2) {
            throw new RangeError("Amount of players must be greater than 1");
        }
        if (dicePerPlayer < 1) {
            throw new RangeError("Amount of dice per player must be greater than 0");
        }
        this.createPlayers(amountOfPlayers, dicePerPlayer);
    }

    private createPlayers(numberOfPlayers: number, numberOfDice: number) {
        for (let i = 0; i < numberOfPlayers; i++) {
            const dice: Die[] = [];
            for (let j = 0; j < numberOfDice; j++) {
                dice.push(new Die(6));
            }
            this.players.push(new Player(dice));
        }
    }

    public getPlayerIndex(): number {
        return 0;
    }

    public getCurrentPlayer(): GamePlayer {
        return new GamePlayer(this.players[this.turn], this.turn);
    }

}

export class GamePlayer {
    constructor(public player: Player, public index: number) {
    }
}