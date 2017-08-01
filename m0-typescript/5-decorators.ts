function SimpleDecorator(constructor: Function) {
    console.log('simpleDecorator called.');
}

@SimpleDecorator
class ClassWithSimpleDecorator {

}
