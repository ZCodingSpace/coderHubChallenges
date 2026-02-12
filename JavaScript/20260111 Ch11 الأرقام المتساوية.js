
function equal_check(num1, num2) {

    return (num1 == num2);
}


///// TEST 1 /////
// Inputs
num1 = 1
num2 = 3

// Outputs
console.log(equal_check(num1, num2)); // false


///// TEST 2 /////
// Inputs
num1 = 4
num2 = 4

// Outputs
console.log(equal_check(num1, num2)); // true


///// TEST 3 /////
// Inputs
num1 = 0
num2 = 0

// Outputs
console.log(equal_check(num1, num2)); // true


///// TEST 4 /////
// Inputs
num1 = 2
num2 = 1

// Outputs
console.log(equal_check(num1, num2)); // false