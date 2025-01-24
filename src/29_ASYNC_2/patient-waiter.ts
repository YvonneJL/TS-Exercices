//& async-TS-Level-1_1
console.log("async-TS-Level-1_1");


//..Erstelle eine Funktion waitForTwoSeconds mit diesem Inhalt
//..Die Funktion soll asynchron aufrufbar sein, d. h. sie soll einen Promise<void> zurückgeben
//..Exportiere die Funktion
//..Erstelle eine Datei app.ts

// export const waitForTwoSeconds: Promise<void> = new Promise ((resolve, reject)=> {
//     setTimeout(() => {
//         console.log('Thank you for your patience');
//     }, 2000);
// });


export function waitForTwoSeconds() {
    return new Promise<void>((resolve) => {
    setTimeout(() => {
    console.log("Thanx 4 the patience 💜");
    resolve()
    }, 2000); // Warte für 2 Sekunden
    });
    }