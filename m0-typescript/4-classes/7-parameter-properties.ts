class Product {
    constructor(public title: string, public price: number) {
    }
}

let p = new Product('Galaxy S8', 600);
console.log(`Title: ${p.title}, Price: ${p.price}`);