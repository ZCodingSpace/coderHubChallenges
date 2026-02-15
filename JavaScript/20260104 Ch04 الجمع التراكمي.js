
function cumulative_addition(elements_array) {

    let sum = 0;

    for (let i of elements_array) {
        sum += i;
    }
    // return the sum and the length of the array as an array
    return [sum, elements_array.length];
}


///// TEST 1 /////
// Inputs
elements_array = [5, 1, 2, 4, 9, 10, 200]

// Outputs
console.log(cumulative_addition(elements_array)) // [231,7]


///// TEST 2 /////
// Inputs
elements_array = [500, 123, 52, 123, 22]

// Outputs
console.log(cumulative_addition(elements_array)) // [820, 5]


///// TEST 3 /////
// Inputs
elements_array = [1, 1, 2, 5, 2, 5, 8]

// Outputs
console.log(cumulative_addition(elements_array)) // [24, 7]


///// TEST 4 /////
// Inputs
elements_array = [7, 9, 12, 100, 244]

// Outputs
console.log(cumulative_addition(elements_array)) // [372, 5]