var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar-fixed")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navbar-fixed")[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
  $('.modal').modal();
});