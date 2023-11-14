export class Player {
    constructor(private dies: number) {
        if (dies < 1) {
            throw new RangeError("Amount of dies must be greater than 0");
        }
    }
}