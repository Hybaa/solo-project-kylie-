
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").animate({width: 'toggle'}, "slow");
    });
  });
  $("#exit-logo").click(function(){
    $("#panel").hide();
  });
  