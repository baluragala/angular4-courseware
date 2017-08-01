function makeCoffee(quantity, callback: (statusMessage: string) => void /*function type*/): void {
    let message = `Prepared ${quantity} coffee`;
    console.log(`Preparing ${quantity} coffee`);
    callback(message);
}

let callback = (statusMessage: string) => console.log(`Serving to table :${statusMessage}`)

makeCoffee(10, callback);