   //chapter 4
// let rain = true;
// if (rain) {
//     console.log("it will rain today.")
// }
// else {
//     console.log("it will not rain.")
// }

// // let age = 16;
// // if (age>15) {
// //     console.log("You are allowed")
// // }
// // else {
// //     console.log("your age is less")
// // }
// // age > 16 ? console.log("you are allowed") : console.log("your age is less")
// // let access = age > 18 ? "denied" : "allowed";
// // console.log(access)

// let age = 7;
// let cost = 0;
// let message;
// if (age < 3) {
//   cost = 0;
//   message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars.";
// } else {
//   cost = 7;
//   message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

// let day = "Mon"
// let msg = ""
// switch(day) {
//     case "Mon":
//         msg = "work"
//         break
//     case "Tue":
//         msg = "new work"
//         break
//     case "Sat":
//         msg = "weekend"
//         break
//     case "Sun":
//         msg = "holiday"
//         break
//     default:
//         msg = "default"
// }
// console.log(msg)

// let grade = "F"
// switch (grade) {
//   case "F":
//   case "D":
//     console.log("You've failed!");
//     break;
//   case "C":
//   case "B":
//     console.log("You've passed!");
//     break;
//   case "A":
//     console.log("Nice!");
//     break;
//   default:
//     console.log("I don't know this grade.");
// }



// //Chapter 3 (Objects)


// let person = {
//     name: "Student",
//     age: 22,
//     gender: "female",
//     height: 5,
//     works: false,
//     courses: {
//         compulsory: ["English", "urdu", "Islamiat"],
//         optional: "Maths",
//         total: 2,
//         completed: false
//     }
// }
// console.log(person)
// console.log(typeof person)
// console.log(person["name"])
// console.log(person.works)
// person.works = true
// console.log(person.courses.compulsory)

// let addresses = [
//     {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Miami"}
// ]

// console.log(addresses[0])
// addresses.push({street: "2nd avenue",
// number: "15",
// zipcode: "75001",
// city: "Addison",
// state: "Chicago"})
// addresses.push("address")
// console.log(addresses)

               //CHAPTER # 3
      //Practice exercise 3.1    
// let ShoppingList = ["Milk", "Bread", "Apple"];
// console.log(ShoppingList);
// let newList = ShoppingList.indexOf("Bread");
//  if(newList !== -1){
//   ShoppingList[newList] = "Banana"
//  }
//  console.log(ShoppingList.join(", "))

console.log("Practice exercise 3.1 ")
let shoppingList = ["Milk", "Bread", "Apple"];
shoppingList.splice(1, 1, "Banana");
console.log(shoppingList);
console.log(" ")

 //Practice exercise 3.2
 console.log("Practice exercise 3.2 ")
 let ShoppingList = ["Milk", "Bread", "Apple"];
 console.log(ShoppingList); 
 ShoppingList.splice(1, 1, "Bananas", "Eggs");
 console.log(ShoppingList); 
 ShoppingList.sort()
 console.log(ShoppingList); 
//  console.log(ShoppingList[0]);
//  console.log(ShoppingList); 
ShoppingList.splice(2, 0, "Carrot", "Lettuce");
console.log(ShoppingList); 
 
 let newList = ["juice", "pop"]; 
 let list3 = ShoppingList.concat(newList);
 console.log(list3);
 
//  console.log(newList[1])
//  console.log(list3);
list3.splice(0,1);
console.log(list3);
list3.splice(8, 0,"juice", "pop"); 
 console.log(list3); 
 console.log(" ");

          //Practice exercise 3.3
 console.log("Practice exercise 3.3 ")         
let Values1 = [1, 2, 3];
let SumOfArr = [Values1, Values1, Values1];
console.log(SumOfArr);
console.log(" ");

              //Practice exercise 3.4
console.log("Practice exercise 3.4 ")   
let myCar = {
   make: "Toyota",
   model: "Camry",
   year: 2022,
   color: "black",
   fuelType: "Gasoline",
   mileage: 15000,
   owners: ["Syed Aijaz Ali"],
   features: ["Air Conditioning", "Power Windows", "Bluetooth Connectivity"],
   forSale:["This Car is avalible for sell"]
 };
 console.log("My car is a " + myCar.make + " " + myCar.model);
 console.log("It is a " + myCar.year + " model.");
 console.log("The color is " + myCar.color);
 console.log("It runs on " + myCar.fuelType);
 console.log("Current mileage: " + myCar.mileage + " miles");
 console.log("Owners: " + myCar.owners);
 console.log("Features: " + myCar.features);
 myCar["color"] = "silver"
 console.log(myCar.color);
 console.log(myCar.forSale);
 console.log(" ");
 
             //Practice exercise 3.5
 console.log("Practice exercise 3.5 ")  
let people = {
   friends: []
 };
let friend1 = {
   firstName: "Maliha",
   lastName: "Naz",
   ID: 12
 };
 
let friend2 = {
   firstName: "Bisma",
   lastName: "Naz",
   ID: 13
 };
 
let friend3 = {
   firstName: "Mahnoor",
   lastName: "Naz",
   ID: 14
 };
 people.friends.push(friend1, friend2, friend3);
 console.log(people);
 console.log(" ");
                //ChapterProject
           console.log("ChapterProject");
const theList = ['Laurence', 'Svekis', true, 35, null, undefined];
         // {test: 'one',
         // score: 55},
         // ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift();
theList.push("last");
theList.unshift("First");
theList.splice(2, 3, "Middle", "hello world");
console.log(theList);
console.log(" ");

                //Company product catalog
           console.log("Company product catalog");
