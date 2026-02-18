
function areaOrPerimeter(length, width) {

    if (length == width) {
        // area
        return length * width;
    } else {
        // perimeter
        return (length + width) * 2;
    }
}


///// TEST 1 /////
// Inputs
length = 6
width = 10

// Outputs
console.log(areaOrPerimeter(length, width)); // 32


///// TEST 2 /////
// Inputs
length = 3
width = 3

// Outputs
console.log(areaOrPerimeter(length, width)); // 9

///// TEST 3 /////
// Inputs
length = 8
width = 8

// Outputs
console.log(areaOrPerimeter(length, width)); // 64


///// TEST 4 /////
// Inputs
length = 5
width = 10

// Outputs
console.log(areaOrPerimeter(length, width)); // 30