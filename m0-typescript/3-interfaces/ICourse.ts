enum Genre { Jazz, Pop, Techno, Funk }

interface Album {
    id: number;
    name: string;
    artist: string;
    genre: Genre;
    numberOfSongs?: number; // Optional Properties
}

let album1 = {
    id: 1,
    name: 'Up and Down',
    artist: 'Jennu',
    genre: Genre.Pop,
    numberOfSongs: 6
};

let album2 = {
    id: 1,
    name: 'Up and Down',
    artist: 'Jennu',
    genre: Genre.Pop
};

console.log(album1);
console.log(album2);