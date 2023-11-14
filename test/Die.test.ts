import { expect, test } from "bun:test";
import { Die } from "../src/Die";
import assert, { throws } from "assert";

test("getSides should return number of sides", () => {
    const expected = 6;
    const actual = new Die(6).getSides();
    assert.equal(actual, expected);
});