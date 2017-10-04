// Main JS

$(function() {
  // $(".c-site-nav-head").headroom();
  // grab an element
  var myElement = document.querySelector(".headroom");
  // construct an instance of Headroom, passing the element
  var headroom = new Headroom(myElement);
  // initialise
  headroom.init();
});
