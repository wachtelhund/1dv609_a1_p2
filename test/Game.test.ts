import { expect, test } from "bun:test";
import { Game, GamePlayer } from "../src/Game";
import { Player } from "../src/Player";
import { Die } from "../src/Die";

test("should throw error if number of players is less than 2", () => {
    expect(() => new Game(1, 1)).toThrow();
});

test("should throw error if number of dice per player is less than 1", () => {
    expect(() => new Game(2, 0)).toThrow();
});

test("getPlayerIndex should return the index of the player with the current turn", () => {
    const expected = 0;
    const game = new Game(2, 1);
    const actual = game.getPlayerIndex();
    expect(actual).toBe(expected);
});

test("getCurrentPlayer should return an instance of GamePlayer including the current player and index", () => {
    const expected = {
        player: new Player([new Die(6)]),
        index: 0
    }
    const game = new Game(2, 1);
    const actual = game.getCurrentPlayer();
    expect(actual).toEqual(expected);
});

test("nextTurn should increase the turn by 1", () => {
    const expected = 1;
    const game = new Game(2, 1);
    game.nextTurn();
    const actual = game.getCurrentPlayer().index;
    expect(actual).toBe(expected);
});