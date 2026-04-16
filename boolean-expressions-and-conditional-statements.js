/*
Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.
*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let hasSword = false; // Added additional item

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains using your torch.");
  
  // Nested conditional and new scenario
  const caveChoice = readline.question("You find a hidden cave. Do you 'enter' or 'ignore' it? ");
  
  if (caveChoice === "enter" || hasMap) {
      console.log("You navigate the cave and find a hidden sword!");
      hasSword = true; 
  } else if (caveChoice === "ignore" && !hasSword) {
      console.log("You walk past safely, but remain unarmed.");
  } else {
      console.log("You wander around the mountain peak.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");

} else if (choice === "village") {
  console.log("You find your way to the village gates.");
  
  // Nested conditional checking the new item
  const action = readline.question("A monster attacks the gate! Do you 'fight' or 'run'? ");
  
  if (action === "fight" && !hasSword) {
      console.log("You try to fight without a weapon. It doesn't end well. Game Over.");
  } else {
      console.log("You run away and survive another day.");
  }

} else {
  console.log("You get lost and wander aimlessly.");
}