$(document).ready(function(){
    $('.brands').click(function(){
        $('#brands').toggleClass('d-block');
    })
    $('.buy').click(function(){
        $('.bottom').addClass("clicked");
      });
      
      $('.remove').click(function(){
        $('.bottom').removeClass("clicked");
      });
})
