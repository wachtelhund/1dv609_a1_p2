import { expect, test } from "bun:test";
import { Player } from "../src/Player";
import assert from "assert";

test("amount of dies should not be less than 1", () => {
    expect(() => new Player(0)).toThrow();
});