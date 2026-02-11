
// Solution 1
function countdown(num) {

    let result = [];
    for (let i = num; i > 0; i -= 3) {

        if ((i % 2) == 0) {
            result.push(i);
        }
    }

    // Reverse to ascending order
    result = result.reverse();

    // Remove num if it appears at the end
    if (result[result.length - 1] == num) {
        result.pop();
    }

    // If result is empty, add 0
    if (result.length == 0) {
        result.push(0);
    }

    return result;
}

// Solution 2
function countdown(num) {

    let result = [];
    for (let i = num; i > 0; i -= 3) {

        if ((i % 2) == 0) {
            result.push(i);
        }
    }

    // Reverse to ascending order
    result = result.reverse();

    // Remove num if it appears at the end
    if (result.at(-1) == num) {
        result.pop();
    }

    // Return the result or [0] if the result is empty
    return result.length > 0 ? result : [0];
}


///// TEST 1 /////
// Inputs
num = 10

// Outputs
console.log(countdown(num)) // [4]


///// TEST 2 /////
// Inputs
num = 23

// Outputs
console.log(countdown(num)) // [2,8,14,20]


///// TEST 3 /////
// Inputs
num = 103

// Outputs
console.log(countdown(num)) // [4,10,16,22,28,34,40,46,52,58,64,70,76,82,88,94,100]


///// TEST 4 /////
// Inputs
num = 15

// Outputs
console.log(countdown(num)) // [6,12]
