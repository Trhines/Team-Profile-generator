//Engineet class

const employee = require('./employee.js')

class Engineer extends employee.Employee{
    constructor(name, id, email, role, gitUser){
        
        super(name, id, email, role)
        
        this.gitUser = gitUser

        this.getGitUser = () => this.gitUser
        
    }
}

module.exports = {Engineer}