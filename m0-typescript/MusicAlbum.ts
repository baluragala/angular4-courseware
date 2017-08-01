class MusicAlbum {

    private static nextId: number = 0;
    private static readonly MIN_RATING: number = 0;
    private static readonly MAX_RATING: number = 5;

    private id: number;
    private genres: string[] = [];
    private scores: number[] = [];

    constructor(private title: string,
                private description: string,
                private price: number) {

        this.id = MusicAlbum.nextId++;
    }

    addGenres(...genres: string[]): void {
        for (let genre of genres) {
            this.genres.push(genre);
        }
    }

    rate(score: number): void {
        if (score >= MusicAlbum.MIN_RATING && score <= MusicAlbum.MAX_RATING) {
            this.scores.push(score);
        }
    }

    genresAsString(): string {
        return this.genres.join(' ');
    }

    averageScore(): number {
        let total: number = 0;
        for (let score of this.scores) {
            total += score;
        }
        return total / this.scores.length;
    }

    toString(): string {
        return `[${this.id}] ${this.title}, ${this.description}, £${this.price}, [genres ${this.genresAsString()}], average score ${this.averageScore()}`;
    }
}

// Client code.
let album: MusicAlbum = new MusicAlbum(
    'LOUDEN UP NOW',
    'This is the second full-length for the dance-oriented Sacramento/New York seven-piece (down from eight), who share several members with the band Out Hud.',
    8.99);

album.addGenres('inde', 'rock');
album.rate(5);
album.rate(4);
album.rate(4);
album.rate(3);
album.rate(7);  // Should be discarded
album.rate(-1); // Should be discarded

console.log(album.toString());