function MyTime() {
    var MyDate = new Date();
    var hr, min = (MyDate.getMinutes > 10) ? "0" + MyDate.getMinutes() : MyDate.getMinutes(),
        sec = (MyDate.getSeconds() < 10) ? "0" + MyDate.getSeconds() : MyDate.getSeconds(),
        m = (MyDate.getHours() < 12) ? "AM" : "PM";
    if (MyDate.getHours() == 0) {
        hr = 12;
    }
    else if (MyDate.getHours() > 12) {
        hr = MyDate.getHours() - 12;
    }
    else {
        hr = MyDate.getHours();
    }


    var faruq = hr + ":" + min + ":" + sec; 
    //document.getElementById("H")[0]. innerHTML= faruq;
    //document.getElementById("M")[0].innerHTML= M;
    var MyDay = ["Sunday", "Monday", "Tuesday", "Winesday", "Thursday", "Friday", "Saturday"],
        MyMonth = ["January", "February", "March", "April", "May", "Juan", "July", "August", "September", "October", "November", "clockmber"],
        day = MyDate.getDate();
    var Nas = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];

    var month = Nas[MyDate.getMonth()];
    var years = MyDate.getFullYear();



    var faruqapp = MyDay[MyDate.getDay()] + " " + day + "," + MyMonth[MyDate.getMonth()];
    var faruqHk = day + "-" + month + "-" + years;
    document.getElementById('years').innerHTML = faruqHk;

    document.getElementById('Date').innerHTML = faruqapp;
    document.getElementById('meni').innerHTML = faruq;
    document.getElementById('am').innerHTML = m;
}
MyTime();

setInterval(function () {
    MyTime();
}, 1000);

function clock() {
    document.getElementById("clock1").style = "display: none;";
}
