
function getPrimesBetween(a, b) {

    const primes = []

    for (let i = a; i <= b; i++) {

        let isPrime = true

        if (i < 2) {
            isPrime = false

        } else {

            // Check if i is divisible by any number from 2 to the square root of i
            // Divisors always come in pairs
            // If one divisor is above the square root, its partner is below the square root
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false
                    break
                }
            }
        }
        if (isPrime) {
            primes.push(i)
        }
    }
    return primes
}


///// TEST 1 /////
// Inputs
a = 1
b = 10

// Outputs
console.log(getPrimesBetween(a, b)) // [2, 3, 5, 7]


///// TEST 2 /////
// Inputs
a = 20
b = 50

// Outputs
console.log(getPrimesBetween(a, b)) // [23, 29, 31, 37, 41, 43, 47]


///// TEST 3 /////
// Inputs
a = 90
b = 100

// Outputs
console.log(getPrimesBetween(a, b)) // [97]


///// TEST 4 /////
// Inputs
a = 53
b = 67

// Outputs
console.log(getPrimesBetween(a, b)) // [53, 59, 61, 67]