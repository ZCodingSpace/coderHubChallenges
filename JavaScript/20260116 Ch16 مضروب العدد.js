
// Solution 1
function factorial(number) {

    let result = 1;

    for (let i = number; i > 0; i--) {
        result *= i;
    }
    return result;
}


// Solution 2
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1
    }
    return number * factorial(number - 1)
}


///// TEST 1 /////
// Inputs
number = 10

// Outputs
console.log(factorial(number)) // 3628800


///// TEST 2 /////
// Inputs
number = 5

// Outputs
console.log(factorial(number)) // 120


///// TEST 3 /////
// Inputs
number = 2

// Outputs
console.log(factorial(number)) // 2


///// TEST 4 /////
// Inputs
number = 4

// Outputs
console.log(factorial(number)) // 24
