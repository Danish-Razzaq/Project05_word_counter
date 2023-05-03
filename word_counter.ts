import inquirer from "inquirer";
import chalk from "chalk";




let welcome = chalk.yellow("\t-->>  Words Counter   <<--");
console.log(welcome);


const word_counter:{Userinput:string} = await inquirer.prompt({
    name: "Userinput",
    type: "input",
    message: chalk.italic("Enter Paragraph/Sentance which you want :")
});


console.log("Worlds in Your Sentance =" , word_counter.Userinput.trim().split(/\s+/).length);
