var message1 = 'Message1';
var message2 = 'Message2';


function guess(x) {
    if (x > 100) {
        var message1 = 'x is greater than 100';
        var message2 = 'x > 100 is true';
    }
    console.log(message1);
    console.log(message2);
}

guess(10);