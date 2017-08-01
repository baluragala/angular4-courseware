var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var product1 = { id: 1, title: 'iphone' };
var product2 = __assign({}, product1);
console.log("secondObj.id : " + product2.id);
console.log("secondObj.name : " + product2.title);
