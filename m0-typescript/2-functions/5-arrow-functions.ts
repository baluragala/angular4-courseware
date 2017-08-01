let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

// Arrow functions
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers1: number[] = numbers.filter(function (n) {
    return n % 2 == 0
});
let evenNumbers2: number[] = numbers.filter(n => n % 2 == 0);
console.log(evenNumbers1);
console.log(evenNumbers2);

//no params
let noParamsFunction = () => {
    console.log('no params')
}

//morethan one param
let twoParamFunction = (a, b) => a + b;
let twoParamFunctionWithMoreThanStatementInBody = (a, b) => {
    let c = a * 2;
    let d = b * 3;
    return c + d;
}
