function openContent(evt, titleContent) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("", "");
    }
    document.getElementById(titleContent).style.display = "block";
    evt.currentTarget.firstElementChild.className += "";
}
