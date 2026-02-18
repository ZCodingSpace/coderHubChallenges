
// Solution 1
function getBiggestShared(a, b) {

    let biggestShared = 0

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {

            if (a[i] == b[j] && a[i] > biggestShared) {
                biggestShared = a[i]
            }
        }
    }
    return biggestShared
}


// Solution 2
function getBiggestShared(a, b) {

    // Create a Set from array b for O(1) lookups
    const setB = new Set(b);
    let biggestShared = 0;

    for (let value of a) {
        if (setB.has(value) && value > biggestShared) {
            biggestShared = value;
        }
    }
    return biggestShared;
}


///// TEST 1 /////
// Inputs
a = [1, 2, 4, 5]
b = [3, 4, 7, 11]

// Outputs
console.log(getBiggestShared(a, b)) // 4


///// TEST 2 /////
// Inputs
a = [0]
b = [0]

// Outputs
console.log(getBiggestShared(a, b)) // 0


///// TEST 3 /////
// Inputs
a = [90, 95]
b = [90, 95]

// Outputs
console.log(getBiggestShared(a, b)) // 95


///// TEST 4 /////
// Inputs
a = [10, 2, 3, 12, 3]
b = [54, 12, 33, 1]

// Outputs
console.log(getBiggestShared(a, b)) // 12
