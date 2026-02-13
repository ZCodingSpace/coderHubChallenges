

// Solution 1
function calculateTotalFastingTime(startTimes, endTimes) {

    let fastingHours = 0;
    let fastingMinutes = 0;

    for (let i = 0; i < startTimes.length; i++) {

        // Extract hours and minutes from the time strings
        let startHours = startTimes[i].substring(0, 2);
        let endHours = endTimes[i].substring(0, 2);
        let startMinutes = startTimes[i].substring(3);
        let endMinutes = endTimes[i].substring(3);

        // Calculate the fasting time in hours and minutes and add them to the total
        fastingHours += (endHours - startHours);
        fastingMinutes += (endMinutes - startMinutes);
    }

    // Adjust fasting hours and minutes if fastingMinutes is negative
    if (fastingMinutes >= 0) {
        return fastingHours + (fastingMinutes / 60)
    }
    else {
        return (fastingHours - 1) + ((60 + fastingMinutes) / 60)
    }
}


// Solution 2
function calculateTotalFastingTime(startTimes, endTimes) {
   
    let totalFastingTime = 0;

    for (let i = 0; i < startTimes.length; i++) {
        
        // Split the time strings into hours and minutes
        let startTime = startTimes[i].split(':');
        let endTime = endTimes[i].split(':');

        // Calculate the fasting time in hours and minutes
        let fastingHours = endTime[0] - startTime[0];
        let fastingMinutes = endTime[1] - startTime[1];

        // Adjust the fasting time if minutes are negative
        if (fastingMinutes < 0) {
            fastingHours--;
            fastingMinutes += 60;
        }

        // Add the fasting time to the total fasting time
        totalFastingTime += fastingHours + (fastingMinutes / 60);
    }

    return totalFastingTime;
}


///// TEST 1 /////
// Inputs
startTimes = ['04:30']
endTimes = ['18:30']

// Outputs
console.log(calculateTotalFastingTime(startTimes, endTimes)); // 14


///// TEST 2 /////
// Inputs
startTimes = ['05:00']
endTimes = ['18:00']

// Outputs
console.log(calculateTotalFastingTime(startTimes, endTimes)); // 13


///// TEST 3 /////
// Inputs
startTimes = ['04:45']
endTimes = ['18:15']

// Outputs
console.log(calculateTotalFastingTime(startTimes, endTimes)); // 13.5 


///// TEST 4 /////
// Inputs
startTimes = ['04:30', '05:00']
endTimes = ['18:30', '18:00']

// Outputs
console.log(calculateTotalFastingTime(startTimes, endTimes)); // 27