var unionType;
unionType = 1;
console.log("unionType : " + unionType);
unionType = 'test';
console.log("unionType : " + unionType);
function acceptOrder(quantity) {
    if (quantity > 10)
        return 'Bulk quantity cannot be accepted';
    else
        return true;
}
console.log(acceptOrder(5));
console.log(acceptOrder(11));
