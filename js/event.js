var menu_advertiser = document.getElementsByClassName("menu_advertiser")[0];
var box_advertiser = document.getElementsByClassName("box_advertiser")[0];
var menu_about = document.getElementsByClassName("menu_about")[0];
var box_about = document.getElementsByClassName("box_about")[0];


// SHOW/HIDE
menu_advertiser.addEventListener('click', function () {
    box_advertiser.classList.toggle("disbip")
});
menu_about.addEventListener('click', function () {
    box_about.classList.toggle("disbip")
});

