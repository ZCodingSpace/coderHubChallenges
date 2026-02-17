
// Solution 1
function find_circle_area(radius) {
    return parseFloat((3.14 * Math.pow(radius, 2)).toFixed(4));
}


// Solution 2
function find_circle_area(radius) {
    return parseFloat((3.14 * radius * radius).toFixed(4));
}


///// TEST 1 /////
// Inputs
radius = 5.4

// Outputs
console.log(find_circle_area(radius)); // 91.5624


///// TEST 2 /////
// Inputs
radius = 7

// Outputs
console.log(find_circle_area(radius)); // 153.86


///// TEST 3 /////
// Inputs
radius = 1

// Outputs
console.log(find_circle_area(radius)); // 3.14


///// TEST 4 /////
// Inputs
radius = 10.2

// Outputs
console.log(find_circle_area(radius)); // 326.6856
