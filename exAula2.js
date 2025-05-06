//in class

/*alert("Hello World!");*/

/*let input = prompt("insert number");
console.log(`input ${input}`);

Math.random() * 10; //para limitar até 10*/

//Math.floor(Math.random() * 6); //dado, a arrendondar para baixo
/*
console.log(Math.floor(Math.random() * 6) + 1)

let input = prompt("insert number");
console.log(`input ${input}`);
console.log(typeof(parsInt(input)));

if (parsInt(input) === (Math.floor(Math.random() * 6) + 1)) {
    console.log("you win")
} else {
    console.log("try again")
}*/

/*
console.log(Math.floor(Math.random() * 6) + 1);*/
/*let input = prompt("insert number");
console.log(typeof (parseInt(input)));

while (input != (Math.floor(Math.random() * 10) + 1)) {

    if (input != console.log(Math.floor(Math.random() * 10) + 1)) {
        alert("try again")
        let input = prompt("insert number");
    } else if (input === console.log(Math.floor(Math.random() * 10) + 1)) {
        alert("you win")
    }
}*/

/*--------------------------------------------------------------------------
--------------------------------------------------------------------------*/
/*TO DO
roll a number between 1 and 10
ask the user for a number
while the guess is different for the random number, keep asking for a new number*/



//o jogo
/*
while (input !== n) {
    console.log(input)
}*/
/*
switch (input) {
 case (input != n):
    text = "Try Again...";
    break;
case (input === n):
    text = "Lucky Guess!";
    break;
}*/
/*
if (n === input) {
    console.log("You Win");
} else if (n !== input) {
    console.log("Try again");
    let input = prompt("Indica um numero entre 1 e 10");
}
*/
/*if (n !== input) {
    console.log(n);
    console.log("Try again");
    ;
} else if (n === input) {
    console.log(n);
    console.log("You Win");
}*/

//pedir ao user por um nr
/*let parseInt(input) = prompt("Indica um numero entre 1 e 10");
console.log(parseInt(input));

//instruções para dar um numero aleatorio entre 1 e 10
/*let n = Math.floor((Math.random() * 10) + 1);
console.log(n);

switch (input) {
    case (input != n):
       text = "Try Again...";
       break;
   case (input === n):
       text = "Lucky Guess!";
       break;
   }
*/
/*
let input = prompt("insert number");
console.log(parseInt(input));


if (input != console.log(Math.floor(Math.random() * 10) + 1)) {
    alert("try again")
    console.log(parseInt(input));
} else if (input == console.log(Math.floor(Math.random() * 10) + 1)) {
    alert("you win")
}
*/
//console.log(Math.floor(Math.random() * 10) + 1)
/*
let input = prompt("insert number");
console.log(`input ${input}`);
console.log(parseInt(input));
console.log(Math.floor(Math.random() * 10) + 1);

if (parseInt(input) === (Math.floor(Math.random() * 10) + 1)) {
    console.log("you win");
} else if (parseInt(input) !== (Math.floor(Math.random() * 10) + 1)) {
    console.log("try again");
    let input = prompt("insert number");
    console.log(`input ${input}`);
}*/
//funciona mas não diz se acertas
/*
while (input !== n) {
    console.log("try again");
    let input = prompt("Indica um numero entre 1 e 6");
    console.log(parseInt(input));
    let n = (Math.floor(Math.random() * 6) + 1);
    console.log(n);
}*/
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//pedir ao user por um nr
//let input = prompt("Indica um numero entre 1 e 10");
//console.log(parseInt(input));

//instruções para dar um numero aleatorio entre 1 e 6

/*
while (input !== n) {
    alert(" =( oh no, try again...");
    let input = prompt("Indica um numero entre 1 e 10");
    console.log(input);
    console.log(n);

    if (input === n) {
        alert(" =D YOU WIN!!! XD");
        console.log(n);

    } else {
        alert(" =( oh no, try again...");
        let input = prompt("Indica um numero entre 1 e 10");
        console.log(input);
        console.log(n);
    }
}*/
//5 hours to came up with this code up here!

//below: a failed experiment...
/*let input = parseInt(prompt("Indica um numero entre 1 e 10"));
let n = Math.floor(Math.random() * 10) + 1;

switch (input) {
    case (input != n):
        alert(" =( oh no, try again...");
        console.log(n);
        console.log(input);
        break;
    case (input === n):
        alert("=D YOU WIN!!! XD");
        console.log(n);
        console.log(input);
        break;
    default: 
    console.log(input);
}*/

/*
if (input === n) {
    alert("=D YOU WIN!!! XD");
    console.log(n);
} else if (input !== n){
    while (input !== n) {
        alert(" =( oh no, try again...");
        let input = prompt("Indica um numero entre 1 e 10");
        console.log(input);
        let n = (Math.floor(Math.random() * 10) + 1);
        console.log(n);
    }
}
*/


