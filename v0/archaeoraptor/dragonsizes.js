function spawnLizard() {
  var div = document.createElement("div"); //create a div
  div.className = "dragon draggable ui-widget-content"; //give the div the dragon class
  div.innerHTML = "<div class='wings'></div>"; //add wings inside the div
  document.body.appendChild(div); //add div to the end of the closing /body tag
}

//friendship ended with javascript now jQuery is my friend
$(document).ready(function(){
  $("button#clearAll").click(function(){
    $(".dragon").remove();
  });
});

$( function() {
  $( ".draggable" ).draggable({ scroll: true });
});