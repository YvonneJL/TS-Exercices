// & Functions TS-Level-1_3
console.log("Functions TS-Level-1_3");

function showPersonInfo(name: string, city: string, age: number) : void {
    console.log(`Hallo mein Name ist ${name}. Ich bin ${Math.round(age)} Jahre alt. Ich komme aus ${city}.`);
}

showPersonInfo("Yvi", "Freiburg", 35.67);



// & Functions TS-Level-1_5
console.log("Functions TS-Level-1_5");

function multiplyAndDivide(a: number, b:number) {
    if (b==0) {
        console.log("Fehler! Das Teilen durch 0 ist nicht möglich");
        return
        // hier return einzufügen, bedeutet, dass die Funktion , dann dort endet (aber nur im if Fall (also falls Zahl 0)-eine andere Möglichkeit wäre gewesen die beiden unteren clgs in das "else" einzubinden)
    }
    
    console.log(`Das Ergebnis der Multiplikation: ${a * b}`);
    console.log(`Das Ergebnis der Division: ${a / b}`);
}

multiplyAndDivide (10, 2);
multiplyAndDivide (10, 0);
multiplyAndDivide (30, 20);
multiplyAndDivide (100, 100);
multiplyAndDivide (5, 0);
multiplyAndDivide (45, 173);
multiplyAndDivide (1, 1000);


// & Functions TS-Level-1_1
console.log("Functions TS-Level-1_1");

function intro1() {
    console.log("hello function");
}

intro1();

const intro2 = () => {
    console.log("Hello arrow function");
}

intro2();


// & Functions TS-Level-1_4
console.log("Functions TS-Level-1_4");

function showHero(heroName: string, heroPower: string, heroEnemy: string) {
    const nameOutput = "Meine Lieblingsheldin ist:";
    const powerOutput = "Sie hat die Fähigkeit zu";
    const enemyOutput = "Ihr größter Gegner ist";

    console.log(`${nameOutput} ${heroName}. ${powerOutput} ${heroPower}. ${enemyOutput} ${heroEnemy}`);
}

showHero("Yvi", "träumen", "der Alltag");


// & Functions TS-Level-1_6
console.log("Functions TS-Level-1_6");

const returnOne = () => {
 return 1;
}
// return hier wichtig, da Funktion weiter verwendet wird--> wird unten als Variable gespeichert und dann verglichen
// Wenn ich die 1 verändere, dann wird "versteh ich nicht" ausgegeben

const x = 1;
const y = returnOne();

if (x == y) {
    console.log("Wird das gedruckt?");
} else {
    console.log("versteh ich nicht");
}

returnOne();



// & Functions TS-Level-1_7
console.log("Functions TS-Level-1_7");

function multiplyParameter(a: number) {
    return a * 2;
}
console.log(multiplyParameter(6));

// --> als arrow
const multiplyParameterArrow = (b: number) => {
    return b * 2
}
console.log(multiplyParameterArrow(8));

// & Functions TS-Level-1_9
console.log("Functions TS-Level-1_9");


function introducingMyself (vorname: string, nachname: string, geburtsort: string, alter: string, wohnort: string) {
    console.log(`Mein Name ist ${vorname} ${nachname}. Ich bin in ${geburtsort} geboren. Heute bin ich sehr müde. Ich bin ${alter} Jahre alt und wohne in ${wohnort}.`);
}

introducingMyself("Yvonne", "Loder", "Heidenheim", "35", "Freiburg");
introducingMyself("Sebastian", "Katzer", "Ravensburg", "29", "Freiburg");