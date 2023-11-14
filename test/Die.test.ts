import { expect, test } from "bun:test";
import { Die } from "../src/Die";
import assert, { throws } from "assert";

test("getSides should return number of sides", () => {
    const expected = 6;
    const actual = new Die(6).getSides();
    assert.equal(actual, expected);
});

test("value should be 1 if no rolls have occured", () => {
    const expected = 1;
    const die = new Die(6);
    const actual = die.getValue();
    assert.equal(actual, expected);
});

test("roll should change the state of the value", () => {
    const expected = 4;
    const die = new DieStub(6);
    die.roll();
    const actual = die.getValue();

});

class DieStub extends Die {
    constructor(sides: number) {
        super(sides);
    }

    roll() {
        super.value = 4;
    }
}
