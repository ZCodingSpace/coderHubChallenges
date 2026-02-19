
// Solution 1
function input_type(value) {

    let cleanData = value.trim();

    return isNaN(cleanData) ? 'string' : Number.isInteger(Number(cleanData)) ? 'integer' : 'double';

}


// Solution 2
function input_type(value) {

    let cleanData = value.trim();

    if (isNaN(cleanData)) {
        return 'string';

    } else if (Number.isInteger(Number(cleanData))) {
        return 'integer';

    } else {
        return 'double';
    }
}


///// TEST 1 /////
// Inputs
value = 'hello'

// Outputs
console.log(input_type(value)); // 'string'


///// TEST 2 /////
// Inputs
value = '12'

// Outputs
console.log(input_type(value)); // 'integer'


///// TEST 3 /////
// Inputs
value = '21.21'

// Outputs
console.log(input_type(value)); // 'double'


///// TEST 4 /////
// Inputs
value = '1'

// Outputs
console.log(input_type(value)); // 'integer'
