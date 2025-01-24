import {waitForTwoSeconds} from "./patient-waiter.ts";


//..Binde patient-waiter.ts ein
//..Lege eine asynchrone Funktion mit dem Namen main an

// waitForTwoSeconds();

async function main () {
    console.log("Hi, here I am...");
    await waitForTwoSeconds();
    console.log("Hello...");
    console.log("Can you hear me?");
};


// wenn ich die Funktion von oben OHNE AWAIT aufrufe, wird alles normal, also direkt geloggt
// nur die waitForTwoSeconds wird erst nach 2 Sek ausgeführt, also als letztes, da alles andere schneller
//async ändert in diesem Fall nichts.
main();


//..Schreibe in der Funktion auf die Konsole “Hi, here I am…”
//..Rufe dann waitForTwoSeconds auf ohne zu warten (ohne await)
//..Schreibe danach auf die Konsole “Hello…”
//..Schreib danach auf die Konsole “Can you hear me…”
//..Rufe main() auf
//..Schau dir in der Ausgabe an, wann was geloggt wird




//& async-TS-Level-1_2
console.log("async-TS-Level-1_2");

//..Jetzt soll auf die Ausführung von waitForTwoSeconds gewartet werden
//..Nutze das Schlüsselwort await an der richtigen Stelle in der Funktion main
//..Schau dir nun die Reihenfolge in der Ausgabe an


//siehe oben:
// mit "await" vor der Funktion (da diese Funktion abgewartet werden soll), wartet der Rest der Funktion (also erst unterhalb vom await) er und wird zusammen mit der Funktion waitForTwoSeconds ausgeführt