//-----------------i'm not proud of myself =S ---------------------------
//sugestão chatgpt:
/*let n = Math.floor(Math.random() * 10) + 1; // Gera o número uma única vez
let input = parseInt(prompt("Indica um numero entre 1 e 10"));

while (input !== n) {
    alert(" =( oh no, try again...");
    input = parseInt(prompt("Indica um numero entre 1 e 10")); // Atualiza o input
}

alert("=D YOU WIN!!! XD");
console.log(n);*/
//segunda sugestão do chatgpt
// Gera um número aleatório entre 1 e 100
/*const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let acertou = false;

while (!acertou) {
  // Pede ao usuário para inserir um número
  const input = prompt("Digite um número entre 1 e 100:");
  
  // Converte o input para número
  const palpite = Number(input);
  
  // Verifica se o input é válido
  if (isNaN(palpite)) {
    alert("Por favor, insira um número válido.");
    continue;
  }
  
  // Mostra no console os dados do usuário e do computador
  console.log(`Usuário input: ${palpite}`);
  console.log(`Número do computador: ${numeroSecreto}`);
  
  // Compara o palpite com o número secreto
  if (palpite === numeroSecreto) {
    alert("Parabéns! Você acertou!");
    acertou = true;
  } else {
    alert("Tente novamente!");
  }
}*/
/*
let input = parseInt(prompt("Indica um numero entre 1 e 10"));
let n = (Math.floor(Math.random() * 10) + 1);

while (input !== n) {
    alert(" 😦 oh no, try again...");
    let input = parseInt(prompt("Indica um numero entre 1 e 10"));
    console.log(`User's Number: ${input}`);
    console.log(`Computer's Number: ${n}`);

    if (input === n) {
        alert(" 😄 YOU WIN!!! 😄");
        console.log(`User's Number: ${input}`);
        console.log(`Computer's Number: ${n}`);

    } else {
        alert(" 😦 oh no, try again...");
        let input = parseInt(prompt("Indica um numero entre 1 e 10"));
        console.log(`User's Number: ${input}`);
        console.log(`Computer's Number: ${n}`);
    }
}
*/






// An adventure begins...
// ---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---***---**

//--------------i can't simply copy/paste the Ai generated code--------------

//back to the code that took me 5 hours to make and wasnt working properly

/*
let input = prompt("Indica um numero entre 1 e 10");
console.log(`User's Number: ${parseInt(input)}`);
let n = (Math.floor(Math.random() * 10) + 1);
console.log(`Computer's Number: ${n}`);

if (input == n) {
    alert(" 😄 YOU WIN!!! XD");
} else {
    while (input != n) {
        alert(" 😦 oh no, try again...");
        let input = prompt("Indica um numero entre 1 e 10");
        console.log(`User's Number (while): ${parseInt(input)}`);
        let n = (Math.floor(Math.random() * 10) + 1); 
        console.log(`Computer's Number(while): ${n}`);
            //the mistake here, is because each time this part runs, it creates a new n, different from the one up there, so if i event get the right number in this comparison, there is know way to aknowledge that, ive wrote «(while)» to be able to see that i was repeating those commands
    }
}
*/

//lets fix the first mistake (i thank my brother and chatgpt for pointing this out):

/*
let input = prompt("Indica um numero entre 1 e 10");
console.log(`User's Number: ${parseInt(input)}`);
let n = (Math.floor(Math.random() * 10) + 1);
console.log(`Computer's Number: ${n}`);

if (input === n) {
    alert(" 😄 YOU WIN!!! XD");
} else {
    while (input !== n) {
        alert(" 😦 oh no, try again...");
        console.log(`User's Number(while no let): ${parseInt(input)}`);
        console.log(`Computer's Number(while no let): ${n}`)
            //like this the game is stuck is always giving the same input and n
    }
}
//probably the way that if and else are placed isnt right either, so trial-and-error method
*/

//switching if and while places
/*
let input = prompt("Indica um numero entre 1 e 10");
console.log(`User's Number: ${parseInt(input)}`);
let n = (Math.floor(Math.random() * 10) + 1);
console.log(`Computer's Number: ${n}`);

while (input == n) {
    alert(" 😄 YOU WIN!!! XD");
}
if (input != n) {
    alert(" 😦 oh no, try again...")
    console.log(`User's Number(if): ${parseInt(input)}`);
    console.log(`Computer's Number(if): ${n}`);
} 
//like this the game runs one time, on refreshing page, to compare input and n it has to be with == and != (=== and !== doesnt give the desired result); the messages are working properly
*/

//now changing the while condition, because «While Loop is used when we want to repeat a set of instructions, while a condition is true», so what i want is to relaunch the game each time the n != input

const input = prompt("Give a number between 1 and 10:");
console.log(`User's Number: ${parseInt(input)}`);
const n = (Math.floor(Math.random() * 10) + 1);
console.log(`Computer's Number: ${n}`);
/*
while (input != n) {
    alert(" 😦 oh no, refresh to try again...");
    window.location.reload(true);
    window.location.replace("https://ellie-yeah.github.io/guess_the_number/");
}
if (input == n) {
    alert(" 😄 YOU WIN!!! XD");
} */


if (n !== input) {
    alert(`😦 Oh that's not it, try again\nComputer has played: ${n}\nYou have played ${input}`);
    location.reload();
} else {
    alert(`😄 You win!\nComputer has played: ${n}\nYou have played ${input}`);
}
//i've made the variables const - because while inspecting the webpage, to see the console, it was giving me some errors, and one on them mentioned "let", so I decided to use "const" instead

// like this the game works, as in the messages are displaying correctly, and the comparisons aswell, BUT, i need to refresh the page each time to play a new game, even after getting the "try again"
//i wonder if there is some command to refresh the page... found something here: https://codeworks.me/blog/how-to-reload-a-page-in-javascript/ i'll try this: «window.location.reload();»

//the brain cells casualities are massive u_u but it's working!!!!
