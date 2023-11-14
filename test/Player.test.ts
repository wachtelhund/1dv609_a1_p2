import { expect, test } from "bun:test";
import { Player } from "../src/Player";
import assert from "assert";

test("amount of dies should not be negative", () => {
    expect(() => new Player(-1)).toThrow();
});