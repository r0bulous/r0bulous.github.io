// When the user scrolls down 150px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("title").style.opacity = "0";

    } else {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("title").style.opacity = "1";
    }
}
