
function calculateSacrificeProfit(buyPrices, sellPrices) {

    let sum = 0;
    for (let i = 0; i < buyPrices.length; i++) {

        sum += (sellPrices[i] - buyPrices[i])
    }
    return sum;

}
