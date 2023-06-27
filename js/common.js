
$(function() {

  // 햄버거 버튼 클릭시
  $( ".toggle-menu-button" ).on( "click", function() {
    console.log("click");
    console.log($(".header-site-menu").hasClass("is-show"));
    if($(".header-site-menu").hasClass("is-show")) {
      $(".header-site-menu").removeClass("is-show")
    } else {
      $(".header-site-menu").addClass("is-show")
    }
    
  });
})

// toggle.js의 스크립트
// window.addEventListener('load', function () {
//   var $button = document.querySelector('.toggle-menu-button');
//   var $menu = document.querySelector('.header-site-menu');
//   $button.addEventListener('click', function () {
//       if ($menu.classList.contains('is-show')) {
//           $menu.classList.remove('is-show');
//       }
//       else {
//           $menu.classList.add('is-show');
//       }
//   });
// });
