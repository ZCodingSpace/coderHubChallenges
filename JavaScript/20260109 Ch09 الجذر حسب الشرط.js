
// Solution 1
function root_check(sqr, num) {

    return Math.sqrt(sqr) == num ? num : 0;
}


// Solution 2
function root_check(sqr, num) {

    if (Math.sqrt(sqr) == num) {
        return num
    }
    else {
        return 0;
    }
}


// Solution 3
function root_check(sqr, num) {

    if (sqr == (num * num)) {
        return num;
    } else {
        return 0;
    }
}

///// TEST 1 /////
// Inputs
sqr = 25
num = 5

// Outputs
console.log(root_check(sqr, num)); // 5


///// TEST 2 /////
// Inputs
sqr = 4
num = 2

// Outputs
console.log(root_check(sqr, num)); // 2


///// TEST 3 /////
// Inputs
sqr = 49
num = 8

// Outputs
console.log(root_check(sqr, num)); // 0


///// TEST 4 /////
// Inputs
sqr = 64
num = 8

// Outputs
console.log(root_check(sqr, num)); // 8