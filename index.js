

//inquirer prompts
const prompts = require('./src/prompts.js')

//html elements
const card = require('./dist/render.js')
const fs = require('fs')
//employee classes
//classes require name, id, email, role, gitUser/school/officeNum
const intern = require('./lib/intern.js')
const engineer = require('./lib/engineer.js')
const manager = require('./lib/manager.js')
const inquirer = require('inquirer')

const employees =[]
let html = card.head

// async function createPage(data){
//     await createCards(data)
//     card.endBody()
// }
function createCards(data){
    i=0
    for (let items of data){
        i++
        const newCard = new card.Card(items)
        html = html.concat(newCard.header())
        html = html.concat(newCard.body())

        if(( i%3 ) ===0){
            html = html.concat(card.newRow())
            i=0
        }
    }
    html = html.concat(card.endBody())
    fs.writeFile('./dist/homepage.html', html, (err)=>{
        if(err){
            console.log(err)
        }
    })
}
    




function init(){
    inquirer.prompt(prompts.newEmployee)
    .then(async(response)=> {
        const {name, id, email, role} = response
        let uniq=""
        switch (role){
            case "Intern":
                uniq = await inquirer.prompt(school)
                employees.push(new intern.Intern(name, id, email, uniq))
                break;
            case "Engineer":
                uniq = await inquirer.prompt(git)
                employees.push(new engineer.Engineer(name, id, email, uniq))
                break;
            case "Manager":
                uniq = await inquirer.prompt(office)
                employees.push(new manager.Manager(name, id, email, uniq))
                break;
        }
        console.log("generating objects")
        let {add} = await inquirer.prompt(prompts.add)
        return add ? init() : createCards(employees)
    })
}

init()
