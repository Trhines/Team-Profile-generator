const employee = require('./employee.js')

//Intern class

class Intern extends employee.Employee{
    constructor(name, id, email, school){
        
        super(name, id, email)

        this.role = "Intern"
        this.school = school
        this.getSchool = () => this.school
    }
}

module.exports = {Intern}