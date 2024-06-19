// Returns true if it's day in SF, false if it's night
function isDayInSF() {

    const times = {
        "January": {
          "averageSunrise": [7, 20],
          "averageSunset": [17, 25]
        },
        "February": {
          "averageSunrise": [7, 5],
          "averageSunset": [17, 55]
        },
        "March": {
          "averageSunrise": [6, 40],
          "averageSunset": [19, 15]
        },
        "April": {
          "averageSunrise": [6, 10],
          "averageSunset": [19, 45]
        },
        "May": {
          "averageSunrise": [5, 50],
          "averageSunset": [20, 10]
        },
        "June": {
          "averageSunrise": [5, 45],
          "averageSunset": [20, 35]
        },
        "July": {
          "averageSunrise": [6, 0],
          "averageSunset": [20, 35]
        },
        "August": {
          "averageSunrise": [6, 20],
          "averageSunset": [20, 0]
        },
        "September": {
          "averageSunrise": [6, 45],
          "averageSunset": [19, 15]
        },
        "October": {
          "averageSunrise": [7, 10],
          "averageSunset": [18, 30]
        },
        "November": {
          "averageSunrise": [6, 50],
          "averageSunset": [17, 0]
        },
        "December": {
          "averageSunrise": [7, 15],
          "averageSunset": [16, 55]
        }
    };
      
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    

    const sfTime = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    const sfDate = new Date(sfTime);

    const month = monthNames[sfDate.getMonth()];
    const hours = sfDate.getHours();
    const minutes = sfDate.getMinutes();

    const sunrise = times[month].averageSunrise;
    const sunset = times[month].averageSunset;

    if (hours > sunrise[0]) {
        if (hours < sunset[0]) {
            return true;
        } else if (hours == sunset[0]) {
            if (minutes < sunset[1]) return true;
        }
    }
    else if (hours == sunrise[0]) {
        if (minutes >= sunrise[1]) return true;
    }
    return false;

}   

export default function getSFEmoji() {
    if (isDayInSF()) return '🌁';
    return '🌉';
}
