#!/usr/bin/env node
import inquirer from "inquirer";
let converstion = {
    "GBP": {
        "GBP": 1.0000,
        "USD": 1.2748,
        "PKR": 356.653,
        "EUR": 1.1576
    },
    "EUR": {
        "GBP": 0.8643,
        "USD": 1.1012,
        "EUR": 1.0000,
        "PKR": 310.2200
    },
    "USD": {
        "GBP": 0.7843,
        "USD": 1.000,
        "EUR": 0.9081,
        "PKR": 281.3400
    },
    "PKR": {
        "GBP": 0.0027,
        "USD": 0.0056,
        "EUR": 0.0074,
        "PKR": 1.0000
    }
};
async function startLoop() {
    let again;
    do {
        await convertAmount();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "cont",
                choice: ["Yes", "No"],
                message: "Do you want tp continue:"
            }
        ]);
    } while (again.cont == "Yes");
}
startLoop();
async function convertAmount() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["GBP", "USD", "EUR", "PKR"],
            message: "Please select currency from: "
        },
        {
            type: "list",
            name: "to",
            choices: ["GBP", "USD", "EUR", "PKR"],
            message: "Please select currency from: "
        },
        {
            type: "number",
            name: "amount",
            message: "Please enter amount to convert from to:"
        }
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = converstion[from][to] * amount;
        console.log(`The Converted amount of ${amount} ${from} in ${to} is ${result}`);
    }
    else {
        console.log(`Invalid input`);
    }
}
