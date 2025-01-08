// & Tuple, Set, Map


// & Tuple-TS-Level-1_1
console.log("Tuple-TS-Level-1_1");


// ..erstelle einen Tuple
const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"];


// ..Erstelle jetzt ein Array von diesen Tupeln, das mehrere StarWars-Schauspieler:innen enthält
const fewStarWarsActors = [["Luke Skywalker", "Mark Hamill"], ["Darth Vader", "James Earl Jones"], ["Yoda", "Frank Oz"], ["Han Solo", "Harrison Ford"], ["Princess Leia", "Carrie Fisher"]];


// ..Lass dir in einer Schleife den Inhalt auf der Konsole ausgeben, z. B. “Mark Hamill spielt Luke Skywalker” etc.
for (const actor of fewStarWarsActors) {
    console.log(`${actor[1]} spielt ${actor[0]}`);
};



// & Tuple-TS-Level-2_1
console.log("Tuple-TS-Level-2_1");

//.. erstelle ein Tuple, das einen Mitarbeitenden repräsentiert besteht aus Nummer (number), Name (string), Abteilung (string) und Jahresgehalt (number)
type Employees = [number, string, string, number];
const employeeOne: Employees = [1, "Yvi", "Management", 50000];
console.log(employeeOne);

// ..Erstelle jetzt ein Array von diesen Tupeln, das mindestens 5 Mitarbeitende mit beliebigen Daten enthält
const employees = [[employeeOne], [2, "Debo", "Management", 55000], [3, "Bea", "IT", 40000], [4, "Kiwi", "IT", 40000], [5, "Julia", "Personal", 45000]];


//..Lass dir alle Mitarbeitenden mit ihren Daten auf der Konsole ausgeben
console.log(employees);




//& Set-TS-Level-1_1
console.log("Set-TS-Level-1_1");

//..Erstelle ein Set, das Strings enthält
const starWarsCharacters = new Set <string>(["Luke Skywalker", "Darth Vader", "Obi Wan Kenobi"]);

// ..Lass dir den Inhalt des Sets auf der Konsole ausgeben
console.log(starWarsCharacters);

//..Füge “Leia Organa” hinzu
starWarsCharacters.add("Leia Organa");
console.log(starWarsCharacters);


//..Füge erneut “Leia Organa” hinzu
starWarsCharacters.add("Leia Organa");
console.log(starWarsCharacters);
// --> spuckt dasselbe wie 1 Aufg davor aus, da in einem Set jeder Wert nur einmal enthalten sein kann




// & Set-TS-Level-2_1
console.log("Set-TS-Level-2_1");

// ..Erstelle ein Array vom Typ String mit Marvel-Charakteren
const marvelCharacters: string[] = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider Man"];

//..Füge in das Array nochmal Iron Man und Thor hinten hinzu
marvelCharacters.push("Iron Man", "Thor");
console.log(marvelCharacters);


// ..Erstelle ein neues Set, dass das Array als Basis hat
// ..Was fällt auf?
const marvelSet = new Set<string>(["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider Man", "Iron Man", "Thor"]);
console.log(marvelSet);
// --> habe am Ende nochmal Iron Man und Thor-->zeigt mir keinen Fehler an, wird dann aber in der Konsole nicht mit angezeigt, da jeder Wert EINMALIG




// & Map-TS-Level-1_1"The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
console.log("Map-TS-Level-1_1");


// ..Lege eine Map vom Datentyp string, string[] für den Bandnamen und die Mitglieder an
// --> bei mehreren Einträgen muss man jeden einzelnen Eintrag in ein Array verpacken obv.

const favBands = new Map<string, string[]>([
["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
["Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]],
["NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]],
["Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"]],
["Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]],
["Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]],
["The Rolling Stones", ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"]],
["U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]]
]);


// ..Lass dir die Größe deiner Band-Map ausgeben
console.log(favBands.size);
// zeigt 9 an, da 9 Einträge


//..Füge eine weitere Band zur Band-Map hinzu
//..Lass dir erneut die Größe deiner Band-Map ausgeben
favBands.set("DJ Er", ["Selia"]);
console.log(favBands);
console.log(favBands.size);
// zeigt 10 an, da 10 Einträge
// Einträge müssen nicht identisch sein bzw. der Array kann eine andere Anzahl an datentypen enthalten (muss aber array bleiben, da das vorher so definiert wurde)


//..Hole dir einen Eintrag aus der Map, z. B. Kraftwerk
console.log(favBands.get("Kraftwerk"));
// Kraftwerk ist in diesem Fall der key --> .get() spuckt mir die dazugehörigen values aus (also die Bandnamen)


//..Lass dir dort den Namen des letzten Mitglieds auf der Konsole ausgebe
const kraftwerkMember = favBands.get("Kraftwerk");

if (kraftwerkMember !== undefined) {
    console.log(kraftwerkMember[3]);
};
// muss zuerst in eine if-Abfrage, da Wert undfined sein könnte-->Fehleranzeige
// muss dann auch zuerst kraftwerkMemner definieren, kann das ohne das const nicht in die if ABfrage eingeben




// & Map-TS-Level-3_1
console.log("Map-TS-Level-3_1");

//..Lass dir alle Mitglieder auf der Konsole ausgeben, deren Name länger als 12 Zeichen (inkl. Leerzeichen) ist

favBands.forEach((values, key) => {
    // key kann man weglassen, wenn man es nicht benutzt. Values kann ich nicht weglassen, falls ich an key möchte, da key sonst als value gelesen wird
    // forEach greift bei Maps immer auf die values und den key in dieser Reihenfolge zu, also die 2 Parameter, die man bestimmt, stehen für die values und die keys
    const filteredValues = values.filter(element => element.length >= 12);
    // für die Längenangabe muss ich ja auf die einzelnen Elemente zugreifen können, das mache ich auch mit forEach, hier in der nächsten Zeile
    filteredValues.forEach((member) => {
        console.log(`Band: ${key}, Members: ${filteredValues}, Length: ${member.length}`);
});
});


// ...zur Erklärung was forEach macht
const zahlen = [1,2,3,4,5]
function callbackFunction(element: number, index: number ){
    console.log(element)
}
zahlen.forEach(callbackFunction)

// das hier macht forEach ⬇️
callbackFunction(zahlen[0], 0);
callbackFunction(zahlen[1], 1);
callbackFunction(zahlen[2], 2);
callbackFunction(zahlen[3], 3);
callbackFunction(zahlen[4], 4);




// & Loops-TS-Level-1_4
console.log("Loops-TS-Level-1_4");

//..Deklariere ein Array

const friendsNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

//..Verwende eine for … of - Schleife um alle Namen in der Konsole anzuzeigen
for (const name of friendsNames) {
    console.log(name);
}

// ..mit der for Schleife
// i ist der Zähler
// let i = 0 initialisiert den Zähler
// i < friendsNames.length sagt dass Schleife läuft solange Zähler kleiner als Arraylänge ist
// i++ erhöht Zähler nach jedem Durchlauf
for (let i = 0; i < friendsNames.length; i++) {
    console.log(friendsNames[i]);
}

