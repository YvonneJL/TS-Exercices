// & Strings-Methods-TS-Level-1_1
console.log("Strings-Methods-TS-Level-1_1");


const firstName: string = "Yvi";
const lastName: string = "Loder";

console.log(firstName.length);
console.log(lastName.length);

const fullName: string = firstName + " " + lastName;
const fullNameWithConcat: string = firstName.concat(" " + lastName);
console.log(fullName);
console.log(fullName.length);
console.log(fullNameWithConcat);

// & Strings-Methods-TS-Level-1_2
console.log("Strings-Methods-TS-Level-1_2");

const earthQuote: string = "How inappropriate to call this planet Earth, when clearly it is Ocean."

const showPosition: number = earthQuote.indexOf("h");
console.log(showPosition);

console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));
// -1, da Moon nicht existent im String

// & Strings-Methods-TS-Level-1_4
console.log("Strings-Methods-TS-Level-1_4");

const susisStatus: string = "Susi is going to codingschool"

const susi: string = susisStatus.slice(0, 4);
console.log(susi);
const is: string = susisStatus.slice(5, 7);
console.log(is);
const isGoingTo: string = susisStatus.slice(5, 16);
const school: string = susisStatus.slice(23);
console.log(isGoingTo);
console.log(school);
console.log(isGoingTo + " " + school);

console.log(susi + " " + is + " " + school);

// & Strings-Methods-TS-Level-1_5
console.log("Strings-Methods-TS-Level-1_5");

const whereIsSusi = "Susi is back from codingschool"

const susiTwo = whereIsSusi.substring(0, 5);


const susiIs = whereIsSusi.substring(0, 7);
const schoolTwo = whereIsSusi.substring (24);
const bothTogeter = susiIs + " " + schoolTwo;

document.open();
document.write(susiTwo);
document.write("<br>");
document.write(bothTogeter);
document.write("<br>");


const ergebnis = document.querySelector("#ergebnis");
if(ergebnis) {
    ergebnis.innerHTML = "Unser Ergebnis";
}
// Das oben klappt bei mir nicht (aber im html ist das div in den dev tools auch nicht aufgetaucht)

// & Strings-Methods-TS-Level-1_7
console.log("Strings-Methods-TS-Level-1_7");

const samsStatus: string = "Sam is good at codingschool"

const bad: string = samsStatus.replace("good", "bad");

document.write(bad);
document.write("<br>");

const susiGood: string = samsStatus.replace("Sam", "Susi")
const onlySchool: string = susiGood.slice(0, 15);
const schoolSchool: string = susiGood.slice(22);

document.write(onlySchool + " " + schoolSchool);
document.write("<br>");

const tennis: string = samsStatus.replace("codingschool", "tennis");
document.write(tennis);
document.write("<br>");

// & Strings-Methods-TS-Level-1_8
console.log("Strings-Methods-TS-Level-1_8");

const whereIsSam: string = "Sam is going to school"
document.write(whereIsSam.toUpperCase());
document.write("<br>");

document.write(whereIsSam.toLowerCase());
document.write("<br>");

const samOnly = whereIsSam.slice(0, 4).toUpperCase();
const schoolOnly = whereIsSam.slice(16).toUpperCase();
document.write(samOnly + " is going to " + schoolOnly);
document.write("<br>");

const isGoingToo = whereIsSam.slice(4, 16).toUpperCase();
document.write("sam " + isGoingToo.concat(" school"));
document.write("<br>");

const s = whereIsSam.slice(0, 1).toUpperCase();
const i = whereIsSam.slice(4, 5).toUpperCase();
const g = whereIsSam.slice(7, 8).toUpperCase();
const t = whereIsSam.slice(13, 14).toUpperCase();
const sc = whereIsSam.slice(16, 17).toUpperCase();
document.write(s.concat("am ")+ i.concat("s ") + g.concat("oing ") + t.concat("o ") + sc.concat("chool"));
document.write("<br>");




// & Strings-Methods-TS-Level-1_9
console.log("Strings-Methods-TS-Level-1_9");

const infoAboutSam = "Sam is going to codingschool";
const susiBusi = "Susi";
const and = " and";

document.write(infoAboutSam.concat(and + " to the movie theater"));
document.write("<br>");

const infoSamNoSchool: string = infoAboutSam.slice(0, 16);
document.write(infoSamNoSchool.concat("the movie theater"));
document.write("<br>");

const bothSchool: string = infoAboutSam.slice(7);
const sam: string = infoAboutSam.slice(0, 4);
const samAndSusi = sam.concat(" and Susi are ");
document.write(samAndSusi + bothSchool);
document.write("<br>");

document.write(samAndSusi.concat(" going to gym and to the movie theater"));
document.write("<br>");
document.write(susiBusi.concat(" is going to school and to the movie theater"));


// & Number-Methods-TS-Level-1_2
console.log("Number-Methods-TS-Level-1_2");

let wertEins: number = 15.16698;
let wertZwei: number = 7.78714;
let wertDrei: string = "12.3";
let wertVier: boolean = true;
let wertFuenf: boolean = false;
let wertSechs: string = "321";
let wertSieben: string = "Supercode";

console.log(wertEins.toFixed(2));
console.log(wertZwei.toFixed(2));
console.log(Number(wertDrei).toFixed(2));
console.log(Number(wertVier).toFixed(2));
console.log(Number(wertFuenf).toFixed(2));
// die beiden oberen sind booleans. true ist 1 und false ist 0
console.log(Number(wertSechs).toFixed(2));
console.log(Number(wertSieben).toFixed(2));
// bei letzten (wertSieben) kommt NaN raus. Geht nicht.


// & Number-Methods-TS-Level-1_3
console.log("Number-Methods-TS-Level-1_3");

let test = 15;
let a = test.toString();
let b = test.toString(2);
let c = test.toString(8);
let d = test.toString(16);

console.log(test);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let test2 = 15.16698;
let a2 = test2.toString();
let b2 = test2.toString(2);
let c2 = test2.toString(8);
let d2 = test2.toString(16);

console.log(test2);
console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);

let test23 = "12.3";
let a23 = test23.toString();
let b23 = Number(test23.toString(2));
let c23 = Number(test23.toString(8));
let d23 = Number(test23.toString(16));

console.log(test23);
console.log(a23);
console.log(b23);
console.log(c23);
console.log(d23);

let test234 = "32px";
let a234 = test234.toString();
let b234 = test234.toString(2);
let c234 = test234.toString(8);
let d234 = test234.toString(16);

// string to string gibt Wert selbst zurück

console.log(test234);
console.log(a234);
console.log(b234);
console.log(c234);
console.log(d234);

let test2345 = true;
let a2345 = test2345.toString();
let b2345 = test2345.toString(2);
let c2345 = test2345.toString(8);
let d2345 = test2345.toString(16);

// booleans werden auch mit true/false zurück gegeben

console.log(test2345);
console.log(a2345);
console.log(b2345);
console.log(c2345);
console.log(d2345);

// Die Parameter stehen bei Number für das Zahlensystem mit welchem sie umgewandelt werden
// 0 Standard (oder leer)
// 2 binär
// 8 oktal
// 16 hexadezimal


let test23456 = "456";
let a23456 = test23456.toString();
let b23456 = test23456.toString(2);
let c23456 = test23456.toString(8);
let d23456 = test23456.toString(16);


console.log(test23456);
console.log(a2345);
console.log(b23456);
console.log(c23456);
console.log(d2345);

// eine Nummer als String mit toString: bei keinem Parameter und bei Parameter 16 spuckt es true aus


