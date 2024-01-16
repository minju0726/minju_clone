$(document).ready(function () {
  $(".menu").mouseenter(function () {
    $(".submenu").stop().slideDown();
  });
  $(".menu").mouseleave(function () {
    $(".submenu").stop().slideUp();
  });
});
