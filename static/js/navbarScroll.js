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
       } else {
          $('.navbar-default').css('background-color', 'transparent');
          $(".navbar-default").css('border-color', 'transparent');
       }
   });
  }
});
