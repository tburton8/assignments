const employees = [ ];

function Employee (name, jobTitle, salary, status = "full time") {
    this.name = name;
    this.title = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name}, jobTitle: ${this.title}, Salary: ${this.salary}, Status = ${this.status} `)
    }

}

const employee1 = new Employee ("Fred", "Manager", "5,000 per month")

console.log(employee1)
employee1.printEmployeeForm()

const employee2 = new Employee ("Sally", "Representative", "3,000 per month")

console.log(employee2)
employee2.printEmployeeForm()

const employee3 = new Employee ("Kyle", "Sales", "3,500 per month", "Part Time")

console.log(employee3)
employee3.printEmployeeForm()

// employees.push(employee1, employee2, employee3)
// console.log(employees)

