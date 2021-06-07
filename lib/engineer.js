//Engineer class

const employee = require('./employee.js')

class Engineer extends employee.Employee{
    constructor(name, id, email, gitUser){
        
        super(name, id, email)
        this.role = "Engineer"
        this.gitUser = gitUser

        this.getGitUser = () => this.gitUser
        
    }
}


module.exports = {Engineer}