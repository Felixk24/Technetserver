/*THIS SCRIPT FILE LET THE USER SET THE THEME OF THIS WEBSITE*/
let changeThemeBtn = document.getElementById("changeThemeBtn");

changeThemeBtn.addEventListener("click", () => {
    checkTheme();
});

function checkTheme() {
    changeThemeBtn = document.getElementById("changeThemeBtn");
    if (changeThemeBtn.innerHTML == "🌜") {
        changeIntoXMode("☀️", "white");
    } else if (changeThemeBtn.innerHTML == "☀️") {
        changeIntoXMode("🌜", "black");
    }
}

function changeIntoXMode(theme, x) {
    changeThemeBtn.style.transitionDuration = "3s";
    changeThemeBtn.innerHTML = theme;
    changeThemeBtn.style.backgroundColor = x;
    //setLocalStorageTheme(theme);
}

/*function setLocalStorageTheme(theme) {
    let htmlDom = document.body.innerHTML;
    localStorage.setItem("theme", theme);
    localStorage.setItem("domTheme", htmlDom);
}*/