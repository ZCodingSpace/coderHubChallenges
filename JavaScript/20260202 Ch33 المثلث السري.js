
// Solution 1
function generatePascalsTriangle(numRows) {

    let arr = [];
    let result = [];

    for (let row = 0; row < numRows; row++) {

        arr[row] = [];

        for (let column = 0; column <= row; column++) {

            // The first and last element of each row is 1
            if (column == 0 || column == row) {
                arr[row][column] = 1;
            }
            else {
                // Each element is the sum of the two elements directly above it
                arr[row][column] = arr[row - 1][column - 1] + arr[row - 1][column]
            }
        }
        result = result.concat(arr[row]);
    }
    return result;
}


// Solution 2
function generatePascalsTriangle(numRows) {

    let result = [];
    let latestRow = [];

    for (let i = 0; i < numRows; i++) {

        let currentRow = [];

        // The first and last element of each row is 1
        [currentRow[0], currentRow[i]] = [1, 1]

        for (let j = 1; j <= i - 1; j++) {

            // Each element is the sum of the two elements directly above it
            currentRow[j] = latestRow[j] + latestRow[j - 1];
        }

        result = result.concat(currentRow);
        latestRow = currentRow;
    }
    return result;
}


// Solution 3
function generatePascalsTriangle(numRows) {

    let result = [];
    let latestRow = [];

    for (let i = 0; i < numRows; i++) {

        let row = [];

        for (let j = 0; j <= i; j++) {

            // The first and last element of each row is 1
            if (j === 0 || j === i) {
                row[j] = 1;

            } else {
                // Each element is the sum of the two elements directly above it
                row[j] = latestRow[j - 1] + latestRow[j];
            }
        }
        result.push(...row);
        latestRow = row;
    }
    return result;
}


///// TEST 1 /////
// Inputs
numRows = 5

// Outputs
console.log(generatePascalsTriangle(numRows)); // [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1]


///// TEST 2 /////
// Inputs
numRows = 1

// Outputs
console.log(generatePascalsTriangle(numRows)); // [1]


///// TEST 3 /////
// Inputs
numRows = 2

// Outputs
console.log(generatePascalsTriangle(numRows)); // [1,1,1]


///// TEST 4 /////
// Inputs
numRows = 3

// Outputs
console.log(generatePascalsTriangle(numRows)); // [1,1,1,1,2,1]