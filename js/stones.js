let body = document.body;
body.addEventListener("click", loveStones);

function loveStones() {
    body.removeEventListener("click", loveStones);
    let audio = new Audio("js/cool.mp3");
    audio.loop = false;
    audio.play();
}