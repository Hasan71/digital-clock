function myTime () {
    let myDate = new Date();
    let hour, minute = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
        second = (myDate.getSeconds() < 10) ? "0" + myDate.getUTCSeconds() : myDate.getSeconds(),
        M = (myDate.getHours() >= 12) ? "PM" : "AM";  
}


