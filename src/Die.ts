export class Die {
    protected value: number = 1;

    constructor(private sides: number) {
    }

    roll() {
        this.value = Math.floor(Math.random() * this.sides) + 1;
    }

    getSides(): number {
        return this.sides;
    }

    getValue() {
        return this.value;
    }
}