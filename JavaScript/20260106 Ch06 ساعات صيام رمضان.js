
function calculateTotalFastingTime(startTimes, endTimes) {

    let hours = 0;
    let minutes = 0;

    for (let i = 0; i < startTimes.length; i++) {

        let hoursStart = startTimes[i].substring(0, 2);
        let hoursEnd = endTimes[i].substring(0, 2);
        let minutesStart = startTimes[i].substring(3);
        let minutesEnd = endTimes[i].substring(3);

        hours += (hoursEnd - hoursStart);
        minutes += (minutesEnd - minutesStart);
    }

    if (minutes >= 0) {
        return hours + (minutes / 60)
    }
    else {

        return (hours - 1) + ((60 + minutes) / 60)
    }
}


// --------------------
// Test 1
//     Inputs
//         startTimes = ['04:30']
//         endTimes = ['18:30']
//     outputs
//         14
// --------------------
// Test 2
//     Inputs
//         startTimes = ['05:00']
//         endTimes = ['18:00']
//     outputs
//         13
// --------------------
// Test 3
//     Inputs
//         startTimes = ['04:45']
//         endTimes = ['18:15']
//     outputs
//         13.5
// --------------------
// Test 4
//     Inputs
//         startTimes = ['04:30', '05:00']
//         endTimes = ['18:30', '18:00']
//     outputs
//         27
// --------------------