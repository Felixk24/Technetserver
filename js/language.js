/*THIS FILE INCLUDES THE CODE TO LET THE USER SELECT THE LANGUAGE*/

let language = document.getElementById("language");
language.addEventListener("click", () =>{
    selectLanguage();
});

function selectLanguage() {
    language = document.getElementById("language");
    if (language.children[0].title === "EN") {
        translateIntoGerman(language);
    } else if (language.children[0].title === "DE") {
        translateIntoEnglish();
    }
}

function translateIntoGerman(lang) {
    alert("Deutsch");
    const flag = new flag("img/german.png");
    let title = document.getElementById(lang.id.children[0]).title;
    setFlag(flag, title)
    setLocalStorageLanguage("DE");
}

function translateIntoEnglish() {
    alert("Englisch");
    const flag = new flag("img/english.png");
    let title = document.getElementById(lang.id.children[0]).title;
    setFlag(flag, title);
    setLocalStorageLanguage("EN");
}

function setFlag(flag, title) {
    let lang = document.getElementById("language");
    lang.children[0].removeChild();
    let img = document.createElement("img");
    img.title = title;
    img.src = flag;
    lang.appendChild(img); 
}

function setLocalStorageLanguage(language) {
    //localStorage.setItem("language", language);
}
