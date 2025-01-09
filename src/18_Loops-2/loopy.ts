import { eachWeekOfInterval } from "date-fns";

//& Loops-TS-Level-1_10
console.log("Loops-TS-Level-1_10");

//..Schreibe eine Funktion getHighestNumber
//..Die Funktion bekommt als Parameter ein Array von numbers übergeben
//..Die Funktion hat als Rückgabetyp den Typ number
//..Es soll der höchste Wert aus dem übergebenen Array von Zahlen ermittelt werden
// statt Loop habe ich ... Spread Operator, um aus einem Array eine Abfolge von Zahlen zu machen und Math.max (das man nicht auf Arrays anwenden kann) benutzt


function getHighestNumber(numberArray: number[]) {
    let numberMax =  Math.max(...numberArray);
    console.log(numberMax);
}; 

const arrayOne = [1, 2, 3, 8, 5];
getHighestNumber(arrayOne);

const arrayTwo = [1, 2, 3, 8, 5, 12, 4, 7, 34, 99, 3];
getHighestNumber(arrayTwo);




//i als Zähler: muss als Bedingung also kleiner= als die Länge vom Array(also die Anzahl der Nummern)
// dann soll maxNumber nur überschrieben werden, wenn sie kleiner ist als die Zahl mit der sie gerade verglichen wird 
// deshalb --> eine if Abfrage im Loop
// und falls das so ist, soll die maxNumber überschrieben werden mit der aktuell verglichenen Nummer numberArray[i]


function highestNumbermitJenny (numberArray2: number[]) {
    let maxNumber: number = numberArray2[0];
    // i = 1, da erste Nummer mit Index 0 oben unter maxNumber shcon definiert
    for (let i = 1; i <= numberArray2.length; i++) {
        if (maxNumber < numberArray2[i]) {
            maxNumber = numberArray2[i];
        }
    };
    // nach der Schleife muss der Wert daraus returned werden
    return maxNumber; 
};

console.log(`The highest number is: ${highestNumbermitJenny(arrayTwo)}`);






//& Loops-TS-Level-2_3
console.log("Loops-TS-Level-2_3");

//..Eine Funktion soll die Anzahl der Vokale (A, E, I, O, U) in einem übergebenen String zählen und zurückgeben.
//..Verwende eine Schleife, um jeden Buchstaben im übergebenen String zu durchzugehen, und eine Bedingung, um zu prüfen, ob es sich um einen Vokal handelt.

// mit .toLowerCase sorge ich dafür, dass später die Abfrage case-INsensitive ist 
// mit .split den String in einen Array aus einzelne Buchstaben wandeln
// mit .filter die Vokale heraus filtern --> wichtig: diesen Wert returnen, da "vowels" sonst leer.
// mit .length noch die Anzahl der Vokale ausgeben


function getNumberOfVowels (sentence: string) {
    const arrayOfLetters = sentence.toLowerCase().split("");
    console.log(arrayOfLetters);
    const vowels = arrayOfLetters.filter ((letter) => {
        return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u";
    });
    console.log(vowels);
    console.log(`Die Anzahl der Vokale lautet: ${vowels.length}`);
}

const example = "Der Hahn kraeht";
getNumberOfVowels(example);

const exampleTwo = "Ich verstehe das alles noch nicht so gut"
getNumberOfVowels(exampleTwo);





//& Loops-TS-Level-2_4
console.log("Loops-TS-Level-2_4");

//..Schreibe eine Funktion addToFifty(): void
//..In der Funktion soll in einer Schleife eine Zufallszahl zwischen 1 und 10 generiert werden
//..Die Zahl soll jeweils auf der Konsole ausgegeben werden
//..Die Zufallszahlen sollen so lange aufaddiert werden, bis die Zahl 50 überschritten wird
//..Am Ende wird z. B. beim Gesamtergebnis 53 Folgendes ausgegeben
//..'53 > 50. Stopping right here.'


