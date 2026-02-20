
// Solution 1
function gravity_flip(columns) {

    // Bubble Sort
    for (let i = 0; i < columns.length - 1; i++) {
        for (let j = 0; j < columns.length - 1 - i; j++){

            if (columns[j] > columns[j+1]){
                 
                 let temp = columns[j];
                 columns[j] = columns[j+1];
                 columns[j+1] = temp;
            }
        }
    }
    return columns;
}


// Solution 2
function gravity_flip(columns) {

    // Insertion Sort Style
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < i; j++){

            if (columns[i] < columns[j]){

                let temp = columns[i];
                columns[i] = columns[j];
                columns[j] = temp
            }
        }
    }
    return columns
}


// Solution 3
function gravity_flip(columns) {
    return columns.sort((a, b) => a - b);
}


///// TEST 1 /////
// Inputs
columns = [3, 2, 1, 2]

// Outputs
console.log(gravity_flip(columns)) // [1, 2, 2, 3]


///// TEST 2 /////
// Inputs
columns = [2, 3, 8]

// Outputs
console.log(gravity_flip(columns)) // [2, 3, 8]


///// TEST 3 /////
// Inputs
columns = [1, 1, 1, 1]

// Outputs
console.log(gravity_flip(columns)) // [1, 1, 1, 1]


///// TEST 4 /////
// Inputs
columns = [4, 5, 6, 3, 2]

// Outputs
console.log(gravity_flip(columns)) // [2, 3, 4, 5, 6]
