window.onload = function() {
    // open the default tab
    document.getElementById("tabHomeButton").click();
}

function fnOpenTab(tabName) {
    let tabContent = document.getElementsByClassName("tabcontent");
    for(let i=0; i<tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    let tabLinks = document.getElementsByClassName("tabLinks");
    for (let i=0; i<tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
}
