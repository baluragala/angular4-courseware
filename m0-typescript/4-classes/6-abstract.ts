abstract class AbstractEmployee {
    public id: number;
    public name: string;

    abstract getDetails(): string;

    public printDetails() {
        console.log(this.getDetails());
    }
}

class Employee extends AbstractEmployee {
    getDetails(): string {
        return `id : ${this.id}, name : ${this.name}`;
    }
}

class Manager extends Employee {
    public Employees: Employee[];

    getDetails(): string {
        return super.getDetails()
            + `, employeeCount ${this.Employees.length}`;
    }
} 