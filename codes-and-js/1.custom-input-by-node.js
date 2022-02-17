// 1. using readline
const { stdin, stdout } = require("process")
const interface = require("readline")

const readline = interface.createInterface({
    input : stdin,
    output : stdout
})

readline.question("what your name : ", (value)=>{
    console.log(value)
    readline.close()
})


// 2.using prompt sync
// Run npm install prompt-sync in the terminal
const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');
console.log(`Hey there ${name}`);