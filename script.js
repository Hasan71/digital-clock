function myTime () {
    let myDate = new Date();
    let hour, minute = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
        second = (myDate.getSeconds() < 10) ? "0" + myDate.getUTCSeconds() : myDate.getSeconds(),
        M = (myDate.getHours() >= 12) ? "PM" : "AM";

        if (myDate.getHours() == 0){
            hour = 12;
        } else if(myDate.getHours() > 12) {
            hour = myDate.getHours() - 12;
        }
        else{
            hour = myDate,getHours();
        }

        let currentTime = hour + ":" + minute + ":" + second;

        document.getElementsByClassName('Hour')[0].innerHTML = currentTime;
        document.getElementsByClassName('Minute')[0].innerHTML = M;

        let myDay = ["Sunday", "Monday", "Tuseday", "Thursday", "Wednesday", "Friday", "Saturday"];
        let myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let day = myDate.getDate();
        
        let currentDate = myDay[myDate.getDay()] + " , " + myMonth[myDate.getMonth()] + day;
        
        document.getElementsByClassName('date')[0].innerHTML = currentDate;
}

myTime();
setInterval(function(){
    myTime();
}, 1000);


