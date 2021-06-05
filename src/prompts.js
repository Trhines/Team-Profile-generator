

    newEmployee = [
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email address?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is your employee's role?",
            choices: ['Intern', 'Engineer', 'Manager']
        },
    ]

    add = [
        {
            type: 'confirm',
            name: 'add',
            message: "Would you like to add another employee?"
        }
    ]

    school = [
        {
            type: 'input',
            name: 'school',
            message: "What school are you attending?"
        }
    ]

    office = [
        {
            type: 'input',
            name: 'office',
            message: "What is your office number?"
        }
    ]

    git = [
        {
            type: 'input',
            name: 'git',
            message: "What is your GitHub User?"
        }
    ]


module.exports = {newEmployee, add}
