
function cumulative_addition(elements_array) {

    let result = []
    let count = 0;
    for (let i of elements_array) {
        count += i;
    }
    result[0] = count;
    result[1] = elements_array.length;

    return result
}

elements_array = [5, 1, 2, 4, 9, 10, 200];
console.log(cumulative_addition(elements_array));

// --------------------
// Test 1
//     Inputs
//         elements_array = [5, 1, 2, 4, 9, 10, 200]
//     outputs
//         [231,7]
// --------------------
// Test 2
//     Inputs
//         elements_array = [500, 123, 52, 123, 22]
//     outputs
//         [820,5]
// --------------------
// Test 3
//     Inputs
//         elements_array = [1, 1, 2, 5, 2, 5, 8]
//     outputs
//         [24,7]
// --------------------
// Test 4
//     Inputs
//         elements_array = [7, 9, 12, 100, 244]
//     outputs
//         [372,5]
// --------------------