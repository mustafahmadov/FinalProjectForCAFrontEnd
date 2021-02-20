$(document).ready(function(){
    $('.brands').click(function(){
        $('#brands').toggleClass('d-none');
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



        $(".product-item").hover(function(){
          $(this).children('.caption').children('.inner').children('.button-group').css('opacity','1');
          }, function(){
            $(this).children('.caption').children('.inner').children('.button-group').css('opacity','0');
        });
      
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


    function openNav() {
        document.getElementById("mySidepanel").style.width = "350px";
      }
      
      /* Set the width of the sidebar to 0 (hide it) */
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
    document.querySelector('.shop').addEventListener('click',openNav);
      
    var email = document.getElementById('email'),
    button = document.getElementById('button');

function validateEmail(email) {
    var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email);
}

email.addEventListener('keydown', function() {
  var email = this.value;
  
  if(validateEmail(email)) {
    button.classList.add('is-active');
  }
});

button.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.add('is-done','is-active');
  
  setTimeout(function(){ 
    button.innerHTML = "Təşəkkürlər! Siz abunə oldunuz."
  }, 500);
});






