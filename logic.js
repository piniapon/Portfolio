
var scrollBtns = document.getElementsByClassName("scrollBtn");
var body = document.getElementsByTagName("body");
var scrollDivs = document.getElementsByClassName("btnDiv");

function recolorBtns(color) {
    for (div of scrollDivs) {
        div.style.backgroundColor = color
    }
}


document.addEventListener("DOMContentLoaded", function (event) {


    for (btn of scrollBtns) {

        btn.addEventListener("click", function () {

            if (this.id == "headerBtn") {
                document.body.style.background = "#ddf3f5";
                document.getElementById('greek').classList.add("greek-moved");
                document.getElementById('greek').classList.remove("greek-rotate");
                recolorBtns("#f2aaaa");
            }

            if (this.id == "experienceBtn") {
                document.body.style.background = "#a6dcef"
                document.getElementById('greek').classList.remove("greek-moved")
                document.getElementById('greek').classList.remove("greek-rotate")
                recolorBtns("#e36387")
            }

            if (this.id == "educationBtn") {
                document.body.style.background = "#f2aaaa"
                document.getElementById('greek').classList.add("greek-rotate")
                document.getElementById('greek').classList.remove("greek-moved")
                recolorBtns("#ddf3f5")

            }

            if (this.id == "contactBtn") {
                document.body.style.background = "#e36387"
                document.getElementById('greek').classList.remove("greek-rotate")
                document.getElementById('greek').classList.remove("greek-moved")


            }
        })
    }
});


window.onload = function () {
    var greek = document.getElementById('greek');


    if (greek.classList != "greek-moved") {
        greek.classList.add("greek-moved")
    }

}

