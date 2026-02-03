
function countdown(num) {

    let result = [];
    for (let i = num; i > 0; i = i - 3) {

        if ((i % 2) == 0) {
            result.push(i);
        }
    }

    result = result.reverse();

    if (result[result.length - 1] == num) {
        result.pop();
    }

    if (result.length == 0) {
        result.push(0);
    }

    return result;
}


// --------------------
// Test 1
//     Inputs
//         num = 10
//     outputs
//         [4]
// --------------------
// Test 2
//     Inputs
//         num = 23
//     outputs
//         [2,8,14,20]
// --------------------
// Test 3
//     Inputs
//         num = 103
//     outputs
//         [4,10,16,22,28,34,40,46,52,58,64,70,76,82,88,94,100]
// --------------------
// Test 4
//     Inputs
//         num = 15
//     outputs
//         [6,12]
// --------------------