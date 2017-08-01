class Person {
    protected name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, age: number, department: string) {
        super(name, age);
        this.department = department;
    }

    public introduce() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee('Howard', 32, 'Sales');
console.log(howard.introduce());
