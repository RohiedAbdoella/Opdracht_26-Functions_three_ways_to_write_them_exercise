//Function declaration
/*
function numbers (numberA, numberB) {
    const squaredA = numberA * numberA;
    const squaredB = numberB * numberB;
    const sum = squaredA + squaredB;
    const sumSquared = sum * sum;

    return sumSquared;
}

const result = numbers(2, 10)
console.log(result);
*/

//Function expression
/*
const numbers = function (numberA, numberB) {
    const squaredA = numberA * numberA;
    const squaredB = numberB * numberB;
    const sum = squaredA + squaredB;
    const sumSquared = sum * sum;

    return sumSquared;
};

const result = numbers(2, 10)
console.log(result);
*/

//Arrow function
const numbers = (numberA, numberB) => {
    const squaredA = numberA * numberA;
    const squaredB = numberB * numberB;
    const sum = squaredA + squaredB;
    const sumSquared = sum * sum;

    return sumSquared;
};

const result = numbers(2, 10)
console.log(result);