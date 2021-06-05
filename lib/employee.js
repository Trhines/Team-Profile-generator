//this will create the base employee class

class Employee{
    constructor(name, id, email, role){
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    
        this.getName = () => this.name
        this.getId = () => this.id
        this.getEmail = () => this.email
        this.getRole = () => (this.role ? this.role : "Employee")
    }
}

module.exports = {Employee}