// hier mit einer while Schleife arbeiten, da Bedingung unabhängig vom index/zähler
// for der while Schleife eine Variable definieren (unser Endergebnis, das mit 0 startet und bis über 50 addiert werden soll)
// in der Schleife: die random Number in Variable speichern
// wenn ich addedNumbers += randomNumber weg lasse, läuft die Schleife endlos, da die Bedingung an addedNumbers geknüpft ist
// durchs Einfügen läuft die Schleife jetzt bis Bedingung erfüllt und addedNumbers += fügt immer wieder randomNumber hinzu (+= fügt hinzu statt zu überschreiben)
function addToFifty() : void {
    let addedNumbers = 0;

    while (addedNumbers <= 50) {
        const randomNumber: number = Math.floor(Math.random()* 10) + 1;
        console.log(randomNumber);
        addedNumbers += randomNumber;
    }
    console.log(`${addedNumbers} > 50. Stopping right there`);
};

addToFifty();


//& Loops-TS-Level-3_4
console.log("Loops-TS-Level-3_4");

//..user gibt Zahl ins Input Feld-das wird die Maximalzahl
//..wählt dann 2 Mal eine Zahl zwischen 2 und 9
//..jetzt soll bei allen Zahlen bis zur Maximalzahl geschaut werden, ob sie durch eine der beiden ausgewählten Zahlen teilbar sind
//..wenn sie durch eine der beiden Zahlen teilbar sind, dann werden sie zu den beiden ausgesuchten Zahlen zwischen 2 und 9 dazu addiert

const inputFeld = document.querySelector<HTMLInputElement>("#input");
const selectOne = document.querySelector<HTMLSelectElement>("#number-one");
const selectTwo = document.querySelector<HTMLSelectElement>("#number-two");

const button = document.querySelector("#button");
const output = document.querySelector("#result");
// die .values schreibe ich dann erst in die Funktion, da globales direkt beim Laden der Seite gelesen wird und sich dann nicht mehr ändert
//beim Laden der Seite ist input aber leer
// die .values also erst innerhalb der Funktion dekklarieren




// die if Abfrage nach dem Vorhandensein des buttons und dem p-tag kommen ganz außen hin
// dann der eventListener in den das Event und die Funktion kommt
// erst hier deklariere ich dann die .values
// vor meiner Schleife muss ich die Zahl, die ich als Ergebnis bekomme und ständig verändere als let Variable deklarieren
// sie ist zuerst 0 und wird dann immer weiter gemäß der Bedingung aufaddiert
// dann wieder die if Abfrage nach dem Vorhandensein der input Felder
// die for Schleife hat als Bedingung, dass der Zähler nur bis max. zum inputValue durch geht. also 0 bis zB Eingabe 14
// innerhalb der Schleife muss nochmals eine if Eingabe, um zu prüfen, ob die Zahl, die addiert werden soll durch die selected Zahlen teilbar ist
// un ddie Schleife macht dann aus let addedNumber += i, die addierte Zahl--> also fügt durch += immer weiter die Zahlen hinzu
// im äußersten Funktionsteil kommt dann die DOM Manipulation-->Anzeige des Ergebnisses
if (button && output) {
    button.addEventListener("click", function calculate() {
        const selectTwoValue = Number(selectTwo?.value);
        const selectOneValue = Number(selectOne?.value);
        const inputValue = Number(inputFeld?.value);
    // console.log(inputValue);
    // console.log(selectTwoValue);
    // console.log(selectOneValue);
        let addedNumbers = 0;
        if (selectOneValue && selectTwoValue && inputValue) {
            for(let i=0; i < inputValue; i++) {
                if (i % selectOneValue === 0 || i % selectTwoValue === 0) {
                    addedNumbers += i;
                };
        }
        
    }; 
    output.innerHTML = `${addedNumbers}`;
}) 
};
