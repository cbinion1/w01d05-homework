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



































