$( ".tabbutton" ).click(function() {
  $("div").find(".open").removeClass('open')
  $(this).next().toggleClass("open")
});
