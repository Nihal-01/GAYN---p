$(function () {
//-----------*** Ready function ***-----------/
//--------------------------------------------/
 //---/---/---/---*** loader - S ***---/---/---/---/
  $(window).on('load', function () {
   $('#preloader').fadeOut(2000);
  });
 //---/---/---/---*** loader - E ***---/---/---/---/
 //---/---/---/---*** back to top & hov.. menu - S ***---/---/---/---/
  $(window).on('scroll', function (){
 //------/-----***** back to top *****------/-----/
  var scrollsize = $(window).scrollTop()
   if(scrollsize > 600){
    $('#back_btn').show(500)
   }else{
    $('#back_btn').hide(500)
   };
  //------/-----***** back to top *****------/-----/
  //------/-----***** hov.. menu *****------/-----/
   if(scrollsize > 100) {
    $('#nav').addClass('active')
   }else{
    $('#nav').removeClass('active')
   };
  });
 //------/-----***** hov.. menu *****------/-----/
  $('#back_btn').on('click', function (){
   $('html,body').animate({
     scrollTop:0,
    }, 1500);
  });
 //---/---/---/---*** back to top & hov.. menu - E ***---/---/---/---/
 //---/---/---/---*** banner - S ***---/---/---/---/
  $('.slide_banner').slick({
    speed: 1500,
    prevArrow:'<i class="fa-solid fa-chevron-left slide_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right slide_icon"></i>',
  });
 //---/---/---/---*** banner - E ***---/---/---/---/
 //---/---/---/---*** about - S ***---/---/---/---/
  $('.about_slider').slick({
    slidesToShow:1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1500,
    dots: true,
    dotsClass:'slider_dots'
  });
 //---/---/---/---*** about - E ***---/---/---/---/
 //---/---/---/---*** Our_Courses - S ***---/---/---/---/
 $('.Courses_slider').slick({
  slidesToShow:3,
  speed: 1500,
  prevArrow:'<i class="fa-solid fa-chevron-left slide_icon"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right slide_icon"></i>',
 });
 //---/---/---/---*** Our_Courses - E ***---/---/---/---/ 
 //---/---/---/---*** teachers - S ***---/---/---/---/
  $('.teachers_slider').slick({
    slidesToShow:4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1500,
    dots: false,
  });
 //---/---/---/---*** teachers - E ***---/---/---/---/
 //---/---/---/---*** insta-imgs - S ***---/---/---/---/
  $('.insta_slider').slick({
    slidesToShow:7,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1500,
    dots: false,
  });
 //---/---/---/---*** insta-imgs - E ***---/---/---/---/
 //---/---/---/---*** passworde - s ***---/---/---/---/
 //-----------//-----------*****-----------//-----------//
 var password = document.getElementById('password')
 var password_lock = document.getElementById('password_lock')
 //-----------//-----------*****-----------//-----------//
 on('click', function togglePassword() {
  if (password.type =='password') {
      password.type ='text';
      password_lock.classList.add('fa-lock-open');
      password_lock.classList.remove('fa-lock');
  } else{
      password.type ='password';  
      password_lock.classList.remove('fa-lock-open');
      password_lock.classList.add('fa-lock');
  }
  })
 //---/---/---/---*** password - E ***---/---/---/---/
})