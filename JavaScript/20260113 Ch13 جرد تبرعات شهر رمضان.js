
// Solution 1
function findDonationTargetDay(donations, target) {

    let total = 0;
    let counter = 0;

    for (let i of donations) {

        total += i;
        counter++;

        // Check if the total donations have reached or exceeded the target
        if (total >= target) {
            return counter;
        }
    }
    // If the loop completes and the target is not reached, return -1
    return -1;
}


// Solution 2
function findDonationTargetDay(donations, target) {

    let total = 0

    for (let i = 0; i < donations.length; i++) {
        
        total += donations[i]
        
        // Check if the total donations have reached or exceeded the target
        if (total >= target) {
            return i + 1
        }
    }

    // If the loop completes and the target is not reached, return -1
    return -1
}


///// TEST 1 /////
// Inputs
donations = [50, 25, 30, 20]
target = 100

// Outputs
console.log(findDonationTargetDay(donations, target)) // 3


///// TEST 2 /////
// Inputs
donations = [10, 15, 20]
target = 50

// Outputs
console.log(findDonationTargetDay(donations, target)) // -1


///// TEST 3 /////
// Inputs
donations = [20, 20, 20, 20, 20]
target = 100

// Outputs
console.log(findDonationTargetDay(donations, target)) // 5


///// TEST 4 /////
// Inputs
donations = [100]
target = 100

// Outputs
console.log(findDonationTargetDay(donations, target)) // 1