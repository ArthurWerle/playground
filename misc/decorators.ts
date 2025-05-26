function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyName} with args:`, args);
        const result = method.apply(this, args);
        console.log(`Result:`, result);
        return result;
    };
}

function PerformMultiplication(factor: number) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
    
        descriptor.value = function (...args: any[]) {
            console.log(`Calling performMultiplication with factor of ${factor} on function ${propertyName}`, args);
            const result = method.apply(this, args);
            console.log(`Result of multiplication`, result*factor);
            return result;
        };
    }
}

class Calculator {
    @Log
    @PerformMultiplication(2)
    add(a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculator()
calculator.add(3, 5)