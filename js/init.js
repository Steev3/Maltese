(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

$(document).ready(function(){
    $("#menu-button").click(function(){
        $("#menu-panel").slideToggle("Fast");
    });
});