

// Solution 1
function findSquares(n) {

    let i = 0;

    while (true) {

        let num1 = i * i;
        let num2 = (i + 1) * (i + 1);

        if ((num2 - num1) == n) {
            return num2 + "-" + num1
        }
        i++;
    }
}


// Solution 2
function findSquares(n) {

    let a = (n + 1) / 2;
    let b = (n - 1) / 2;

    return `${a * a}-${b * b}`;
}


///// TEST 1 /////
// Inputs
n = 9

// Outputs
console.log(findSquares(n)) // '25-16'


///// TEST 2 /////
// Inputs
n = 5

// Outputs
console.log(findSquares(n)) // '9-4'


///// TEST 3 /////
// Inputs
n = 7

// Outputs
console.log(findSquares(n)) // '16-9'


///// TEST 4 /////
// Inputs
n = 1

// Outputs
console.log(findSquares(n)) // '1-0'