$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").animate({width: 'toggle'}, "slow");
    });
  });
  $("#exit-logo").click(function(){
    $("#panel").hide();
  });
  $(document).ready(function(){
    $("#catego").click(function(){
      $("#listcatego").animate({width: 'toggle'}, "slow");
    });
  });
   $(document).ready(function() {
        $("#filter-toggle").click(function() {
            $("#filter-panel").toggleClass("open");
        });
    });

      