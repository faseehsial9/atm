#! /usr/bin/env node
import inquirer from 'inquirer';
let mybalance=5000;
let mypin=5780;

console.log("\n\t welcome to the ATM - Machine\n");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type:"number",
        message:"Enter your pin code: "
    }
])
if(pinAnswer.pin === mypin)
    {
    console.log("pin is correct, login successfully!");
    console.log("current account balance is ${my balance}")
    }

    let operationans= await inquirer. prompt([
        {
            name: "operation",
            type: "list",
            message:"select an operation: ",
            choices: ["withdraw account", "check balance"]
        }
    ])

if(operationans.operation === "withdraw account"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw: "
        }
    ])
    if(amountAns.amount>mybalance){
        console.log("Insufficient balance");
    }
    else{
        mybalance-=amountAns.amount;
        console.log('${amountAns.amount} withdraw successfully');
        console.log('your remaining balance: ${mybalance}');
    }
}
else if(operationans.operation === "check balance"){
    console.log('your account balance is: $(myBalance)');
}
else{
    console.log("pin in incorrect.Try Again!");
}


