//&Module-Namensräume-TS-1_1
console.log("Module-Namensräume-TS-1_1");

//..Erstelle zwei TypeScript-Dateien app.ts und calculator.ts
//..Erstelle in der calculator.ts eine Funktion namens addFive, die zu einer als Parameter übergebenen Zahl 5 dazuaddiert und das Ergebnis zurückgibt
//..Exportiere die Methode mit ihrem Namen

//..Importiere die Funktion in der app.ts
//..Rufe die Funktion 3x mit beliebigen Zahlen auf
//..Die Ergebnisse sollen in der Konsole ausgegeben werden.

import {addFive} from "./typescript/calculator.ts"

console.log(addFive(5));
console.log(addFive(10));
console.log(addFive(300));





//&Module-Namensräume-TS-1_2
console.log("Module-Namensräume-TS-1_2");

//..Erstelle zwei TypeScript-Dateien app.ts und operations.ts
//..Erstelle in der operations.ts vier Funktionen
//..add (a: number, b: number)
//..subtract (a: number, b: number)
//..multiply (a: number, b: number)
//..divide (a: number, b: number)
//..Die Funktionen sollen jeweils den Wert der Addition, Subtraktion, Multiplikation und Division zurückgeben
//..Exportiere die Funktionen am Dateiende mit ihren tatsächlichen Namen



//..Importiere die Funktionen in der app.ts
//..Rufe die Funktionen mit beliebigen Zahlen auf
//..Die Ergebnisse sollen in der Konsole ausgegeben werden.

import {add, subtract, multiply, divide} from "./typescript/operations.ts";

console.log("---folgend die Ergebnisse aus der operations.ts");
console.log(`Das Ergebnis der Addition von 3 und 7 ist: ${add(3, 7)}`);
console.log(`Das Ergebnis der Subtraktion von 3 und 7 ist: ${subtract(3, 7)}`);
console.log(`Das Ergebnis der Multiplikation von 3 und 7 ist: ${multiply(3, 7)}`);
console.log(`Das Ergebnis der Division von 3 und 7 ist: ${Math.ceil(divide(3, 7))}`);



//..Erstelle eine weitere Datei operations2.ts
//..Kopiere die Funktionen aus der operations.ts
//..Exportiere diese Funktionen am Dateiende mit den neuen Namen:
//..addNumbers, subtractNumbers, multiplyNumbers und divideNumbers

//..Importiere die Funktionen in der app.ts
//..Rufe die Funktionen mit beliebigen Zahlen auf
//..Die Ergebnisse sollen in der Konsole ausgegeben werden.

import {addtion, subtraction, multiplication, division} from "./typescript/operations2.ts";

console.log("---folgend die Ergebnisse aus der operations2.ts");
console.log(addtion(12, 6));
console.log(subtraction(12, 6));
console.log(multiplication(12, 6));
console.log(division(12, 6));





//&Module-Namensräume-TS-3_1
//--> siehe anderer Ordner