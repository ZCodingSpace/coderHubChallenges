
// Solution 1
function exponent_squared(number) {

    return Math.pow(number, 2);
}


// Solution 2
function exponent_squared(number) {

    return number ** 2;
}


// Solution 3
function exponent_squared(number) {

    return number * number;
}


///// TEST 1 /////
// Inputs
number = 2

// Outputs
console.log(exponent_squared(number));  // 4


///// TEST 2 /////
// Inputs
number = -8

// Outputs
console.log(exponent_squared(number));  // 64


///// TEST 3 /////
// Inputs
number = 0

// Outputs
console.log(exponent_squared(number));  // 0


///// TEST 4 /////
// Inputs
number = 1

// Outputs
console.log(exponent_squared(number));  // 1