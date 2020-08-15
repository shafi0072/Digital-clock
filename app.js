
function clock(){
let fullDate = new Date();
let hour = fullDate.getHours()%12;
let mins = fullDate.getMinutes();
let sec = fullDate.getSeconds();

if(hour < 10){
  hour = "0" + hour;  
}
if(mins < 10){
    mins = "0" + mins;  
  }
  if(sec < 10){
    sec = "0" + sec;  
  }

document.getElementById('hour').innerHTML = hour + ":";
document.getElementById('minute').innerHTML = mins + ":";
document.getElementById('second').innerHTML = sec;
}
setInterval(clock, 1000);
