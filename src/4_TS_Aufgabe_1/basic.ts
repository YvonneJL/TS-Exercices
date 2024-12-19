console.log("welcome");

// & AUFGABE 2
console.log("AUFGABE 2");

let dogName = "Bobby";
console.log(dogName);

dogName = "11";


let wahrFalsch: boolean = true;

wahrFalsch = "hallo";
// String geht nicht auf boolean
wahrFalsch = false;

let dayOfWeek: string = "Thursday";
dayOfWeek = true;
// boolean auf string geht nicht
dayOfWeek = 13;
// number auf string geht nicht

dayOfWeek = "Friday";

let seventeen: number = 17;
const sum = seventeen + 44;
console.log(sum);


// & AUFGABE 3
console.log("AUFGABE 3");

// Addition
let addition_operator: number = 1 + 1;
console.log('addition: ' + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log('subtraktion: ' + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log('multiplication: ' + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log('division: ' + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log('modulus: ' + modulo_operator);


// & AUFGABE 4
console.log("AUFGABE 4");

const x: number = 20;
const y: number = 30;

const addition: number = x + y;
console.log(addition);

const subtraction: number = x - y;
console.log(subtraction);

const multiply: number = x * y;
console.log(multiply);

const divide: number = x / y;
console.log(divide);

const z: number = 10;

const resultOne: number = (x * y) / z;
console.log(resultOne);

let a: number = 15;
let b: number = 9;
// hier musste ich const auf let wechseln, damit ich später inkrementieren und dekrementieren kann

const restAB: number = a % b;
console.log(restAB);

const c: number = 20;
const resultTwo: number = (a + b) * c;
console.log(resultTwo);

let increment: numer = ++a;
console.log(increment);

let decrement: number = --b;
console.log(decrement);

const resultThree: number = a - b;
console.log(resultThree);

console.log(resultOne % resultTwo);

// & AUFGABE 5
console.log("AUFGABE 5");

let scoreOne: number = 5 + 5 * 10;  
console.log('Ergebnis: ' + scoreOne);

let scoreTwo: number = (5 + 5) * 10;  
console.log('Ergebnis: ' + scoreTwo);

let scoreThree: number  = 0;  
scoreThree = scoreThree + 10;  
console.log('Ergebnis: ' + scoreThree);

scoreThree += 10;  
console.log('Ergebnis: ' + scoreThree)
// hier kommt anders als eins drüber 20 raus. eins drüber kommt 10 raus, weil wir ja dann mit dem Wert 10 anfangen (da sich Wert von scoreThree durch Rechnung vorher geändert hat auf 10)

let zahl: number  = 1;  
zahl = zahl + 1;  
zahl += 1;
console.log(zahl);
// hier kommt 3 raus, weil immer eins dazu kommt

zahl++;  
console.log('increment: ' + zahl);
// increment heisst plus 1. da zahl=3 aus vorherigen Rechnungen --> Ergebnis 4

zahl--;  
console.log('dekrement: ' + zahl);
// und hier wieder 3, siehe drüber