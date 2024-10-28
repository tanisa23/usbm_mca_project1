function  updateClock(){
const clock =document.getElemenById("clock");

const now= new Date();

let hours= now.getHours();
let minutes= now.getMinutes();
let seconds= now.getSeconds();

clock.textContent= `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock,1000);