//MAIN SCRIPT FILE

(function checkLocalStorage() {
    checkLanguage(document.body);
    checkTheme(document.body);
})()

function checkLanguage(dom) {
    let localLanguage = localStorage.getItem("language");
    if (localLanguage === "EN") {
        dom.innerHTML = localStorage.getItem("domLanguage");
    }
}

function checkTheme(dom) {
    let localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
        dom.innerHTML = localStorage.getItem("domTheme");
    }
}

//Danger: Language still doesn´t work for localstorage