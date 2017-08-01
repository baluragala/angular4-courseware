class Review {
    private static readonly MIN_RATING: number = 0;
    private static readonly MAX_RATING: number = 5;

    makePreview(rating, comments) {
        if (rating < Review.MIN_RATING || rating > Review.MAX_RATING) {
            throw  new Error('Invalid rating')
        } else {
            console.log(`Reviewed with comments : ${comments} and rating : ${rating}`)
        }
    }
}