/*TO DO
roll a number between 1 and 10
ask the user for a number
while the guess is different for the random number, keep asking for a new number*/

//random number
let compNumber = Math.floor(Math.random() * 10) + 1;
//ask the user
let userNumber = parseInt(prompt(`Between 1 and 10, \nGuess the Number:`))

console.log(`Computer has played: ${compNumber}`);
console.log(`You have played ${userNumber}`);

//compare
if (compNumber !== userNumber) {
    alert(`😦 Oh that's not it, try again\nComputer has played: ${compNumber}\nYou have played ${userNumber}` )
    location.reload();
} else {
    alert(`😄 You win!\nComputer has played: ${compNumber}\nYou have played ${userNumber}`)
}


//results
