function isFibonacci(num) {
    let a = 0, b = 1;

    if (num === a || num === b) return true;

    while (b < num) {
        let temp = a + b;
        a = b;
        b = temp;
        if (b === num) return true;
    }

    return false;
}

// Input
const numberToCheck = 21;

if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
