import { expect, test } from "bun:test";
import { Game } from "../src/Game";

test("should throw error if number of players is less than 2", () => {
    expect(() => new Game(1, 1)).toThrow();
});

test("should throw error if number of dice per player is less than 1", () => {
    expect(() => new Game(2, 0)).toThrow();
});