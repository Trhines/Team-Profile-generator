//test classes
// const intern = require('../lib/intern.js')
// const engineer = require('../lib/engineer.js')
// const manager = require('../lib/manager.js')

// let bob = new intern.Intern("bob", 1234, "email@test.com", "School")
// let will = new engineer.Engineer("Will", 5678, "emailemailemail", "git@git")
// let phill = new manager.Manager("Phill", 91011, "asdfasdf", 200)


//accepts an employee subclass as arg, can return header and body html for card
function Card(object){

        const {name, id, email, role} = object
        let uniq = null

        this.header = function() {
            return `\n            <div class='card col' style='width: 18rem;'>
                <div class='card-header'>          
                    <h5 class='card-title'>${name}</h5>          
                    <h6 class='card-subtitle mb-2'>${role}</h6>      
                </div>`
        }

        this.body = function(){
            switch(role){
                case "Intern": 
                    uniq = object.school.school
                    
                    return `\n                <div class='card-body'>
                    <h5>id: ${id}</h5>
                    <h5>email: ${email}</h5>
                    <h5>School: ${uniq}</h5>
                </div>
            </div>\n`
                    


                case "Engineer":
                    uniq = object.gitUser.git
          
                    return `\n                <div class='card-body'>
        <h5>id: ${id}</h5>
        <h5>email: ${email}</h5>
        <h5>Git Hub: <a href="https://github.com/${uniq}">https://github.com/${uniq}</a>
        </h5>
    </div>
</div>\n`


                case "Manager":
                    uniq = object.officeNum.office
    
                    return `\n                <div class='card-body'>
        <h5>id: ${id}</h5>
        <h5>email: ${email}</h5>
        <h5>Office Number: ${uniq}</h5>
    </div>
</div>\n`
                    
            }
        }
}


function newRow(){
    return `\n        </div>
        <div class="row justify-content-center">`
}

function endBody(){
    return `\n        </div>
    </section>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
  </script>
</body>
</html>`
}

const head = `<!doctype html>
<html lang='en'>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x' crossorigin='anonymous'>
    <link rel='stylesheet' href='./style.css'>
  </head>
  <body>
    <nav class='navbar navbar-expand-lg'>
        <div class='container-fluid'>
          <h2>Team Profiles</h2>
        </div>
      </nav>

      <section class='container'>
        <div class="row justify-content-center">`



module.exports = {Card, endBody, newRow, head}






