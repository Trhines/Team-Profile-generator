const intern = require('../lib/intern.js')


describe("For Employee class, each get function should return its corresponding value", () => {
    
    let bob = new intern.Intern('Bob', 1234, 'test@2mail.com', 'School')
    
    it("Should return 'Bob'", ()=>{
        expect(bob.getName()).toBe((bob.name))
    });

    it("Should return '1234'", ()=>{
        expect(bob.getId()).toBe((bob.id))
    });    
    
    it("Should return 'test@2mail.com'", ()=>{
        expect(bob.getEmail()).toBe((bob.email))
    });

    it("Should return 'Intern'", ()=>{
        expect(bob.getRole()).toBe((bob.role))
    });

    it("Should return 'School'", ()=>{
        expect(bob.getSchool()).toBe((bob.school))
    });
})