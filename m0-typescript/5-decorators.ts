/* class decorator */
function simpleDecorator(constructor: Function) {
    console.log('********CLASS**************')
    console.log('constructor', constructor);
    console.log('simpleDecorator called.');
}

/*method decorator*/
function log(target: any,
    methodName: string,
    descriptor?: PropertyDescriptor) {
    
    let originalFunction = target[methodName];

    let auditFunction = function () {
        console.log(`${methodName} called with args : ${JSON.stringify(arguments)}`);
        originalFunction.apply(this, arguments);
    }

    target[methodName] = auditFunction;
}

/* property decorator */
function propertyDec(target: any, propertyKey: string) {
    console.log('********PROPERTY**************')
    console.log(`target : ${target}`);
    console.log(`target.constructor : ${target.constructor}`);
    console.log(`class name : `
        + `${target.constructor.name}`);
    console.log(`propertyKey : ${propertyKey}`);
    console.log('**********************')
}


class Person1 {


    fullName:string;

    @log
    //some line here
    print(fullName: string) {
        console.log(`Person.print`
            + `(${fullName}) called.`);
    }
    //some line here
}

let p1 = new Person1();
p1.print("Bala Krishna"); 
p1.print("Rama Krishna"); 
p1.print("Hari Krishna"); 
