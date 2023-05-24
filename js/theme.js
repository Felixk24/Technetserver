/*THIS SCRIPT FILE LET THE USER SET THE THEME OF THIS WEBSITE*/
let changeTheme = document.getElementById("changeTheme");

changeTheme.addEventListener("click", () => {
    checkTheme();
});

function checkTheme() {
    changeTheme = document.getElementById("changeTheme");
    if (changeTheme.innerHTML === "☀") {
        changeIntoXMode("🌑", "dark");
    } else if (changeTheme.innerHTML === "🌑") {
        changeIntoXMode("☀", "light");
    }
}

function changeIntoXMode(symbol, theme) {
    changeTheme.innerHTML = symbol;
    setLocalStorageTheme(theme);
}

function setLocalStorageTheme(theme) {
    let htmlDom = document.body.innerHTML;
    localStorage.setItem("theme", theme);
    localStorage.setItem("domTheme", htmlDom);
}