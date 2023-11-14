import { Die } from "./Die";

export class Player {
    private dies: Die[] = [];
    constructor(private numberOfDies: number) {
        if (numberOfDies < 1) {
            throw new RangeError("Amount of dies must be greater than 0");
        }
        this.addDies(numberOfDies);
    }

    private addDies(numberOfDies: number): void{
        for (let i = 0; i < numberOfDies; i++) {
            this.dies.push(new Die(6));
        }
    }

    public getSum(): number {
        let sum = 0;
        this.dies.forEach(die => {
            sum += die.getValue();
        });
        return sum;
    }


}