var arrayOfStrings = ['first', 'second', 'third'];
for (var i = 0; i < arrayOfStrings.length; i++) {
    console.log("arrayOfStrings[" + i + "] = " + arrayOfStrings[i]);
}
for (var itemKey in arrayOfStrings) {
    var itemValue = arrayOfStrings[itemKey];
    console.log("arrayOfStrings[" + itemKey + "] = " + itemValue);
}
for (var _i = 0, arrayOfStrings_1 = arrayOfStrings; _i < arrayOfStrings_1.length; _i++) {
    var arrayItem = arrayOfStrings_1[_i];
    console.log("arrayItem = " + arrayItem + " ");
}
