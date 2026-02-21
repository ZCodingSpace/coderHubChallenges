
// Solution 1
function reverse_case(strParam) {
    
    let result = ''
    
    for (let i = 0; i < strParam.length; i++) {
        
        const char = strParam[i]
        
        if (char === char.toUpperCase()) {
            result += char.toLowerCase()
        
        } else {
            result += char.toUpperCase()
        }
    }
    return result;
}


// Solution 2
function reverse_case(strParam) {
   
    let result = '';

    for (const char of strParam) {

        result += char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase();
    }
    return result;
}


///// TEST 1 /////
// Inputs
strParam = 'TeSt'

// Outputs
console.log(reverse_case(strParam)) // tEsT


///// TEST 2 /////
// Inputs
strParam = 'Ok'

// Outputs
console.log(reverse_case(strParam)) // oK


///// TEST 3 /////
// Inputs
strParam = 'CaT'

// Outputs
console.log(reverse_case(strParam)) // cAt


///// TEST 4 /////
// Inputs
strParam = 'Five'

// Outputs
console.log(reverse_case(strParam)) // fIVE