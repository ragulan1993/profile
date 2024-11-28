//Author : Kulasingham Ragulan
//Index No : 20220768


// Checking for a scroll event
window.onscroll = function() {
    scrollFunction();
}


//function to handle scroll
function scrollFunction(){
    var button = document.getElementById("goToTopButton");
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}

//function to scroll top
function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


document.getElementById("goToTopButton").addEventListener("click", goToTop);