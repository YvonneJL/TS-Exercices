// & Date-TS-Level-1_1
console.log("Date-TS-Level-1_1");

const dateOne = new Date("September 2, 2019 09:00:00");
const dateTwo = new Date(0);
const dateThree = new Date(31556908800);
const dateFour = new Date(86400000);

const date1Element = document.querySelector("#date1");
const date2Element = document.querySelector("#date2");
const date3Element = document.querySelector("#date3");
const date4Element = document.querySelector("#date4");


if(date1Element && date2Element && date3Element && date4Element) {
    date1Element.innerHTML = `${dateOne} = new Date("September 2, 2019 09:00:00")`
    date2Element.innerHTML = `${dateTwo} = new Date("0")`
    date3Element.innerHTML = `${dateThree} = new Date("31556908800")`
    date4Element.innerHTML = `${dateFour} = new Date("86400000")`
}

// & Date-TS-Level-2_1
console.log("Date-TS-Level-2_1");

const today = new Date();
const dateOnly = today.getDate();
const monthOnly = today.getMonth() + 1;
const yearOnly = today.getFullYear();

const dateFive = document.querySelector("#date5");
const dateSix = document.querySelector("#date6");

if (dateFive && dateSix) {
    dateFive.innerHTML = `${dateOnly}-${monthOnly}-${yearOnly}`;
    dateSix.innerHTML = `${dateOnly}/${monthOnly}/${yearOnly}`;
}


const time = today.toUTCString();
console.log(time);

const timeOne = document.querySelector("#time1");
const timeTwo = document.querySelector("#time2");

if (timeOne && timeTwo) {
    timeOne.innerHTML = today.toLocaleTimeString("de-DE");
    timeTwo.innerHTML = today.toUTCString();
}


// & Date-TS-Level-3_2
console.log("Date-TS-Level-3_2");

const dateZero = new Date("01.01.1970");
const dateNow = new Date();
console.log(dateZero);
console.log(dateNow);

import { differenceInYears, differenceInHours, differenceInSeconds, format } from "date-fns";

const differenceYears = differenceInYears(dateNow, dateZero);
console.log("Der Unterschied der oberen Daten in Jahren: " + differenceYears);
const differenceHours = differenceInHours(dateNow, dateZero);
console.log("Der Unterschied der oberen Daten in Stunden" + differenceHours);
const differenceSeconds = differenceInSeconds(dateNow, dateZero);
console.log("Der Unterschied der oberen beiden Daten in Sekunden: " + differenceSeconds);

const myBirthday = new Date("01/20/1989");
console.log(myBirthday);
const myAge = differenceInYears(dateNow, myBirthday);
console.log("my age is: " + myAge);
const howOld = new Date("04/07/2007");
const difference = differenceInYears(howOld, myBirthday);
console.log("2007 war ich " + difference + " Jahre alt.");


const myBDayFormat1 = format(myBirthday, "dd.MM.yyyy")
console.log("Hier die erste Formatierung: " + myBDayFormat1);
const myBDayFormat2 = format(myBirthday, "dd.MM.yyyy, kk:mm");
console.log("Hier die zweite Formatierung: " + myBDayFormat2);
const myBDayFormat3 = format(myBirthday, "EEEE MMMM yyyy");
console.log("Hier die dritte Formatierung: " + myBDayFormat3);


// & Math-TS-Level-1_1
console.log("Math-TS-Level-1_1");

console.log(Math.PI);

const PI = Math.PI;
const roundedPI = Math.round(PI * 100) / 100;
console.log(roundedPI);

// & Math-TS-Level-1_2
console.log("Math-TS-Level-1_2");

const randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

// let a = Math.round(3.14)
// console.log(a);

function toRound(number: number) {
    let randomNR = Math.round(number);
    console.log(randomNR);
}


randomNumbers.map((currentNumber) => toRound(currentNumber));
// hier wird Funktion ausgeführt


// & Math-TS-Level-1_3
console.log("Math-TS-Level-1_3");

const randomNum = Math.random();
console.log(randomNum);
const randomNum1bis10 = Math.floor(Math.random() * 10) + 1;
console.log(randomNum1bis10);
const randomNum1bis100 = Math.floor(Math.random() * 100) + 1;
console.log(randomNum1bis100);




// & Math-TS-Level-2_2
// console.log("Math-TS-Level-2_2");

// const userInput = window.prompt("Errate eine Zahl zwischen 0 und 10");

// const zufall = Math.floor(Math.random()* 10) + 1;
// console.log(zufall);
// const zufallString: string = zufall.toString();


// if (zufallString == userInput) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// & Conditionals-TS-Level-1_5
console.log("Conditionals-TS-Level-1_5");
    

// let weekdayAsNumber: number;
// let weekdayAsString: string;

// const randomWindow = window.prompt("Please insert a number from 1 to 7");
// const randomWindowNumber = Number(randomWindow);

// weekdayAsNumber = randomWindowNumber;
// console.log(weekdayAsNumber);

// switch (weekdayAsNumber) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//         default:
//             console.log("Mit dieser Zahl kann man keinen Wochentag ausdrücken");
// }


// & Conditionals-TS-Level-2_4
console.log("Conditionals-TS-Level-2_4");

console.log("Aufgabe schon bei 7_Conditionals bearbeitet");



// & Conditionals-TS-Level-2_8
console.log("Conditionals-TS-Level-2_8");

const schoolGrade = Math.floor(Math.random() * 10) + 1;
console.log(schoolGrade);


switch (schoolGrade) {
    case 1 :
        console.log("sehr gut");
        break;
    case 2 :
        console.log("gut");
        break;
    case 3 :
        console.log("befriedigend");
        break;
    case 4 :
        console.log("ausreichend");
        break;
    case 5 :
        console.log("mangelhaft");
        break;
    case 6 :
        console.log("ungenügend");
        break;
    default : 
    console.log("Das ist keine gültige Schulnote");
}


// & Conditionals-TS-Level-3_1
console.log("Conditionals-TS-Level-2_8");

const salesMonth: number = Math.floor(Math.random()*12) + 1;
console.log(salesMonth);

switch (true) {
    case salesMonth <= 3 :
        console.log("1.Quartal"); 
    break;
    case 3 < salesMonth && salesMonth <= 6 :
        console.log("2.Quartal"); 
    break;
    case 6 < salesMonth && salesMonth <= 9 :
        console.log("3.Quartal"); 
    break;
    case 9 < salesMonth && salesMonth <= 12 :
        console.log("4.Quartal"); 
    break;
}



const totalSales = Math.floor(Math.random()*(10000 - 1000 + 1)) + 1000;
console.log(totalSales);
let bewertung: string;


switch (true) {
    case totalSales <= 2500 :
        bewertung = "schlecht"
        break;
    case totalSales >= 2501 && totalSales <= 5000 :
        bewertung = "mittelmäßig"
        break;
    case totalSales >= 5001 && totalSales <= 7500 :
        bewertung = "hoch"
        break;
    case totalSales >= 7501 && totalSales <= 10000 :
        bewertung = "unglaublich"
        break;
        default :
        bewertung = "nicht richtig";
}

console.log(bewertung);

