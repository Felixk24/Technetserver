/*THIS FILE INCLUDES THE CODE TO LET THE USER SELECT THE LANGUAGE*/

let selectLang = document.getElementById("selectLang");
selectLang.addEventListener("change", () =>{
    selectLanguage();
});

function selectLanguage() {
    let selected = document.getElementById("selectLang").value;
    if (selected === "DE") {
        translateIntoGerman();
    }
    if (selected === "EN") {
        translateIntoEnglish();
    }
}

function translateIntoGerman() {
    alert("Deutsch");
}

function translateIntoEnglish() {
    alert("Englisch");
    //setLocalStorageLanguage("EN");
}

/*function setLocalStorageLanguage(language) {
    let htmlDom = document.body.innerHTML;
    localStorage.setItem("language", language);
    localStorage.setItem("domLanguage", htmlDom);
}*/