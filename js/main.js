$(function(){

	$("#menu ul li a").on("mouseenter",function(){
      $(".submenu").stop().slideDown(100);
    });

    $("#menubox").on("mouseleave",function(){
        $(".submenu").stop().slideUp(100);
      });


      $("#banner").slick({
        autoplay: true,
        dots:true,
        infinite: true,
        autoplaySpeed: 3000   
       });

});