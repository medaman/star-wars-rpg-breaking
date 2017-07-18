$(document).ready(function() {
 
  var currentPlayer = -1;
  var remainingOpponents = [0,1,2,3];
  
  function addChars(displayArea) {
    displayArea.html("");
    for(var i=0;i<remainingOpponents.length;i++) {
      var newDiv = $("<div>");
      var innerDiv = $("<div>");
      newDiv.addClass("col-xs-3 character-" + (remainingOpponents[i]+1));
      innerDiv.attr("value", remainingOpponents[i]);
      innerDiv.attr("name", character[remainingOpponents[i]].name);
      innerDiv.addClass("icon choose-opponent");
      innerDiv.css("background", "url(assets/images/background.jpg) no-repeat center center");
      innerDiv.css("background-size","contain");
      innerDiv.css("background-color","black");
      displayText(innerDiv, character[remainingOpponents[i]].name);
      displayText(innerDiv, "HP: " + character[remainingOpponents[i]].hp);
      displayText(innerDiv, "Attack: " + character[remainingOpponents[i]].ap);
      displayImage(innerDiv, character[remainingOpponents[i]].pic);
      displayArea.append(newDiv);
      $(".character-"+(remainingOpponents[i]+1)).append(innerDiv);
    }
  }

  addChars($("#character-row"));

  function displayText(area, item) {
    var newP = $("<p>");
    newP.html(item);
    area.append(newP);
  }

  function displayImage(area, item) {
    var newImage = $("<img>");
    newImage.attr("src", "assets/images/" + item);
    area.append(newImage);
  }

  $(".choose-opponent").on("click", function() {
    $("#start-screen").css("visibility", "hidden");
    var i = remainingOpponents.indexOf(parseInt($(this).attr("value")));
    remainingOpponents.splice(i,1);
    addChars($("#opponents"));
  });












});