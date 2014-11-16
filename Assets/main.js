$(function(){

$("#mainNav").stick_in_parent()

$("#mainNav").stick_in_parent()
  .on("sticky_kit:stick", function(e) {
    $("#mainNav").css("background-color", "red");
  })
  .on("sticky_kit:unstick", function(e) {
    console.log("has unstuck!", e.target);
  });

});