
function calculateSacrificeProfit(buyPrices, sellPrices) {

    let totalProfit = 0;

    for (let i = 0; i < buyPrices.length; i++) {
        totalProfit += sellPrices[i] - buyPrices[i];
    }

    return totalProfit;
}


///// TEST 1 /////
// Inputs
buyPrices = [100]
sellPrices = [150]

// Outputs
console.log(calculateSacrificeProfit(buyPrices, sellPrices)) // 50


///// TEST 2 /////
// Inputs
buyPrices = [100, 200]
sellPrices = [150, 250]

// Outputs
console.log(calculateSacrificeProfit(buyPrices, sellPrices)) // 100


///// TEST 3 /////
// Inputs
buyPrices = [120, 80, 100]
sellPrices = [130, 90, 110]

// Outputs
console.log(calculateSacrificeProfit(buyPrices, sellPrices)) // 30


///// TEST 4 /////
// Inputs
buyPrices = [200, 200, 200]
sellPrices = [200, 200, 200]

// Outputs
console.log(calculateSacrificeProfit(buyPrices, sellPrices)) // 0
