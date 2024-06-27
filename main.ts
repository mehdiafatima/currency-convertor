import inquirer from "inquirer"
import chalk from "chalk"

let exchange_rate :any = {

"USD" : 138.50,
"GBP" : 181.00,
"SAR" : 36.78,
"AUD" : 96.60,
'PKR':  280.55,
"JPY" : 1.2280,
"EURO": 165.55

};

let user_answer = await inquirer.prompt([
    {
      name :"from_currency",
      type:"list",
      message :chalk.blueBright("Select the currency to convert from"),
      choices :["USD","GBP","SAR" ,"AUD" ,"PKR" ,"JPY" ,"EURO"]
    },
    {
      name :"to_currency",
      type:"list",
      message :chalk.blueBright("Select the currency to convert into"),
      choices :["USD","PKR","EURO"]
    },
    { 
      name :"amount",
      type:"input",
      message :chalk.blueBright("Enter the amount to convert"),
    }
]);

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

let base_amount = amount/ from_amount
let converted_amount  = base_amount * to_amount


console.log(`Converted Amount = ${chalk.greenBright (converted_amount)}`);

