export class Die {
    private value: number = 1;

    constructor(private sides: number) {
    }

    getSides(): number {
        return this.sides;
    }

    getValue() {
        return this.value;
    }
}