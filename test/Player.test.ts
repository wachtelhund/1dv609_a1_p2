import { expect, test } from "bun:test";
import { Player } from "../src/Player";
import assert from "assert";

test("amount of dies should not be less than 1", () => {
    expect(() => new Player(0)).toThrow();
});

test("sum of dies should be equal to number of dies if no rolls have occured", () => {
    const expected = 2;
    const player = new Player(2);
    const actual = player.getSum();
    assert.equal(actual, expected);
});