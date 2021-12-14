window.onload = function() {
  var random = Math.floor(Math.random() * 4);
  var colors = ["red", "green", "blue", "yellow"];

  document.getElementById("colorbox").className = "box-rounded " + colors[random];
  document.getElementById("colorcircle").className = "circle-inbox circle-border-" + colors[random];
};
