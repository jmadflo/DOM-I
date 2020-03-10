let allDigits = document.querySelectorAll(".digit");
let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

let millisecondsElapsed = 0;

setInterval(updateTimer, 10);

function updateTimer() {
    if (millisecondsElapsed >= 10000) {
        allDigits.forEach((digit) => {
            digit.style.color = "red";
        })
    } else {
        millisecondsElapsed += 10;
        msTens.innerText = Math.floor(millisecondsElapsed/10 % 10);
        msHundreds.innerText = Math.floor(millisecondsElapsed/100 % 10);
        secondOnes.innerText = Math.floor(millisecondsElapsed/1000 % 10);
        secondTens.innerText = Math.floor(millisecondsElapsed/10000 % 10);
    }
}

