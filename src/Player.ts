import { Die } from "./Die";

export class Player {
    constructor(private dies: Die[]) {
        if (dies.length < 1) {
            throw new RangeError("Amount of dies must be greater than 0");
        }
    }

    public getSum(): number {
        let sum = 0;
        this.dies.forEach(die => {
            sum += die.getValue();
        });
        return sum;
    }

    public roll(): void {
        this.dies.forEach(die => {
            die.roll();
        });
    }
}