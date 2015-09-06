// Change background color when scroll navbar
$(document).ready(function(){
 var scroll_start = 0;
 var startchange = $('#section');
 var offset = startchange.offset();
  if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', 'black');
          $(".navbar-default").css('border-color', 'black');
          $(".in").css('background-color', 'black');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
          $(".navbar-default").css('border-color', 'transparent');
          $(".in").css('background-color', 'transparent');
       }
   });
  }
  // change background color of toggled navbar when click on button
  $('.navbar-toggle').click( function() {
    $(".in").css('background-color', 'black');
  } );
});
