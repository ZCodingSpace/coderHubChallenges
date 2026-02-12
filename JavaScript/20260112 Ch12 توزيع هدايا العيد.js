
function distributeGifts(familySizes, totalGifts) {

    let giftsPerFamily = [];

    for (let i = 0; i < familySizes.length; i++) {

        // If the family size is 0, we can't divide by zero, so we just give them all the gifts.
        if (familySizes[i] == 0) {
            giftsPerFamily.push(totalGifts[i]);
        } else {
            giftsPerFamily.push(totalGifts[i] / familySizes[i]);
        }
    }

    return giftsPerFamily;
}


///// TEST 1 /////
// Inputs
familySizes = [4]
totalGifts = [20]

// Outputs
console.log(distributeGifts(familySizes, totalGifts)); // [5]

///// TEST 2 /////
// Inputs
familySizes = [5]
totalGifts = [25]

// Outputs
console.log(distributeGifts(familySizes, totalGifts)); // [5]


///// TEST 3 /////
// Inputs
familySizes = [4, 5]
totalGifts = [20, 25]

// Outputs
console.log(distributeGifts(familySizes, totalGifts)); // [5, 5]


///// TEST 4 /////
// Inputs
familySizes = [2, 3]
totalGifts = [8, 9]

// Outputs
console.log(distributeGifts(familySizes, totalGifts)); // [4, 3]