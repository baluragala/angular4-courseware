var MusicAlbum = (function () {
    function MusicAlbum(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.genres = [];
        this.scores = [];
        this.id = MusicAlbum.nextId++;
    }
    MusicAlbum.prototype.addGenres = function () {
        var genres = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            genres[_i] = arguments[_i];
        }
        for (var _a = 0, genres_1 = genres; _a < genres_1.length; _a++) {
            var genre = genres_1[_a];
            this.genres.push(genre);
        }
    };
    MusicAlbum.prototype.rate = function (score) {
        if (score >= MusicAlbum.MIN_RATING && score <= MusicAlbum.MAX_RATING) {
            this.scores.push(score);
        }
    };
    MusicAlbum.prototype.genresAsString = function () {
        return this.genres.join(' ');
    };
    MusicAlbum.prototype.averageScore = function () {
        var total = 0;
        for (var _i = 0, _a = this.scores; _i < _a.length; _i++) {
            var score = _a[_i];
            total += score;
        }
        return total / this.scores.length;
    };
    MusicAlbum.prototype.toString = function () {
        return "[" + this.id + "] " + this.title + ", " + this.description + ", \u00A3" + this.price + ", [genres " + this.genresAsString() + "], average score " + this.averageScore();
    };
    MusicAlbum.nextId = 0;
    MusicAlbum.MIN_RATING = 0;
    MusicAlbum.MAX_RATING = 5;
    return MusicAlbum;
}());
// Client code.
var album = new MusicAlbum('LOUDEN UP NOW', 'This is the second full-length for the dance-oriented Sacramento/New York seven-piece (down from eight), who share several members with the band Out Hud.', 8.99);
album.addGenres('inde', 'rock');
album.rate(5);
album.rate(4);
album.rate(4);
album.rate(3);
album.rate(7); // Should be discarded
album.rate(-1); // Should be discarded
console.log(album.toString());
