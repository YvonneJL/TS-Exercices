// & Array-TS-Sort-Level-1_2 (sort + reverse)
console.log("Array-TS-Sort-Level-1_2 (sort + reverse)");

// ...Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.

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


const sortDescending = codingLanguages.slice().sort().reverse();
console.log(sortDescending);
// hier speichere ich in einer weiteren Variable und kopiere erst mit .slice(), um das Original nicht zu verändern

codingLanguages.sort().reverse();
console.log(codingLanguages);
// hier verändere ich das Original
// zuerst alpahbetisch sortieren mit .sort()
// dann die Reihenfolge umdrehen mit .reverse()

// & Array-TS-Sort-Level-2_1
console.log("Array-TS-Sort-Level-2_1");

// ..Diese Function soll jeden String, der ihr als Parameter übergeben wird, umdrehen 

const randomNames = ["Sergio", "Hannah","Regallager","Reliefpfeiler", "Rentner"];

const randomNamesTurned = randomNames.map(name => name.split("").reverse().join(""));
console.log(randomNamesTurned);
// da es für alle Strings inenrhalb 1 Array gilt --> .map()
// in KLammer -> arrow Funktion, verkürzte Schreibweise
// name = Parameter
// name soll zuerst in einzelne Zeichen zerlegt werden .split("") (wird dann zu einem Array)
// darauf kann ich dann .reverse() anwenden (geht nur auf Array)
// danach verbinde ich Zeichen wieder zu einem String .join("")

const saetze = ["Ella mag alle Bohnen", "han nesaH has ennaH"];
const saetzeTurned = saetze.map(satz => satz.split("").reverse().join(""));
console.log(saetzeTurned);
// dasselbe funktioniert für Sätze-->Nachteil, da wird dann alles herumgedreht. Also das erste Wort steht dann an letzter Stelle

// ..Diese Function soll jedes Wort in einem Satz einzeln umdrehen
console.log("->Die Wörter einzeln umdrehen");

const original = ["Hallo Welt", "Heute scheint die Sonne"];
console.log(original);

// const splitIntoWords = original.map(satz => satz.split(" "));
// // mit .split(" ") (Leerzeichen) zerlege ich String in einzelne Wörter
// console.log(splitIntoWords);
// const reverseWordsArrayEbene = splitIntoWords.map(word => { const lettersArray = word.split("")})



// ! Nachfolgend verstehe ich leider nicht ganz die unterschiedlichen Ebenen. Beim eigenen Versuch oben (auskommentiert), funktioniert es nicht, da .split nicht für Arrays geht und ich wohl auf "Array Ebene" bin...
const reverseWordsInarray = sentences => {
    return sentences.map(sentence => sentence.split(" ").map(word => word.split("").reverse().join("")).join(" "));
};

const result = reverseWordsInarray(original);
console.log(result);
// !




// & Array-TS-Level-1_11 (includes)
console.log("Array-TS-Level-1_11 (includes)");

// ..Methode includes() um herauszufinden, ob gesuchte Substring im String vorhanden..

const piperSatz: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

const doesIt = piperSatz.includes("piper");
console.log(doesIt);
// false, da Piper groß geschrieben ist
const itDoes = piperSatz.includes("Piper");
console.log(itDoes);
// true, weil Piper groß geschrieben ist

const groß = piperSatz.toUpperCase();
console.log(groß);
const noSensitive = groß.includes("PIPER");
console.log(noSensitive);
// wenn man case sensitive umgehen möchte, kann man zuerst alles groß oder klein umwandeln und dementsprechend groß oder klein suchen oder mit --> regex arbeiten (kenne ich noch nicht)


// .. Suche mit Index nach peck und lasse dir einmal true und einmal false ausgeben
const preckTrue = piperSatz.includes("peck", 21);
console.log(preckTrue);
const preckFalse = piperSatz.includes("peck", 22);
console.log(preckFalse);
// Index wird an einzelnen Zeichen gemessen





// & Array-TS-Level-3_1 (find, split, trim)
console.log("Array-TS-Level-3_1 (find, split, trim)");
// ! Lösung gemeinsam im Kurs bei Livecodes 8-Arrays und Objekte

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


// map
// find
// include

// !Meine Überlegung:
// ! zuerst mit .include nach Parameter (ArtworkName) suchen
// ! Das muss aber innerhalb eines Strings im Array geschehen, was ich mit .map() machen möchte
// ! Das klappt aber mit der Funktion searchForName nicht, da boolean-->zeigt mir Fehler an
//  ! Funktion searchy macht dann die Bedingungsfrage....
// ! "Bin auf falscher Ebene"

function searchForName (artworkNames: string) {
    return artworks.includes(artworkNames)
};

function searchForDate (artworkNames: string) {
    return artworkDates.includes(artworkNames)
};

console.log(searchForName("Der Schrei"));
console.log(searchForName("Der Schrei - Edvard Munch"));

