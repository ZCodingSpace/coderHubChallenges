
function less_or_more_than_zero(number) {

    if (number > 0) {
        return "Greater than zero"

    } else if (number < 0) {
        return "Less than zero"

    } else {
        return "Equal to zero"
    }
}


///// TEST 1 /////
// Inputs
number = 10

// Outputs
console.log(less_or_more_than_zero(number)); // 'Greater than zero'


///// TEST 2 /////
// Inputs
number = -7

// Outputs
console.log(less_or_more_than_zero(number)); // 'Less than zero'


///// TEST 3 /////
// Inputs
number = 0

// Outputs
console.log(less_or_more_than_zero(number)); // 'Equal to zero'


///// TEST 4 /////
// Inputs
number = -56

// Outputs
console.log(less_or_more_than_zero(number)); // 'Less than zero'