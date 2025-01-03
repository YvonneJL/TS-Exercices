// & Arrays-TS-Sort-Level-1_2
console.log("Arrays-TS-Sort-Level-1_2");

const codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];


// nächste Zeile: wie man Strings umgekehrt sortiert
const sortDescending = codingLanguages.slice().sort((a, b) => b.localeCompare(a));
console.log(sortDescending);




// mit .reverse --> zuerst mit .sort() aufsteigend sortierend, dann .reverse() anwenden
const europeanCountries = ["Germany", "Spain", "France", "Netherlands", "Poland", "Austria", "Italy"];

const sortEuropeanCountries = europeanCountries.slice().sort().reverse();
console.log(sortEuropeanCountries);







// & Arrays-TS-Sort-Level-2_1
console.log("Arrays-TS-Sort-Level-2_1");

const words = ["Sergio", "Hannah", "Regallager", "Reliefpfeifer", "Rentner"];
console.log(words);



// Funktion die, die Zeichen eines x-beliebigen  String umdreht

function reverseOneWord (randomName: string) {
    return randomName.split("").reverse().join("");
}
// .split("")-->teilt strings in einzelne Zeichen auf, .reverse() dreht sie dann um und .join("") fügt die Zeichen wieder zusammen

console.log(reverseOneWord("Yvonne"));
console.log(reverseOneWord("Sergio"));
console.log(reverseOneWord("Hannah"));
console.log(reverseOneWord("Regallager"));
console.log(reverseOneWord("Reliefpfeifer"));
console.log(reverseOneWord("Renter"));
console.log(reverseOneWord("Nebel"));
console.log(reverseOneWord("Ella mag alle Bohnen"));
console.log(reverseOneWord("han nesaH has ennaH"));


// !HIER NOCH BONUSAUFGABE! (von Debo)

const names: string[] = [
    "Sergio",
    "Hannah",
    "Regallager",
    "Reliefpfeiler",
    "Rentner",
];

function reverseName(name: string) {
    const reversedName = name.split("").reverse().join("");
    return reversedName;
}

const namesReverse = names.map((name) => console.log(reverseName(name)));








// & Arrays-TS-Level-1_11
console.log("Arrays-TS-Sort-Level-1_11");

const stringOfWords: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

const includesPiper = stringOfWords.includes("Piper");
console.log(includesPiper);
const includesPiperSmallLetter = stringOfWords.includes("piper");
console.log(includesPiperSmallLetter);

// !Welche Methode kann man noch verwenden, um das case sensitive zu umgehen?


// Bei Strings auf der Suche nach Substrings zeigt der Index natürlich jede einzelne Ziffer an und nicht die Wörter, daher fängt peck bei 22 an und nicht bei 4.
const includesPeckWhere = stringOfWords.includes("peck", 21);
console.log(includesPeckWhere);
const includesPeckNotThere = stringOfWords.includes("peck", 22);
console.log(includesPeckNotThere);







// & Array-TS-Level-3_1
console.log("Array-TS-Level-3_1");

// ! Absolut keine Ahnung wie das gehen soll

const artworks =[ "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Der Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"];

const artworkDates =["Die Sternennacht - 1889",
"Guernica - 1937",
"Die Geburt der Venus - 1486",
"Die Nachtwache - 1642",
"Die Mona Lisa - 1503",
"Die Kartoffelesser - 1885",
"Der Schrei - 1893",
"Das letzte Abendmahl - 1495",
"Die freudige Botschaft - 1885",
"Der Garten der Lüste - 1505"];







// & Array-TS-Iteration-Level-1_2
console.log("Array-TS-Iteration-Level-1_2");

const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

// Funktion, die ein Element in GROßBUCHSTABEN verwandelt
function toUpperCase (element: string) {
    return element.toUpperCase();
}

// map() sorgt dafür, dass diese Funktion auf alle Elemente angewandt wird
const upperDrinks = drinks.map(toUpperCase);
console.log(upperDrinks);


function iLike () {
    console.log(`I like: ${drinks[0]}`);
}

iLike();
// ! Unteres von kiwi, ich habs nur für ein einzelnes oben hinbekommen


// hier Schreibweise merken
const iLikeDrinks = drinks.map(function(drink){
    return (`I like ${drink}.`);
})

console.log(iLikeDrinks);






// & Array-TS-Iteration-Level-1_4
console.log("Array-TS-Iteration-Level-1_4");


const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const celcius = fahrenheit.map(function(degree){
    return (degree - 32)/ 1.8;
})

console.log(celcius);

// ! um Ergebnisse einer Funktion zu speichern, muss das alles natürlich in einer Variablen passieren UND ich muss das return in der Funktion an die richtige Stelle setzen






// & Array-TS-Iteration-Level-1_5
console.log("Array-TS-Iteration-Level-1_5");


const checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];



const random = checkNumber.map(function(num){
    if (num % 3 === 0) {
    return num + 100;
    }
    return num;
})

console.log(random);







// & Array-TS-Iteration-Level-1_6
console.log("Array-TS-Iteration-Level-1_6");

const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

// function minusEnding (name: string) {
//   if (name.includes(".jpg")) {
//       console.log(name.slice(0, -4));
//     } else {
//       console.log(name.replace(name, "invalid"));
//     }
// return name
// }

// !ausgeklammertes oben war ich selbst. Hat nicht geklappt, um Ergebnis am Ende auch zu speichern-->so wie unten

function minusEnding (name: string) {
    if (name.includes(".jpg")) {
      return name.slice(0, -4)
    } else {
      return "invalid"
    }
  }

const fileName = album.map(minusEnding);
console.log(fileName);







// & Array-TS-Iteration-Level-1_6
console.log("Array-TS-Iteration-Level-1_6")

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function printEvenNumbers(num: number) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function printoddNumbers(num: number) {
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    }
}


const evenNumbers = zahlen.filter(printEvenNumbers);
const oddNumbers = zahlen.filter(printoddNumbers);
console.log("Even Numbers: " + evenNumbers);
console.log("Odd Numbers: " + oddNumbers);