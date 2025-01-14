//& Functions-TS-Grundlagen-Level-1_2
console.log("Functions-TS-Grundlagen-Level-1_2");

//..Schreibe eine Function, die "Hallo" in deinem HTML anzeigt.

//hier als klassisch deklarierte Funktion
const divElement = document.querySelector<HTMLDivElement>("#div-1");


    function randomWord (word: string) {
        const newParagraph = document.createElement("p");
        divElement?.appendChild(newParagraph);
        const content = newParagraph.textContent = word;
        return content;
    }; 
    randomWord("Hallo");


//hier als arrow Funktion
const huhu = () => {
        const newParagraph1 = document.createElement("p");
        divElement?.appendChild(newParagraph1);
        const content1 = newParagraph1.textContent = `huhu`;
        return content1;
};
huhu();




//..Schreibe eine 2. Function, die die Summe von zwei Zahlen in deinem Browser (Konsole oder HTML) anzeigt.

function sumOfTwoNumbers (number1: number, number2: number) {
    const newParagraph2 = document.createElement("p");
        divElement?.appendChild(newParagraph2);
        const sum = number1 + number2;
        const content2 = newParagraph2.textContent = `${number1+number2}`;
        return content2
};

sumOfTwoNumbers(6, 7);
sumOfTwoNumbers(13, 7);
sumOfTwoNumbers(9, 7347);

console.log("---Hier die Summe als Arrow Funktion mit implizitem return");
const sum = (numberOne: number, numberTwo: number) => console.log(numberOne+numberTwo);

sum(12, 8);


//..Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt


//! Ist asukommentiert, weil die windwo.alerts nerven
// function windowAlert (numberOne: number, numberTwo: number) {
//     window.alert(numberOne*numberTwo)
// };

// windowAlert(2, 4);

// const windowAlert2 = (numberOne: number, numberTwo: number) => window.alert(numberOne*numberTwo);

// windowAlert2(5, 10);


//..Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.

console.log("---Hier die 4. Funktion innerhalb dieser Aufgabe");

type IchBinEinObjekt = {
    name: string,
    alter: number,
    wohnort: string,
    verheiratet?: boolean,
};

function objectFun (person: IchBinEinObjekt) {
    const keys = Object.keys(person)
    console.log(keys);
};

const yviAsObject = {
    name: "Yvi",
    alter: 35,
    wohnort: "Freiburg",
    verheiratet: false,
};

const bastiAsObject = {
    name: "Basti",
    alter: 29,
    wohnort: "Freiburg",
};

objectFun(yviAsObject);
objectFun(bastiAsObject);

const objectFun2 = (person: IchBinEinObjekt) => console.log(`Lottes keys: ${Object.keys(person)}`);

const lotteAsObject = {
    name: "Lotte",
    alter: 30,
    wohnort: "Freiburg",
    verheiratet: true,
};

objectFun2(lotteAsObject);





//& Functions-TS-Level-1_6
console.log("Functions-TS-Level-1_6");

//..Lege einen Typ Monster mit folgenden Eigenschaften an
//..name, type, health, strength, speed
//..Alle Eigenschaften sind Pflicht (nicht optional)
//..Überlege dir selbst, welche Datentypen hierfür sinnvoll sein könnten

type Monster = {
    name: string,
    type: boolean,
    health: number,
    strength: number,
    speed: number,
};


//..Erstelle eine Funktion createMonster, die ein Monster erzeugt und zurückgibt
//..name und type müssen immer an die Funktion übergeben werden
//..werden health, strength und speed nicht angegeben, sollen diese Standardwerte verwendet werden
    //..health = 100
    //..strength = 50
    //..speed = 25


function createMonster(nameMonster: string, typeMonster: boolean, healthMonster: number = 100, strengthMonster: number =50, speedMonster: number = 25 ) {
    const monsterOne: Monster = {
        name: nameMonster,
        type: typeMonster,
        health: healthMonster,
        strength: strengthMonster,
        speed: speedMonster,
    }; return monsterOne;
};

//..Lege mit Hilfe der Funktion mehrere Monster an, gebe dabei
    //..2 Parameter
    //..3 Parameter
    //..4 Parameter
    //..5 Parameter

const isYviAMonster = createMonster("Yvi", false);
const isETAMonster = createMonster("ET", true, 40);
const isJensAMonster = createMonster("Jens", false, 100, 70);
const isChubakaAMonster = createMonster("Chubaka", true, 10, 100, 10);

//..Lass dir jeweils das erzeugte Objekt in der Konsole ausgeben

console.log(isYviAMonster);
console.log(isETAMonster);
console.log(isJensAMonster);
console.log(isChubakaAMonster);





//& Functions-TS-Level-3_1
console.log("Functions-TS-Level-3_1");

//..Erstelle vier SuperBalls: Durch das Anklicken eines SuperBalls ändert sich die Hintergrundfarbe des <body> und die Textfarbe der Überschrift <h1>.

//..Nutze CSS um die Elemente zu stylen. Entweder nutzt du linear-gradient oder du sprichst jeden Halbkreis selber an.

//..schreibe eine Funktion für die Änderung der Farben, die in jedem EventHandler verwendet wird


const body = document.querySelector("body");
const h3 = document.querySelector<HTMLHeadingElement>("#change-text");

