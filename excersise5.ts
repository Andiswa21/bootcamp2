class Calculator {
    add(a: number, b: number): number {
        this.validateInput(a, b);
        return a + b;
    }

    subtract(a: number, b: number): number {
        this.validateInput(a, b);
        return a - b;
    }

    multiply(a: number, b: number): number {
        this.validateInput(a, b);
        return a * b;
    }

    divide(a: number, b: number): number {
        this.validateInput(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Private method for input validation
    private validateInput(a: any, b: any): void {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Invalid input: both arguments must be numbers.");
        }
    }
}
