

//inquirer prompts
const prompts = require('./src/prompts.js')

//employee classes
//classes require name, id, email, role, gitUser/school/officeNum
const intern = require('./lib/intern.js')
const engineer = require('./lib/engineer.js')
const manager = require('./lib/manager.js')
const inquirer = require('inquirer')

const employees = []

function init(){
    inquirer.prompt(prompts.newEmployee)
    .then(async(response)=> {
        const {name, id, email, role} = response
        let uniq=""
        switch (role){
            case "Intern":
                console.log("intern")
                uniq = await inquirer.prompt(school)
                employees.push(new intern.Intern(name, id, email, role, uniq))
                break;
            case "Engineer":
                uniq = await inquirer.prompt(git)
                employees.push(new engineer.Engineer(name, id, email, role, uniq))
                break;
            case "Manager":
                uniq = await inquirer.prompt(office)
                employees.push(new manager.Manager(name, id, email, role, uniq))
                break;
        }
        console.log("generating objects")
        let {add} = await inquirer.prompt(prompts.add)
        return add ? init() : console.log(employees)
    })
}

init()

