
function sumOdd(arr) {

    let sum = 0

    for (let i of arr) {
        if ((i % 2) != 0) {
            sum += i
        }
    }
    return sum
}

///// TEST 1 /////
// Inputs
arr = [2, 9, 5, 4, 0]

// Outputs
console.log(sumOdd(arr)) // 14


///// TEST 2 /////
// Inputs
arr = [3, 12, 6]

// Outputs
console.log(sumOdd(arr)) // 3


///// TEST 3 /////
// Inputs
arr = [1, 8, 5, 44]

// Outputs
console.log(sumOdd(arr)) // 6


///// TEST 4 /////
// Inputs
arr = [1, 7, 1]

// Outputs
console.log(sumOdd(arr)) // 9