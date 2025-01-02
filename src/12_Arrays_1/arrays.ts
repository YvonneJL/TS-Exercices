// & Arrays-TS-Level-1_1
console.log("Arrays-TS-Level-1_1");


const bucketList = ["Japan", "Schottland", "Madeira"];
const luckyNumbers = [6, 13, 12];
const favouritePeople = ["Basti", "Mona", "AlleMeineFreunde"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favouritePeople);


// & Arrays-TS-Level-1_2
console.log("Arrays-TS-Level-1_2");

console.log(bucketList[2]);
console.log(bucketList[bucketList.length - 1]);
// same as above-->letzte Stelle im Array mit length-1
console.log(luckyNumbers[0]);
console.log(favouritePeople[1]);

// & Arrays-TS-Level-1_3
console.log("Arrays-TS-Level-1_3");

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favouritePeople.length);

// & Arrays-TS-Level-1_4
console.log("Arrays-TS-Level-1_4");

const Wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
console.log(Wochentage);
Wochentage.push("Samstag", "Sonntag");
console.log(Wochentage);

const zehnerReihe = [10, 20, 30, 40, 50, 60, 70];
console.log(zehnerReihe);
zehnerReihe.push(80, 90, 100);
console.log(zehnerReihe);

// & Arrays-TS-Level-1_5
console.log("Arrays-TS-Level-1_5");

console.log(bucketList);
const lostPlaces = bucketList.pop();
console.log(bucketList);
console.log(lostPlaces);

console.log(Wochentage);
const derTagDesHerrn = Wochentage.pop();
console.log(Wochentage);
console.log(derTagDesHerrn); 

console.log(zehnerReihe);
const istHundertEinZehner = zehnerReihe.pop();
console.log(zehnerReihe);
console.log(istHundertEinZehner);


// & Arrays-TS-Level-1_6
console.log("Arrays-TS-Level-1_6");

console.log(favouritePeople);
const nurBasti = favouritePeople.shift();
console.log(favouritePeople);
console.log(nurBasti);

console.log(Wochentage);
const montagBrauchtKeinMensch = Wochentage.shift();
console.log(Wochentage);
console.log(montagBrauchtKeinMensch);


// & Arrays-TS-Level-1_7
console.log("Arrays-TS-Level-1_7");

console.log(bucketList);
bucketList.unshift("Madeira", "Irland", "Kanada");
console.log(bucketList);
console.log(Wochentage);
Wochentage.unshift("Sonntag");
console.log(Wochentage);

// & Arrays-TS-Level-1_8
console.log("Arrays-TS-Level-1_8");

const lieblingsReiseziele = ["Japan", "Madeira", "Irland", "Spanien", "Kanada", "Schottland"];
console.log(lieblingsReiseziele);
const notMostFavourite = lieblingsReiseziele.slice(2, 4);
console.log(lieblingsReiseziele);
console.log(notMostFavourite);

// .slice() verändert nicht. Schneidet aus und gibt ausgeschnittenen Wert zurück, vorausgesetzt man speichert ihn in einer Variablen

// & Arrays-TS-Level-1_9
console.log("Arrays-TS-Level-1_9");

const zahlenReihenfolge = [23, 54, 75];
zahlenReihenfolge.push(1, 2, 3, 4, 5);
console.log(zahlenReihenfolge);

zahlenReihenfolge.unshift(6, 7, 8, 9, 10);
console.log(zahlenReihenfolge);

zahlenReihenfolge.pop();
console.log(zahlenReihenfolge);
zahlenReihenfolge.pop();
console.log(zahlenReihenfolge);

zahlenReihenfolge.shift();
console.log(zahlenReihenfolge);
zahlenReihenfolge.shift();
console.log(zahlenReihenfolge);


// & Arrays-TS-Level-1_14
console.log("Arrays-TS-Level-1_14");

const oldHollywoodActors = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];
console.log(oldHollywoodActors);
const actorsReference = oldHollywoodActors;
console.log(actorsReference);
actorsReference.push("Marilyn Monroe");
console.log(actorsReference);
console.log(oldHollywoodActors);


// folgend bessere Methoden zu kopieren--> (.concat() / .slice() / [...] )

const newCopy = oldHollywoodActors.concat();
console.log(newCopy);
newCopy.push("WeißJetzt SpontanNiemanden");
console.log(newCopy);
console.log(oldHollywoodActors);

const newerCopy = oldHollywoodActors.slice();
console.log(newerCopy);
newerCopy.unshift("WeißJetzt SpontanNiemanden");
console.log(newerCopy);
console.log(oldHollywoodActors);

const newestCopy = [...oldHollywoodActors];
console.log(newestCopy);
newestCopy.unshift("WeißJetzt SpontanNiemanden");
console.log(newestCopy);
console.log(oldHollywoodActors);