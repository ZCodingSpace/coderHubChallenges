
// Solution 1
function hashtag_it(my_array) {

    let output = "";

    for (let i of my_array) {
        output += `#${i} `;
    }
    return output.trim();
}


// Solution 2
function hashtag_it(my_array) {

    let output = [];

    for (let i = 0; i < my_array.length; i++) {
        output.push("#" + my_array[i]);
    }
    return output.join(" ");
}


///// TEST 1 /////
// Inputs
my_array = ['stay_home', 'coronavirus', 'Saudi_Arabia']

// Outputs
console.log(hashtag_it(my_array)); // '#stay_home #coronavirus #Saudi_Arabia'


///// TEST 2 /////
// Inputs
my_array = ['Vibes', 'SAFCSP', 'entrepreneur']

// Outputs
console.log(hashtag_it(my_array)); // '#Vibes #SAFCSP #entrepreneur'


///// TEST 3 /////
// Inputs
my_array = ['SAFCSP', 'SAUDI_ARABIA', 'Riyadh']

// Outputs
console.log(hashtag_it(my_array)); // '#SAFCSP #SAUDI_ARABIA #Riyadh'


///// TEST 4 /////
// Inputs
my_array = ['Programming', 'Code']

// Outputs
console.log(hashtag_it(my_array)); // '#Programming #Code'
