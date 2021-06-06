//Engineet class

const employee = require('./employee.js')

class Engineer extends employee.Employee{
    constructor(name, id, email, role, gitUser){
        
        super(name, id, email, role)
        
        this.gitUser = gitUser

        this.getGitUser = () => this.gitUser
        
    }
}

let bob = new Engineer('Bob', 1234, 'test@2mail.com', 'Engineer')
console.log(bob.role)

module.exports = {Engineer}