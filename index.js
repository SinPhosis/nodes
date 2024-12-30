//import chalk from "chalk";
//
//console.log(chalk.red("Hello world!"));
//
//
//import figlet from "figlet";
//
//figlet("Hello World!!", function (err, data) {
//    if (err) {
//      console.log("Something went wrong...");
//      console.dir(err);
//      return;
//    }
//    console.log(data);
//  });

//import ora from 'ora';
//
//const spinner = ora('Loading unicorns').start();
//
//setTimeout(() => {
//	spinner.color = 'yellow';
//	spinner.text = 'Loading rainbows';
//}, 1000);

//import pokemon from "pokemon";
//
//pokemon.all();
////=> ['Bulbasaur', …]
//
//pokemon.random();
////=> 'Snorlax'
//
//pokemon.getName(147);
////=> 'Dratini'
//
//pokemon.getId('Dratini');
////=> 147
//console.log(pokemon.all());
//import cowsay from "cowsay";
//
//
//  console.log(cowsay.say({
//    text : "Ligma",
//    e : "oO",
//    T : "U "
//}));

//import schedule from 'node-schedule';
//
//const job = schedule.scheduleJob('42 * * * *', function(){
//  console.log('The answer to life, the universe, and everything!');
//});
//console.log(job);
//Interactive Data Generator   
// Uses: inquirer, @faker-js/faker, qr-image, axio  s   
// Terminal ashiglan hereglegchees edgeer asuultiig asuuna,hereglegch ali songoltiig songosnoos hamaran tuhain turliin datag, songoson toogoor uusgej ugnu
 //const questions = [ {      
 //type: 'list',      
 //name: 'dataType',      
 //message: 'What type of data would you like to generate?',      
 //choices: ['User Profile', 'Company Info', 'Product Details']    
 //},   
 // {      
 //type: 'number',      
 //name: 'count',      
 //message: 'How many entries would you like?',      
 //default: 1    
 //}  
 //];
 //Example:// What type of data would you like to generate? => User Profile// How many entries would you like? => 2
 //Results:[ {          
 //name: "Josh",          
// email: "josh1998@gmail.com",          
// avatar: "link"},
// {          
// name: "Sarah",          
// email: "sarah@yahoo.com",          
// avatar: "link"        
//}]
//import { faker } from '@faker-js/faker';
//export function createRandomUser() {
//    return {
//        name: faker.name.findName(),
//        email: faker.internet.email(),
//        avater: faker.image.avatar(),
//    };
//}
//export const users = faker.helpers.multiple(createRandomUser, {
//  count: 5,
//});
//console.log(createRandomUser());

import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}

export function createRandomCompany() {
  console.log('createRandomCompany called');
  return {
    name: faker.company.companyName(),
    email: faker.internet.email(),
  };
}

export function createRandomProduct() {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    expiration: faker.date.future(),
  };
}

import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'dataType',
    message: 'What type of data would you like to generate?',
    choices: ['User Profile', 'Company Info', 'Product Details'],
  },
  {
    type: 'input',
    name: 'count',
    message: 'How many entries would you like?',
    validate: (value) => {
      const valid = !isNaN(parseInt(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    if (answers.dataType === 'User Profile') {
      const result = Array(answers.count).fill().map(() => createRandomUser());
      console.log(result);
    } else if (answers.dataType === 'Company Info') {
      const result = Array(answers.count).fill().map(() => createRandomCompany());
      console.log(result);
    } else if (answers.dataType === 'Product Details') {
      const result = Array(answers.count).fill().map(() => createRandomProduct());
      console.log(result);
    }
  });



//import { faker } from '@faker-js/faker';
//
//
//export function createRandomUser() {
//  return {
//    userId: faker.string.uuid(),
//    username: faker.internet.username(),
//    email: faker.internet.email(),
//    avatar: faker.image.avatar(),
//    password: faker.internet.password(),
//    birthdate: faker.date.birthdate(),
//    registeredAt: faker.date.past(),
//  };
//}
//export const users = faker.helpers.multiple(createRandomUser, {
//  count: 5,
//});
//console.log(createRandomUser());

//import inquirer from 'inquirer';
//
//inquirer
//  .prompt([
//    /* Pass your questions in here */
//  ])
//  .then((answers) => {
//    // Use user feedback for... whatever!!
//  })
//  .catch((error) => {
//    if (error.isTtyError) {
//      // Prompt couldn't be rendered in the current environment
//    } else {
//      // Something else went wrong
//    }
//  });
//  console.log(inquirer);
//import axios from 'axios';
//
//console.log(axios.isCancel('something'));