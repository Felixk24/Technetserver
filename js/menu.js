let offersNav = document.getElementById("offersNav");
let showOffersMenu = document.getElementById("showOffersMenu");
offersNav.addEventListener("mouseover", showOffersNavFunc);
offersNav.addEventListener("mouseleave", removeOffersNavFunc);

function showOffersNavFunc() {
    showOffersMenu.style.display = "block";
}

function removeOffersNavFunc() {
    showOffersMenu.style.display = "none";
}