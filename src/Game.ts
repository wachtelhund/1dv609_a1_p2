export class Game {
    constructor(amountOfPlayers: number, dicePerPlayer: number) {
        if (amountOfPlayers < 2) {
            throw new RangeError("Amount of players must be greater than 1");
        }
        if (dicePerPlayer < 1) {
            throw new RangeError("Amount of dice per player must be greater than 0");
        }
    }

}