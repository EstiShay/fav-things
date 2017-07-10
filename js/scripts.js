//Business logic s


//UI logic
$(document).ready(function() {
  $("#favForm").submit(function(event) {
    var favorites = [];
    favorites.push($("input#movie").val());
    favorites.push($("input#vacation-spot").val());
    favorites.push($("input#food").val());
    // var favmovieInput = $("input#movie").val();
    // var favvacaInput = $("input#vacation-spot").val();
    // var favfoodInput = $("input#food").val();

    // $(".answerArray").text(favorites);
    var favoritesNew = [];
    favoritesNew.push(favorites[1]);
    favoritesNew.push(favorites[0]);
    favoritesNew.push(favorites[2]);

    $("ul").append("<li>" + favoritesNew[0] + "</li>")
    $("ul").append("<li>" + favoritesNew[1] + "</li>")
    $("ul").append("<li>" + favoritesNew[2] + "</li>")

    event.preventDefault();
  });
});
