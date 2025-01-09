//& Loops-TS-Level-1_1
console.log("Loops-TS-Level-1_1");

//..Schreibe eine for-Schleife, die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
for (let i = 1; i <= 10; i++) {
    console.log(`Hello World ${i}`);
}





//& Loops-TS-Level-1_2
console.log("Loops-TS-Level-1_2");

//..Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
//..Wenn du mit Arrays arbeitest, musst du das Array initialisieren

let numbersToTen: number[]  = [];

for (let i = 1; i <= 10; i++) {
    console.log(i);
    numbersToTen.push(i)
};
console.log(numbersToTen);




// & Loops-TS-Level-1_3
console.log("Loops-TS-Level-1_3");

//..Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
//..Lege dazu eine Variable counter mit dem Wert 0 an.
//..Als Bedingung nutze in der Schleife "counter < 10".
//..Gib den String "Hallo World + counter" in der Konsole aus.
//..Erhöhe counter um eins-->dann wird Schleife einmal weniger ausgeführt

let counter = 0;
while (counter < 10) {
    console.log(`Hello World ${counter}`);
    counter++;
};
// ---> wenn ich counter++ weglasse, wird es zur Endlossschleife, da die Zahl immer bei 0 bleibt. Durch ++ wird es beim nächsten Mal zu 1, dann 2 usw.





//& Loops-TS-Level-1_7
console.log("Loops-TS-Level-1_7");

//..mit do...while sollen die Nummern von 1 bis 5 (wie im Screenshot zu sehen) im HTML-Dokument ausgeben werden.

const nummernOutput = document.querySelector<HTMLDivElement>("#hier-nummer");

let i = 1;
do {
   if (nummernOutput) {
        nummernOutput.innerHTML += `<p>This is the number ${i}</p>`;
   } 
    i++;
} while (i <=5);







//& Loops-TS-Level-1_8
console.log("Loops-TS-Level-1_8");

//..Erstelle einen Loop mit [do...while]
//..Es sollen alle geraden Zahlen bis 20 im HTML-Dokument ausgegeben werden.

const nummernOutput2 = document.querySelector<HTMLDivElement>("#gerade-nummer");

let j = 0;

do {
   if (nummernOutput2) {
    if (j % 2 === 0) {
        nummernOutput2.innerHTML += `<p>This even number is ${j}</p>`
    }
   }
    j++;
} while (j <=20);




// & Loops-TS-Level-2_1
console.log("Loops-TS-Level-2_1");

//..Deklariere im Funktionskörper die Variable returnArray als leeres Array.
//..Nehmen wir an, wir wollen automatisiert 100 Dateinamen für Bilder in unserem Ordner erstellen. Wir erstellen dazu ein Array mit standardisierten Dateinamen 
//..Deklariere im Funktionskörper die Variable returnArray als leeres Array.
//..Schreibe eine for-Schleife.
//..Du kannst Conditionals Statements (if, else) nutzen, wenn du den Dateinamen zusammenbaust, um zu ermittelt wie viel Nullen vor der Zahl stehen müssen. Alternativ kannst du die String-Methode [padStart()] einsetzen.
//..Nutze push() um den jeweiligen Dateinamen ins Array zu schreiben
//..Gib das Array mit return aus der Funktion zurü//..


function dateiNamen() {
    const returnArray = [];
    for (let datei = 0; datei <= 99; datei++) {
        console.log(datei);
        returnArray.push(`image_0${datei}.jpg`)
    } 
    console.log(returnArray);  
    return returnArray;
}

dateiNamen();

// ! hier Beas Lösung

function createImageNames(imageName : string, format : string){
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        if(i < 10) {
            const automatedName = `${imageName}_00${i}.${format}`
            returnArray.push(automatedName);
        } else if (i >= 10 && i < 100) {
            const automatedName = `${imageName}_0${i}.${format}`
            returnArray.push(automatedName);
        } else {
            const automatedName = `${imageName}_${i}.${format}`
            returnArray.push(automatedName);
        }
    }
    console.log(returnArray);
} 
createImageNames("image", "jpg");






//& Loops-TS-Level-2_2
console.log("Loops-TS-Level-2_2");

//..Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
//..In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
//..Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingegebenen Anzahl an Os aus dem Input-Feld.


const submitBtn = document.querySelector("#btn") as HTMLInputElement;
const loopBaby = document.querySelector("#loop-baby") as HTMLParagraphElement;

loopBaby.innerText = "Loop"

function loopFun() {
    const userInputNumber = Number((document.querySelector("#input-nmbr") as HTMLInputElement).value);

    let osAmount = "";

    for(let i = 0; i < userInputNumber; i++) {
        osAmount += "o";
    }
    loopBaby.innerText = `L${osAmount}p`;
}

submitBtn.addEventListener("click", loopFun) 





// & Loops-TS-Level-3_1
console.log("Loops-TS-Level-3_1");

const text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `





// & Hier nochmal die Loop Aufgabe 2_2 zusammen mit Stefan

// & .addEventListener()
// bekommt 2 Argumente-->die Art des Events und dann die Funktion, die ausgeführt werden soll
// dies ist dann eine Callback-Funktion, da die Funktion nicht slebst aufgerufen und so ausgeführt wird, sondern von wem anders (in dem Fall addEventListener) aufgerufen wird

const input = document.querySelector<HTMLInputElement>("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#button");


// mit if prüfe ich, ob die html Elemente wirklich existieren
// das mach ich ganz aussen--> darin die Funktion
if (input && output && button) {
    button.addEventListener("click", function handleClick(){
        console.log("clicked");
        // jetzt steht clicked in der Konsole, wenn ich auf den Button klicke
        const inputValue = Number(input.value);
        let oOutput = "";
        // jetzt die Schleife
        for (let i = 0; i < inputValue; i++) {
            oOutput += "o";
        }
        // os als Variable, da diese sich verändern(deshalb vorher mit let definiert)
        output.innerHTML = `L${oOutput}p`
    });
};




const input1 = document.querySelector<HTMLInputElement>("#input1");
const output1 = document.querySelector("#output1");
const button1 = document.querySelector("#button1");



if (input1 && output1 && button1) {
    button1.addEventListener("click", function handleClick1(){
        console.log("clicked1");
        const inputValue = Number(input1.value);
        let oOutput = "";
// Schleife mit if else, da Bedingung! (das ist die einzige Änderung im Vgl zu oben)
        for (let i = 0; i < inputValue; i++) {
            if (i % 2 === 0) {
                oOutput += "o"
            } else {
                oOutput += "O"
            }
        }
        output1.innerHTML = `L${oOutput}p`
    });
};



// statt button.addEventListener ("click") --> input.addEventListener ("change", function)
// wird dann bei Veränderung des Input Felds ausgeführt