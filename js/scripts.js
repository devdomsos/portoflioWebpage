// I want to add class of filter blur 10 px to .showcase class when mouse over on .content

function blurrImage () {
    document.querySelector("#mainImage").classList.add("showcaseBlur");
    document.getElementById("#mainImage").classList.add("outline");

}

function removeBlurrImage () {
    document.querySelector("#mainImage").classList.remove("showcaseBlur");
    document.getElementById("#mainImage").classList.remove("outline");

}

function blurLogo () {
    document.querySelector("showcase").classList.remove("showcaseBlur");
    document.querySelector("content").classList.add("logoBlur");
}