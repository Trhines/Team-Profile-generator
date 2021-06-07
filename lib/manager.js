const employee = require('./employee.js')

class Manager extends employee.Employee{
    constructor(name, id, email, officeNum){
        
        super(name, id, email)
        
        this.role = "Manager"
        this.officeNum = officeNum

        this.getOfficeNum = () => this.officeNum
        
    }
}

module.exports = {Manager}