// & Conditionals-Level-2_1
console.log("Level 2_1");

const resultJohn = 22 * 5 + 170;
const resultMeike = 34 * 5 + 168;
console.log(`Johns score ist: ${resultJohn}`);
console.log(`Maikes score ist: ${resultMeike}`);


if (resultJohn > resultMeike) {
    console.log("John gewinnt");
} else {
    console.log("Maike gewinnt das Spiel");
};


// & Conditionals-Level-2_3
console.log("Level 2_3");

let number: number = 35; 
// hier unterschiedliche Zahlen versuchen, laut Aufgabenstellung


const differenceTwentyseven = number - 27;

if (differenceTwentyseven > 27) {
    console.log(differenceTwentyseven * 2);
}  else {
    console.log("Die Differenz ist kleiner als 27");
}


// & Conditionals-Level-1_4
console.log("Level 1_4");
// Hier ist .length neu (greift die Länge eines Inputfeldes, funktioniert also wie .value)




const button = document.querySelector("button") as HTMLButtonElement;
button.onclick = passwordSave;

function passwordSave() {
    const passwordElement = document.querySelector("#password") as HTMLInputElement;
    const passwordValue = passwordElement.value;
    const passwordLength = passwordValue.length;

    const ueberpruefung = passwordLength > 8 ? console.log("Das Passwort ist sicher") : console.log("Das Passwort ist zu kurz");
    console.log(passwordLength);
}

// & Ternary-Operator-TS-Level-2_2
console.log("Ternary-Operator-TS-Level-2_2");

// random booleans vergeben mit random Zahl -->spuckt dann mal wahr/falsch aus
const isOnline = Math.random() < 0.5;
const isPremiumUser = Math.random() < 0.5;
const isAdult = Math.random() < 0.5;


// if else Bedingungen mit Ternary Operator
const trueBoolean = isOnline == true ? console.log("online") : console.log("offline");
let neueVariable: number;


const truePremiumUser = isPremiumUser == true ? neueVariable = 19.99 : neueVariable = 12.99;
console.log(neueVariable);


const trueisAdult = isAdult == false ? window.alert("Keine Benachrichtigung") : window.confirm("Willkommen");
console.log(isAdult);
// letzte Zeile-->in Konsole anzeigen, zur Überprüfung



// & Zweiter Teil der Aufgabenstellung, also 2b quasi
const randomAge = Math.floor(Math.random() * 121);
// Math.floor rudnet die Zahl, am Ende mit 121 multiplizieren, dass die Zahl zwischen 0 und 120 ist

const randomSalary = Math.floor(Math.random() * 15001);

let isMiddleAged: boolean;

const age = randomAge >= 40 && randomAge <= 65 ? isMiddleAged = true : isMiddleAged = false;
console.log(randomAge);
console.log(isMiddleAged);



console.log(randomSalary);
if (randomSalary >= 100000) {
    console.log("You are rich!");
} else if (randomSalary>= 1500 && randomSalary <= 100000) {
    console.log("Not too bad");
} else {
    console.log("Keep trying");
}

// & Conditionals-Level-2_4
console.log("Level 2_4");

const zufallsZahl = Math.floor(Math.random() * 78);
const zweiteZahl = Math.floor(Math.random() * 78);

console.log(zufallsZahl);
console.log(zweiteZahl);

if (zufallsZahl == zweiteZahl) {
    console.log("Was für ein Zufall");
} else if (zufallsZahl > zweiteZahl) {
    console.log("Die Zufallszahl ist größer als die zweite Zahl");
} else {
    console.log("Die zweite Zahl ist größer als die Zufallszahl");
}


switch (true) {
    case zweiteZahl == zufallsZahl:
        console.log("Was für ein Zufall");
        break;
    case zweiteZahl < zufallsZahl:
        console.log("Die zweite Zahl ist kleiner");
        break;
    case zweiteZahl > zufallsZahl:
    console.log("Die zweite Zahl ist größer");
}
// kein gutes Beispiel für switch








