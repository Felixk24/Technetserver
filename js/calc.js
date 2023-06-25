let gamerNumber = document.getElementById("gamerNumber");
let showgamerNumber = document.getElementById("showgamerNumber");

gamerNumber.addEventListener("input", () => {
    showgamerNumber.innerHTML = gamerNumber.value + " Spieler";
});

let ramNumber = document.getElementById("ramNumber");
let showramNumber = document.getElementById("showramNumber");

ramNumber.addEventListener("input", () => {
    showramNumber.innerHTML = ramNumber.value + " GB";
});

let calculateGamingPriceBtn = document.getElementById("calculateGamingPriceBtn");
let gamingPrice = 0;
let showGamingPrice = document.getElementById("showGamingPrice");

calculateGamingPriceBtn.addEventListener("click", checkToCalculatePrice);

function checkToCalculatePrice() {
    let chooseGame = document.getElementById("chooseGame");
    let chooseRunTime = document.getElementById("chooseRunTime");
    if (!((chooseGame.value === "--Spiel wählen--") || (chooseRunTime.value === "--Serverlaufzeit--"))) {
        calcualteServerRunTime(chooseRunTime);
        calcualteGamerNumber();
        calculateRamNumber();
        gamingPrice = String(gamingPrice.toFixed(2)).replace(".", ",");
        showGamingPrice.style.color = "black";
        showGamingPrice.style.fontWeight = "normal"
        showGamingPrice.innerHTML = `Dein individueller Server kostet: <b>${gamingPrice}&euro;</b>`;
    } else {
        showGamingPrice.innerHTML = "Bitte Spiel und/oder Serverlaufzeit wählen";
        showGamingPrice.style.color = "red";
        showGamingPrice.style.fontWeight = "bold";
    }
}

function calcualteServerRunTime(runTime) {
    switch(runTime.value) {
        case "7d":
            gamingPrice = 5;
            break;
        case "14d":
            gamingPrice = 9;
            break;
        case "1mon":
            gamingPrice = 16.5;
            break;
        case "3mon":
            gamingPrice =  45;
            break;
        case "6mon":
            gamingPrice = 80;
            break;
        case "12mon":
            gamingPrice = 150;
    }
    return gamingPrice;
}

function calcualteGamerNumber() {
    let gamerNumber = document.getElementById("gamerNumber");
    gamerNumber = Number(gamerNumber.value);
    if (gamerNumber <= 50) {
        gamerNumber = gamerNumber * 12.5;
    } else if (51 <= gamerNumber <= 100) {
        gamerNumber = (gamerNumber - 50) * 10 + 50 * 12.5;
    }
    gamingPrice += gamerNumber;
    return gamingPrice;
}

function calculateRamNumber() {
    let ramNumber = document.getElementById("ramNumber");
    ramNumber = 3.5 + (Number(ramNumber.value) * 0.8);
    gamingPrice += ramNumber;
    return gamingPrice;
}