import { expect, test } from "bun:test";
import { Player } from "../src/Player";
import assert from "assert";
import { Die } from "../src/Die";

test("amount of dies should not be less than 1", () => {
    expect(() => new Player([])).toThrow();
});

test("sum of dies should be equal to number of dies if no rolls have occured", () => {
    const expected = 2;
    const player = new Player([new Die(6), new Die(6)]);
    const actual = player.getSum();
    assert.equal(actual, expected);
});

test("getSum should return the sum of all dies", () => {
    const expected = 6;
    const player = new Player([new DieStub(), new DieStub(), new DieStub()]);
    player.roll();
    player.getSum();
    const actual = player.getSum();
    assert.equal(actual, expected);
});

class DieStub extends Die {
    constructor() {
        super(6);
    }

    roll() {
        this.value = 2;
    }
}