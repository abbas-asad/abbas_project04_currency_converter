#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 200,
};
let userAns = await inquirer.prompt([
    {
        name: "amount",
        message: "Enter the amount",
        type: "number",
    },
    {
        name: "from",
        message: "Enter from amount",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter to amount",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amountAns = userAns.amount;
let baseAmount = amountAns / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Your currency conversion of ${amountAns} ${userAns.from} to ${userAns.to} is ${convertedAmount}.`);