// const helloHello = artworks.map(searchForName("Der Schrei"));
// console.log(helloHello);

// Was muss ich ändern?
// Ich denke, dass die Funktion oben richtig ist-->gib mir true/false zurück


function searchy (name: string) {
    if (searchForName(name) === true && searchForDate(name) === true) {
     return   console.log(`hell yeah ${name}`);
    }
 else {
  return  console.log("oh no");
} 
};

searchy("Der Schrei - Edvard Munch");





// const work = artworks.map(searchForName("Der Schrei"));
// // const dates = artworkDates.map()








// function search(artworkName: string) {
//     // return artworkDates.includes(artworkName) && artworks.includes(artworkName)
//     if (artworkDates.includes(artworkName) === true && artworks.includes(artworkName) === true) {
//     console.log(`The name of the artwork  is ${[artworkName]}`);
//     } else {
//    console.log(`Artwork ${artworkName} not found`);
//     }
//     return;
// }


// search("Der Schrei");

// const eins = artworkDates.includes("Der Schrei - 1893");
// console.log(eins);
// // ! findet nur den kompletten String im Array -ich muss also eine Möglichkeit finden innerhalb des Strings zu suchen--> eigentlich .map()?!


// const what = artworks.map(search("Der Schrei")) && artworkDates.map(search)
// console.log(what);


// ! Julias Lösung!!!
// ! Was mir fehlte: .find und .includes zusammen zu verbinden
// ! Und sowieso alles in eine große funktion zu packen

function searchArtWork(artworkName: string) {
    const artistEntry = artworks.find((artwork) =>
      artwork.includes(artworkName)
    );
    const artDateEntry = artworkDates.find((artwork) =>
      artwork.includes(artworkName)
    );
    if (artistEntry && artDateEntry) {
      console.log(
        `'${artistEntry.split(" - ")[0]}' wurde von ${
          artistEntry.split(" - ")[1]
        } im Jahre ${artDateEntry.split(" - ")[1]} gemalt.`
      );
    } else {
      console.log(`Artwork ${artworkName} not found.`);
    }
  }
  
  searchArtWork("Sternennacht");
  searchArtWork("sternennacht");
  searchArtWork("Mona");
  searchArtWork("monalisa");





//& Array-TS-Iteration-Level-1_2 (map)
console.log("Array-TS-Iteration-Level-1_2 (map)");


const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];


// ..hier verwandle ich alle Buchstaben in Großbuchstaben
const upperDrinks = drinks.map(drink => drink.toUpperCase());
console.log(upperDrinks);


// ..hier füge ich ein I like zu jedem drink hinzu
const iLike = upperDrinks.map(drink => `I like ${drink}`);
console.log(iLike);






//& Array-TS-Iteration-Level-1_4 (map)
console.log("Array-TS-Iteration-Level-1_4 (map)");

// ..mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius 
// ..Verwende die mathematische Formel celsius = (℉ - 32) / 1.8 zur Umrechnung.

const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];


// Rechnung in Funktionskörper schreiben
// Math.round rundet die zahlen auf volle Zahlen
const celcius = fahrenheit.map(num => Math.round((num - 32) / 1.8));
console.log(celcius);




//& Array-TS-Iteration-Level-1_5 (map)
console.log("Array-TS-Iteration-Level-1_5 (map)");

//..Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
//..Wenn ja: Addiere 100 zu dieser Zahl hinzu.
//..Wenn nein: Lasse die Zahl so wie sie ist

const checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];


const addedNumbers = checkNumber.map(function(number) {
    if(number % 3 === 0) {
    return number + 100} 
    else {
    return number
    }
});

console.log(addedNumbers);




//& Array-TS-Iteration-Level-1_6 (map oder forEach)
console.log("Array-TS-Iteration-Level-1_6 (map oder forEach)");

const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];


// Bedingung, wenn es die Dateiendung .include()
// dann soll zu bestimmten Punkt von hinten abgeschnitten werden .slice()
// oder eben das Wort ersetzt werden durch "invalid" mit .replace()
const newName = album.map(function(datei) {
    if (datei.includes(".jpg")){
      return datei.slice(0, -4).toLowerCase();
    } else {
       return datei.replace(datei, "invalid");
    }
});

console.log(newName);





//& Array-TS-Iteration-Level-1_8 (filter)
console.log("Array-TS-Iteration-Level-1_8 (filter)");


const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//..Schreibe eine Function printEvenNumbers()
//..wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die geraden Zahlen zeigt


// Operator % teilt OHNE REST
const evenNumbers = zahlen.filter(number => {
    if (number % 2 === 0) {
        return number
    } 
});
console.log(evenNumbers);




//..Schreibe eine Function printOddNumbers()
//..wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die ungeraden Zahlen zeigt


// Operator % teilt OHNE REST
const oddNumbers = zahlen.filter(number => {
    if (number % 2 !== 0) {
        return number
    } 
});
console.log(oddNumbers);