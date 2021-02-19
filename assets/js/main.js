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

      let userCab = $(".user");
      userCab.click(function(){
        $('.user ul').toggleClass('d-block');
      })
      
})

let stickyHeader = document.querySelector("header");
    let sticky = header.offsetTop;
    console.log(header.offsetTop);
    console.log(window.pageYOffset);
    function makeStickyNav() {
        if (window.pageYOffset > sticky) {
            stickyHeader.classList.add("sticky-top");

        } else {
            stickyHeader.classList.remove("sticky-top");
        }
    }
    $(window).scroll(function () {
        makeStickyNav();
    });


  
