var Genre;
(function (Genre) {
    Genre[Genre["Pop"] = 0] = "Pop";
    Genre[Genre["Rock"] = 1] = "Rock";
    Genre[Genre["Inde"] = 2] = "Inde";
})(Genre || (Genre = {}));
var popGenre = Genre.Pop;
console.log("Genre is: " + popGenre);
var rockGenre = Genre['Rock'];
console.log("Genre is: " + rockGenre);
var IndeGenre = Genre[2];
console.log("Genre is: " + IndeGenre);
