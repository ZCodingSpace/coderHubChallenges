
function cone_volume(radius, height) {
  
   // (1/3)πr²h
    return parseFloat(((1/3) * 3.14 * Math.pow(radius, 2) * height).toFixed(2))
}


///// TEST 1 /////
// Inputs
radius = 1.3
height = 5.2

// Outputs
console.log(cone_volume(radius, height)) // 9.2


///// TEST 2 /////
// Inputs
radius = 8.7
height = 7.8

// Outputs
console.log(cone_volume(radius, height)) // 617.93


///// TEST 3 /////
// Inputs
radius = 3.5
height = 5.1

// Outputs
console.log(cone_volume(radius, height)) // 65.39


///// TEST 4 /////
// Inputs
radius = 1
height = 4.2

// Outputs
console.log(cone_volume(radius, height)) // 4.4