let inventory = [];
let item1 = {
  name: "Laptop",
  model: "XPS 13",
  cost: 1200,
  quantity: 10
};
let item2 = {
  name: "Smartphone",
  model: "iPhone 13",
  cost: 800,
  quantity: 20
};
let item3 = {
  name: "Headphones",
  model: "Bose QC35",
  cost: 250,
  quantity: 30
};
inventory.push(item1, item2, item3);
console.log("Inventory:", inventory);
console.log("Quantity of the third item:", inventory[2].quantity);


               //CHAPTER # 4
console.log(" ") 
                //Practice exercise 4.1
                console.log("Practice exercise 4.1")              
let myVariable = true;
console.log("The value of myVariable is:", myVariable);
if (myVariable) {
  console.log("myVariable is true. This message is printed.");
}
if (!myVariable) {
  console.log("myVariable is not true. This message is printed.");
} else {
  console.log("myVariable is true. This message is printed because the previous condition is not met.");
}
myVariable = false;

if (myVariable) {
  console.log("myVariable is true. This message is not printed.");
} else {
  console.log("myVariable is false. This message is printed.");
}
console.log(" ");

         //Practice exercise 4.2
         console.log("Practice exercise 4.2")           
let ageInput = prompt("Please enter your age:");

let userAge = parseInt(ageInput);
let message;
if (userAge >= 21) {
  message = "You are confirmed for entry to the venue and are able to purchase alcohol.";
}
else if (userAge >= 19) {
  message = "You are confirmed for entry to the venue, but alcohol purchase is denied.";
}
else {
  message = "You are denied entry to the venue.";
}
console.log(message);
console.log(" ");

         //Practice exercise 4.3
         console.log("Practice exercise 4.3")    
let ID = true; 
let Message = ID ? "You are allowed to enter the venue." : "Access denied. Your ID is not valid.";
console.log(Message);
console.log(" ");

         //Practice exercise 4.4
         console.log("Practice exercise 4.4")
let randomValue = Math.floor(Math.random() * 6)
let userQuestion = prompt("Ask the Magic 8-Ball a question:");
let response;

switch (randomValue) {
  case 0:
    response = "It is certain.";
    break;
  case 1:
    response = "Reply hazy, try again.";
    break;
  case 2:
    response = "Don't count on it.";
    break;
  case 3:
    response = "Signs point to yes.";
    break;
  case 4:
    response = "Better not tell you now.";
    break;
  case 5:
    response = "Outlook not so good.";
    break;
  default:
    response = "Invalid question.";
}
let finalResponse = `You asked: "{userQuestion}"\gThe Magic 8-Ball says: ${response}`;
console.log(finalResponse);
console.log(" ");

         //Practice exercise 4.5
         console.log("Practice exercise 4.5")
const prizeInput = prompt("Select a number between 0 and 10 to win a prize:");
const selectedNumber = parseInt(prizeInput);
const outputMessage = "My Selection: ";
let prize;

switch (selectedNumber) {
  case 0:
    prize ="Congratulations! You win a vacation to a tropical island."
    {alert ("Congratulations! You win a vacation to a tropical island.")}
    break;
  case 1:
  case 2:
  case 3:
    prize = "You win a gift card to your favorite restaurant.";
    {alert("You win a gift card to your favorite restaurant.")}
    break;
  case 4:
  case 5:
  case 6:
    prize = "You get a weekend getaway package.";
    {alert("You get a weekend getaway package.")}
    break;
  case 7:
  case 8:
    prize = "You win a new smartphone.";
    {alert("You win a new smartphone.")}
    break;
  case 9:
  case 10:
    prize = "You win a grand prize! A brand new car!";
    {alert("You win a grand prize! A brand new car!")}
    break;
  default:
    prize = "Sorry, your selection is out of range.";
    {alert("Sorry, your selection is out of range.")}
    break;
}
console.log(outputMessage + prize);
console.log(" ");

         //Chapter projects
         //Evaluating a number game
         console.log("Chapter projects")
let userNumber = parseFloat(prompt("Enter a number:"));
let dynamicNumber = 22;
if (userNumber > dynamicNumber) {
  console.log(`Your number ${userNumber} is greater than ${dynamicNumber}.`);
} else if (userNumber === dynamicNumber) {
  console.log(`Your number ${userNumber} is equal to ${dynamicNumber}.`);
} else if (userNumber < dynamicNumber) {
  console.log(`Your number ${userNumber} is less than ${dynamicNumber}.`);
}
console.log(" ");

              //Friend checker game
let myFriend = prompt("Tell me your name?");
switch (myFriend){
  case "waleed", "mahnoor", "Yusra":
    person = "Known person"
  {alert("I know you")} 
     break;
     default:
      person = "Unknown person"
      {alert("Unknown Person")}
      break;
}
console.log(person);
console.log(" ");

               //Rock Paper Scissors game
let choices = ["Rock", "Paper", "Scissors"];
let playerIndex = Math.floor(Math.random() * 3); 
let computerIndex = Math.floor(Math.random() * 3);
let resultMessage;
if (playerIndex === computerIndex) {
    resultMessage = "It's a tie!";
} else if (
    (playerIndex === 0 && computerIndex === 2) ||
    (playerIndex === 1 && computerIndex === 0) ||
    (playerIndex === 2 && computerIndex === 1)
) {
    resultMessage = "Player wins!";
} else {
    resultMessage = "Computer wins!";
}
let playerChoice = choices[playerIndex];
let computerChoice = choices[computerIndex];

console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(resultMessage);

