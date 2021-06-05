const employee = require('./employee.js')

class Manager extends employee.Employee{
    constructor(name, id, email, role, officeNum){
        
        super(name, id, email, role)
        
        this.officeNum = officeNum

        this.getOfficeNum = () => this.officeNum
        
    }
}

module.exports = {Manager}