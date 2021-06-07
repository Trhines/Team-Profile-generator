const engineer = require('../lib/engineer.js')


describe("For Employee class, each get function should return its corresponding value", () => {
    
    let bob = new engineer.Engineer('Bob', 1234, 'test@2mail.com', 'gitUser')
    
    it("Should return 'Bob'", ()=>{
        expect(bob.getName()).toBe((bob.name))
    });

    it("Should return '1234'", ()=>{
        expect(bob.getId()).toBe((bob.id))
    });    
    
    it("Should return 'test@2mail.com'", ()=>{
        expect(bob.getEmail()).toBe((bob.email))
    });

    it("Should return 'Engineer'", ()=>{
        expect(bob.getRole()).toBe((bob.role))
    });

    it("Should return 'gitUser'", ()=>{
        expect(bob.getGitUser()).toBe((bob.gitUser))
    });
})