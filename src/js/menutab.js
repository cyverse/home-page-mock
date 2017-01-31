
function openTab(evt, tabName) {
    //Declare Variables
    var i, tabContent, tabLinks;

    //Grab elements with "tabContent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    //

    //Grab elements with "tabLinks" and remove "active" class
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    //Show current tab, and add "active" class to the link that opened the tab

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}