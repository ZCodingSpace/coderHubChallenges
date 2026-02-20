
function isEmpty(strParam) {

    return (strParam.length == 0 || strParam.trim() == "");
}


///// TEST 1 /////
// Inputs
strParam = 'Gift'

// Outputs
console.log(isEmpty(strParam)); // false


///// TEST 2 /////
// Inputs
strParam = 'www'

// Outputs
console.log(isEmpty(strParam)); // false


///// TEST 3 /////
// Inputs
strParam = ''

// Outputs
console.log(isEmpty(strParam)); // true


///// TEST 4 /////
// Inputs
strParam = 'hello'

// Outputs
console.log(isEmpty(strParam)); // false
