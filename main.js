// This function gets the current day of the week
function getCurrentDay() 
{
    const daysOfWeek = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    const currentDate = new Date();
    return daysOfWeek[currentDate.getUTCDay()];
}

// This function updates the current UTC time in milliseconds

function updateUTCTime() 
{
    const currentTimeElement = document.getElementById("currentTime");
    currentTimeElement.textContent = Date.now();
}
    
// Function updates the content with the current day and UTC time initially

document.getElementById("currentDay").textContent = getCurrentDay();
updateUTCTime();

// Update the UTC time every second

setInterval(updateUTCTime, 1000);