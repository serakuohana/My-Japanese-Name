$(function() {
    $("#slider01_pc").slick({
      autoplay: true,
      autoplayspeed: 3000,
      arrows: false,
      dots: true,
      infinite: true
    });
});
$(function() {
    $("#slider01_sp").slick({
      autoplay: true,
      autoplayspeed: 3000,
      arrows: false,
      dots: true,
      infinite: true
    });
});

//分岐条件
media = window.matchMedia("screen and (min-width:600px)")
 //ブラウザ幅で表示変更
 $(function (){
     if (media.matches) {
       $(function(){
         var slider = "#slider02";
         var thumbnailItem = "#thumbnail-list .thumbnail-item";
         $(thumbnailItem).each(function(){
           var index = $(thumbnailItem).index(this);
           $(this).attr("data-index",index);
         });
         $(slider).on('init',function(slick){
           var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
           $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
         });
         $(slider).slick({
           autoplay: true,
           arrows: true,
           prevArrow: '<img src="../images_pc/arrow_left.png" class="slide-arrow prev-arrow">',
           nextArrow: '<img src="../images_pc/arrow_right.png" class="slide-arrow next-arrow">',
           infinite: true
         });
         $(thumbnailItem).on('click',function(){
           var index = $(this).attr("data-index");
           $(slider).slick("slickGoTo",index,false);
         });
         $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
           $(thumbnailItem).each(function(){
           $(this).removeClass("thumbnail-current")
           .removeClass("filter").css("background-color", "white").css("color", "red");
         });
         $(thumbnailItem+'[data-index="'+nextSlide+'"]')
           .addClass("thumbnail-current").removeClass("filter").css("background-color", "red").css("color", "white");
         });
       });
     } else {
       $(function(){
         $(".slide-item").remove();
         $("#slider02").append('<li class="slide-item"><img src="../images_sp/nav_sp_img01.png"alt=""><p>Please choose from 4 types of kanji fonts that match the image.</p></li>')
         .append('<li class="slide-item"><img src="../images_sp/nav_sp_img02.png"alt=""><p>Customize freely! Please create only one item.</p></li>')
         .append('<li class="slide-item"><img src="../images_sp/nav_sp_img03.png"alt=""><p>We have a wide range of MADE IN JAPAN products from all over Japan.</p></li>')
         var slider = "#slider02";
         var thumbnailItem = "#thumbnail-list .thumbnail-item";
         $(thumbnailItem).each(function(){
           var index = $(thumbnailItem).index(this);
           $(this).attr("data-index",index);
         });
         $(slider).on('init',function(slick){
           var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
           $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
         });
         $(slider).slick({
           autoplay: true,
           arrows: true,
           prevArrow: '<img src="../images_pc/arrow_left.png" class="slide-arrow prev-arrow">',
           nextArrow: '<img src="../images_pc/arrow_right.png" class="slide-arrow next-arrow">',
           infinite: true
         });
         $(thumbnailItem).on('click',function(){
           var index = $(this).attr("data-index");
           $(slider).slick("slickGoTo",index,false);
         });
         $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
           $(thumbnailItem).each(function(){
           $(this).removeClass("thumbnail-current")
           .removeClass("filter").css("background-color", "white").css("color", "red");
         });
         $(thumbnailItem+'[data-index="'+nextSlide+'"]')
           .addClass("thumbnail-current").removeClass("filter").css("background-color", "red").css("color", "white");
         });
       });
       };
   })
