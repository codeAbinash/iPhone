function checkBatteryTime(){
    navigator.getBattery().then(function(battery) {
    var batterylevel = battery.level * 100;
    document.querySelector('.per').innerHTML = batterylevel + "%";
    document.querySelector('.available').style.width = "calc(" + batterylevel + "%  - 2px)";
    
    if ( batterylevel <= 20 &&  batterylevel > 15) {
        document.querySelector('.available').style.background="orange";  
    }
    if(batterylevel <= 15){
        document.querySelector('.available').style.background="red";  
    }
    if(battery.charging){
        document.querySelector('.available').style.background="lime";  
    }
    if (!battery.charging && batterylevel>20) {
        document.querySelector('.available').style.background="white";   
    }
});

    setTimeout(checkBatteryTime,1000);
}
checkBatteryTime();


function checkTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var day = returnFullDay(now.getDay());
    var date = now.getDate();
    var month = returnFullMonth(now.getMonth());  
    document.getElementById("time").innerHTML = hour + ":" + chechZero(minute);
    document.getElementById('date').innerHTML = day + ", " + date + " " + month;
    setTimeout(checkTime,1000);

}

checkTime();



function chechZero(num){if (num < 10) {return "0" + num ;}else{return num;}}
function returnFullDay(num) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[num];
}
function  returnFullMonth(num) {
    var months = ['January' ,'February' ,'March','April','May', 'June','July','August','September', 'October','November','December'];
    return months[num];
}

var display = -1;
function home() {
    display*= -1;

    if(display == 1){
    document.querySelector('.disp').style.filter="brightness(1)";
    }
    if(display == -1){
        document.querySelector('.disp').style.filter="brightness(0)";
    }
}

var darkvar = 1;

function dl() {
    darkvar*= -1;
    if (darkvar == 1) {
        document.body.style.background = "white";
        document.getElementById("disp").style.background = "url('wallpaperl.jpg')";
        document.getElementById("disp").style.backgroundSize = 'cover';
    }
    if(darkvar == -1){
        document.body.style.background = "black";
        document.getElementById("disp").style.background = "url('wallpaperd.jpg')";
        document.getElementById("disp").style.backgroundSize = 'cover';

    }
}