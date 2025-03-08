function timeConversion(s){
    let period = s.slice(-2) // getting last 2 values
    let timeParts = s.slice(0,-2).split(":") // getting 0th index value to losing last two values and spliting by :
    let hours = parseInt(timeParts[0]);

    if(period == "AM"){
        if(hours == 12){
            timeParts[0] = "00";
        }else{
            timeParts[0] = String(hours).padStart(2, "0")
        }
    }else{
        if(hours != 12){
            timeParts[0] = String(hours + 12)
        }
    }
    return timeParts.join(":")
}
console.log(timeConversion("07:22:30PM"));
console.log(timeConversion("12:22:30AM"));
console.log(timeConversion("12:22:30PM"));