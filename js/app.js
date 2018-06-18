//
console.log("I am alive!");



//Conceptual Questions:

//1. We assign a variable by using either const or let and defining the variable with =.  i.e. let horse = "yummy";
//2. We can change the value of a mutable variable by referencing the variable and redefining it.  i.e. horse = "protein";
//3. We can assign an existing variable to a new variable by referencing the pre-existing variable.  i.e. 


//Strings:

let firstVariable = "Hello World";
firstVariable = 1062;
let secondVariable = firstVariable;
secondVariable = "Goodbye World";

console.log(secondVariable);

//The value of firstVariable has been redefined first; by referencing it and redefining it with an =, secondly; by adding 
//it to secondVariable and third; referencing and redefining secondVariable.  This changes firstVariable's definition to 
//"Goodbye World" from "Hello World".

let yourName = "Shabbadoo";

console.log("Hello, my name is " + yourName);


//Booleans:

 const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

a != b;
c < d;
'Name' == 'Name';
a + b == c;
a * a == d;
e == 'Kevin';
48 != '48';


//The Farm:

let animal = "heifer";
let cow = "heifer";

animal = "horse";

if (animal == cow){
  console.log("Mooooo!")
} else {
  console.log("You're not a cow!")
}


//Driver's Ed:

let driverAge = 18
if (driverAge >= 16){
  console.log("Here are the keys!");
} else {
  console.log("Better take the bus!")
};



//Just Loop It:

for (i = 0; i <= 100; i++){
  console.log(i);
}

for (i = 40; i <= 1000; i++){
  console.log(i);
}

for (i = 40; i <= 1000; i += 2){
  console.log(i);
}



//Let's Get Even:

for (i = 0; i <= 100; i+=2){
  console.log(`${[i]}"is an even number"`);
}



//Give Me Five:


for (i = 0; i <= 100; i++){
  if ([i] % 5 === 0);{
  console.log(`"I found a"${[i]}"High Five!"`);
  } if ([i] % 3 == 0);{
  console.log(`"I found a"${[i]}"Three's a crowd!`);
  } else {
   return [i];
   }
}


//Savings Account:











//Multiples of 3 and 5:














//// Easy Does It:

Let quotes = ["We're gonna need and bigger boat", "Where we're going, we don't need roads...", "History is'a made at night!  Character is'a what you are in the dark!"]



////Random:


const randomThings = [1, 10, "Hello", true];

randomThings[2] = "World";

console.log(randomThings);


////We've Got Class:


const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

ourClass[2] = "Octocat";

ourClass.push("Cloud City");

console.log(ourClass);


////Mix It Up:

const myArray = [5 ,10 ,500, 20];

myArray.push("Egon");

console.log(myArray);

myArray.pop();

console.log(myArray);

myArray.unshift("Bob Marley");

console.log(myArray);

myArray.shift();

console.log(myArray);

myArray.reverse();

console.log(myArray);


////Biggie Smalls:

let number  = 15;

if (number < 100){
  console.log("Little Number");
} if (number >= 100)
  console.log("Big Number");


////Monkey In The Middle:

let numba1 = 7;

if (numba1 <= 5){
  console.log("Little number")
} else if (numba1 >= 10){
  console.log("Big number")
} else {
  console.log("Monkey")
}


////What's In Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

let kristynShoe = kristynsCloset.shift();

console.log(kristynShoe);

kristynsCloset.splice(5,0, "raybans");

console.log(kristynsCloset);

kristynsCloset[4] = "stained yellow hat";

console.log(kristynsCloset);

console.log(thomsCloset[0][0]);

console.log(thomsCloset[1][1]);

console.log(thomsCloset[2][0]);

console.log("Thom is looking fierce in his " + thomsCloset[0][3] + " and " + thomsCloset[1][0] + " and " + thomsCloset[2][1]);




//Functions:

///Print Greeting:

const printGreeting = (name) => {
  console.log(`"Hello there ${name}`);
   
}

printGreeting("Slimer");


////Reverse Word Order:


const reverseWordOrder = () => {
  
  let mobyDick = "Ishmael me Call";
  
  let splitsville = mobyDick.split(" ");
  
  let flipThatBitch = splitsville.reverse("");
  
  let putItBackTogether = flipThatBitch.join("");
}

console.log(reverseWordOrder);


////Calculate:

const calculate = (num1, num2, operation) => {
  if (calculate == "add"){
    (num1 + num2);
  } else if (calculate == "sub"){
    (num1 - num2);
  } else if (calculate == "exp"){
    (num1 ** num2);
    else if (calculate == "div"){
      (num1 / num2);
  } else if (calculate == "mul"){
    (num1 * num2);
  } else console.log("Whimmy wham wham whozzle!")
             }
  
}

console.log(calculate (4,3, add));


////1.

const printCool = (name) => {
  console.log(`${name} "is cool!"`);
   
}

printCool("The Jabberwockey");


////2.










////3.

const isAVowel = () => {
   
  let yippiKyYay = "abcdefghijklmnopqrstuvwxyz";
  
  let splits = yippiKyYay.split(" ");
  
  for (i =0; i <= yippiKyYay.length; i++);
  
  if ([i] == "a", "e", "i", "o", "u"){
    console.log([i] + " is a vowel.");
  } else return console.log("Is a consonant");

}

console.log(isAVowel);


////4.

const getTwoLengths = (str1, str2) => {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  for (i = 0; i <= str1.length; i++);
  for (i = 0; i <= str2.length; i++); 
}






















































