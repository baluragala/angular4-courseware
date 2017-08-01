enum Genre {
    Pop,
    Rock,
    Inde
}

var popGenre = Genre.Pop;
console.log(`Genre is: ${popGenre}`);

var rockGenre = Genre['Rock'];
console.log(`Genre is: ${rockGenre}`);

var IndeGenre = Genre[2];
console.log(`Genre is: ${IndeGenre}`);

enum ViewEncapsulation {
    Emulated = 1000,
    Native = 2000,
    None = 3000
}

