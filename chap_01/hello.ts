import * as inquirer from 'inquirer'

inquirer.prompt(
  [
    {
      name: "first_name",
      message: "what is your name?"
    }
  ]
).then(answers => {
  console.log(`your answered: ${answers.first_name}`)
})