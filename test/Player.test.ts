import { expect, test } from "bun:test";
import { Player } from "../src/Player";
import assert from "assert";

test("amount of dies should not be less than 1", () => {
    expect(() => new Player(0)).toThrow();
});

test("sum of dies should be 0 if no rolls have occured", () => {
    const expected = 0;
    const player = new Player(2);
    const actual = player.getSum();
    assert.equal(actual, expected);
});