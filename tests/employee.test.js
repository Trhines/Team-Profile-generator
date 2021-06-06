const employee = require('../lib/employee.js')

console.log(employee)

describe("For Employee class, each get function should return its corresponding value", () => {
    
    let bob = new employee.Employee('Bob', 1234, 'test@2mail.com')

    it("Should return 'Bob'", ()=>{
        expect(bob.getName()).toBe((bob.name))
    });

    it("Should return '1234'", ()=>{
        expect(bob.getId()).toBe((bob.id))
    });    
    
    it("Should return 'test@email.com'", ()=>{
        expect(bob.getEmail()).toBe((bob.email))
    });

    it("Should return 'Employee'", ()=>{
        expect(bob.getRole()).toBe(("Employee"))
    });
})




    

