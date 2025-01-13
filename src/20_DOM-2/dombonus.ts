//&Events-TS-Level-3_1
console.log("Events-TS-Level-3_1");

//..Du sollst Funktionen schreiben, die die Hintergrundfarbe der Seite verändert.

//..1. Ändere die Hintergrundfarbe, wenn auf einen Button geklickt wird.
//..2. Ändere die Hintergrundfarbe, wenn die Regler verschoben werden in den jeweiligen Farbwert.
//..3. Konvertiere Dezimal zu Hex.
//..Nutze let count = 0; (global variable).


const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const paragraphDemo = document.querySelector("#demo");


// Zählvariable global bestimmen, da <p> Tag maipuliert werden soll und anzeigen soll wie oft die Buttons schon geklickt wurden
let count = 0;


// eine Klickfunktion für alle Buttons in einem 
//dann vorher .forEach() um durch alle Buttons zu gehen
//auf jeden button hierdrin einen Evenetlistener
// im Klickevent zähle ich die Zählvariable nach oben
//ich bestimme die Farben variable mit .textContent (da sie auf dem Button steht)
// ich verändere die Farbe des body mit .style --> hier musste ich die variable color in Backtigs schreiben
//ich verändere den .textContent des <p> tags und nutze hierbei die count Variable
if (buttons && body && paragraphDemo) {
    buttons.forEach((button)=> {
        button.addEventListener("click", function(){
            count++
            const color = button.textContent
            body.style.backgroundColor = `${color}`;
            paragraphDemo.textContent = `Die Buttons wurden insgesamt ${count} x geklickt.`
        });
    });
};

//hier die range inputs

//erstmal die weiteren relevanten Elemente ziehen
const inputRed = document.querySelector<HTMLInputElement>("#red-slider");
const inputGreen = document.querySelector<HTMLInputElement>("#green-slider");
const inputBlue = document.querySelector<HTMLInputElement>("#blue-slider");

//eine allgemeine Funktion definieren
if (inputRed && inputGreen && inputBlue && paragraphDemo) {
    function changeColor() {
        //die values der inputfelder ziehen
        const valueRed = inputRed?.value
        const valueGreen = inputGreen?.value
        const valueBlue = inputBlue?.value
        //was passieren soll-->style background verändern
        // rgb (und die einzelnen values)
        // und das textfeld soll sich ändern und den Hexcode mit anzeigen
        if (body && paragraphDemo && valueRed && valueGreen && valueBlue) {
            body.style.backgroundColor = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
            paragraphDemo.textContent = `RGB( ${valueRed} ${valueGreen} ${valueBlue}, --> Hexcode: #${Number(valueRed).toString(16)}${Number(valueGreen).toString(16)}${Number(valueBlue).toString(16)}`;
        };
    };
    //hier für jeden input range dann die Eventlistener
    //wichtig: change, damit das veränderte input mitgelesen wird
    inputRed.addEventListener("change", changeColor);
    inputGreen.addEventListener("change", changeColor);
    inputBlue.addEventListener("change", changeColor);
};
