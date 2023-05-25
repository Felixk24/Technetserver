/*THIS SCRIPT FILE LET THE USER SET THE THEME OF THIS WEBSITE*/
let changeThemeBtn = document.getElementById("changeThemeBtn");

changeThemeBtn.addEventListener("click", () => {
    checkTheme();
});

function checkTheme() {
    changeThemeBtn = document.getElementById("changeThemeBtn");
    if (changeThemeBtn.className == "changeThemeBtnInformationBlack") {
        changeIntoXMode("white", "changeThemeBtnInformationWhite");
    } else if (changeThemeBtn.className == "changeThemeBtnInformationWhite") {
        changeIntoXMode("black", "changeThemeBtnInformationBlack");
    }
}

function changeIntoXMode(theme, x) {
    changeThemeBtn.style.transitionDuration = "3s";
    changeThemeBtn.style.backgroundColor = theme;
    changeThemeBtn.className = x;
    //setLocalStorageTheme(theme);
}

/*function setLocalStorageTheme(theme) {
    let htmlDom = document.body.innerHTML;
    localStorage.setItem("theme", theme);
    localStorage.setItem("domTheme", htmlDom);
}*/