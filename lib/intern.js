const employee = require('./employee.js')

//Intern class

class Intern extends employee.Employee{
    constructor(name, id, email, role, school){
        
        super(name, id, email, role)

        this.school = school

        this.getSchool = () => this.school
    }
}

module.exports = {Intern}