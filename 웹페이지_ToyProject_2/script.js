jQuery(document).ready(function(){
  $(".nav > li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown(500);
  });
  $(".nav > li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp(500);
  });

  $('#imgsbar a').click(function(){
    $(this).removeClass('active');
    $(this).addClass('active');
    var imgleft = $(this).attr('imgleft');
    $('#imgs').animate({left:imgleft},"fast");
  });

  $(".partner_info img").click(function(){
    $(".modal").show();
  });
  $(".modal .content button").click(function(){
    $(".modal").hide();
  });
  
});

var win;
function winOpen() {
  win = window.open('contact.html','child','width=500, height=300');
}