const superball1 = document.querySelector("#ball-1");
const superball2 = document.querySelector("#ball-2");
const superball3 = document.querySelector("#ball-3");
const superball4 = document.querySelector("#ball-4");



    function changeTextAndBackground (colorText: string, colorBG: string) {
        //die if Abfrage innerhalb der Funktion, sonst weiß die Funktion davon nichts
        if (h3 && body) {
        h3.style.color = colorText;
        body.style.backgroundColor = colorBG;
    };
};

if (superball1) {
// die Funktion muss nochmals innerhalb einer Funktion aufgerufen werden, da man im Eventlistener selbst keine Funktionen aufrufen darf
    superball1.addEventListener("click", ()=> changeTextAndBackground("purple", "green"));
};

if (superball2) {
    superball2.addEventListener("click", ()=> changeTextAndBackground("green", "blue"));
};

if (superball3) {
    superball3.addEventListener("click", ()=> changeTextAndBackground("blue", "red"));
};

if (superball4) {
    superball4.addEventListener("click", ()=> changeTextAndBackground("red", "orange"));
};



//..Lass dir die Superballs auf Basis eines Arrays von Objekten im Code generieren

// in den Objekten speichere ich die Farben, die die Bälle haben sollen und die, die der veränderte Hintergrund und Text haben soll
type Ball = {
    color1: string,
    color2: string,
    colorBackground: string,
    colorText: string,
};


// hier definiere ich die Farben und Farbänderungen jedes Balls in einem Objekt
const superballOne: Ball = {
    color1: "red",
    color2: "black",
    colorBackground: "green",
    colorText: "purple",
};

const superballTwo: Ball = {
    color1: "blue",
    color2: "black",
    colorBackground: "purple",
    colorText: "yellow",
};

const superballThree: Ball = {
    color1: "green",
    color2: "black",
    colorBackground: "orange",
    colorText: "blue",
};

const superballFour: Ball = {
    color1: "yellow",
    color2: "black",
    colorBackground: "blue",
    colorText: "pink",
};


// hier führe ich die Objekte als Array zusammen durch das ich später meine .forEach() Methode laufen lasse
const ballsAsArray: Ball[] = [superballOne, superballTwo, superballThree, superballFour];

// ich zieh den Bereich aus dem HTML, in den die Bälle sollen
const articleElement = document.querySelector("#superballs");

// eine Funktion in der ich .forEach() anwende. Dies eignet sich besser als .map(), da .map() einen Rückgabewert liefert. Den brauche ich hier aber nicht, daher .forEach()
function makeBalls () {
    ballsAsArray.forEach((ball)=> {
        // jeder Ball wird erste einmal erstellt als div
        // dem wird dann die Klasse ball gegeben, da diese bereits gestylt ist
        // und als style dann den linear-gradient mit den Farben als Variablen (mit . Operator auf die Eigenschaften aus dem ball-Objekt zugreifen und entsprechende Farbe ziehen)
        const divBall = document.createElement("div");
        divBall.setAttribute("class", "ball");
        divBall.style.background = `linear-gradient(45deg, ${ball.color1} 0%, ${ball.color1} 50%, ${ball.color2} 51%,${ball.color2} 100%)`
        articleElement?.appendChild(divBall);

        // noch im .forEach() das Event einfügen, da es ja für jeden Ball geschehen soll
        // die Funktion habe ich bereits in der Aufagbe vorher global und klassisch definiert
        // kann ich dann innerhalb einer weiteren EventFunktion aufrufen mit den entsprechenden Objekteigenschaften als Argumente (colors)
        divBall.addEventListener("click", ()=> changeTextAndBackground(ball.colorText, ball.colorBackground));
    });
};
// Aufruf der Funktion
makeBalls();





//& Project-TS Morsecode 
console.log("Project-TS Morsecode ");

//..Es muss eine Funktion entwickelt werden, mit der man einfachen Text in Morsecode übersetzen kann. Das Array ist im Code-Snippet angegeben.

type MorseCode = {
    letter: string,
    morseCode: string,
};

let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

const inputElement = document.querySelector<HTMLInputElement>("#morse-input");
const buttonElement = document.querySelector("#morse-button");
const outputElement = document.querySelector("#morse-output");

function translate () {
    if (outputElement && inputElement) {
        // hier wird das value vom input gezogen und alle Buchtsaben .toUpperCase(), da mit upper cases verglichen wird
        const inputValue = inputElement.value.toUpperCase();

        // hier bestimme ich den Text im Output, der ja mit jeder inputEingabe und Übersetzung geändert wird
        // anfangs auf leer
        let morseCode = "";

        // 
        for (let userInput of inputValue) {
            const translate = morseAlphabet.find(item => item.letter === userInput);
            // if else nur weil user auch unbekannte Zeichen eingeben kann
            // nur um das abzufangen
            if (translate) {
                morseCode += translate.morseCode;
            } else {
                morseCode += "? "; 
            }
        }
        // ausserhalb der Schleife aber innerhalb der if Abfrage von oben
        // Erstellen des p Elements, in das die Übersetzung soll
        const pElement = document.createElement("p");
        pElement.textContent = morseCode;
        outputElement.appendChild(pElement);
    };
};

if (buttonElement) {
    buttonElement.addEventListener("click", translate)
};
