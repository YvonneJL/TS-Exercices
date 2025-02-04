//& ErrorHandling-TS-Level-1_1
console.log("ErrorHandling-TS-Level-1_1");

//..Schreibe eine Funktion greetUser, die einen Benutzernamen vom Benutzer über ein Window-Prompt abfragt.
//..Werfe selbst einen Fehler, wenn kein Name eingegeben wurde
//..Verwende dann einen try-catch-Block, um diesen Fehler beim Abrufen des Benutzernamens abzufangen.
//..Wenn der Benutzer einen Namen eingibt, gib eine personalisierte Begrüßung aus, die den Namen des Benutzers verwendet.
//..Wenn ein Fehler auftritt (z. B. wenn der Benutzer den Dialog schließt), gib eine Standardbegrüßung aus.

function greetUser() {
  const username = window.prompt("Bitte gib deinen Benutzernamen hier ein!");
  if (username) {
    console.log(`Hello dear ${username}`);
  } else {
    throw new Error("Hello dear Customer!");
  }
}

try {
  greetUser();
} catch (error) {
  console.log(error);
}

//& ErrorHandling-TS-Level-2_1
console.log("ErrorHandling-TS-Level-2_1");

//..Schreibe eine Funktion generateLottoNumber, die eine Lottozahl generiert.
//..generiere dort eine Zufallszahl zwischen 1 und 100 mit Math.random().
//..Wenn die random erstellte Zahl größer als 49 ist, soll ein Fehler ausgelöst werden.
//..Ansonsten wird die Zahl als Rückgabewert zurückgegeben
//..Rufe in einer Schleife so oft generateLottoNumber auf, bis du 7 gültige Zahlen erhältst
//..Verwende einen try-catch-Block, um Fehler abzufangen und zu behandeln.
//..Schreib die generierte Lottozahl in ein Array lottoResults: number[], wenn kein Fehler aufgetreten ist.
//..Es dürfen keine doppelten Zahlen in lottoResults aufgenommen werden
//..Lass dir am Ende die Lottozahlenreihe auf der Konsole ausgeben

const arrayOfLuckyNumbers: number[] = [];

function generateLottoNumber() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  if (randomNum > 49) {
    console.log(randomNum);
    throw new Error("Die Zahl ist größer als 49!");
  } else {
    arrayOfLuckyNumbers.push(randomNum);
    console.log(arrayOfLuckyNumbers);
    return randomNum;
  }
}

//while Schleife, weil Bedingung keinen Zähler in dem Sinne braucht...
//Innerhalb der Schleife den try catch Block, da sonst aufhört, wenn Zahl > 49
while (arrayOfLuckyNumbers.length < 7) {
  try {
      generateLottoNumber();
    console.log(arrayOfLuckyNumbers);
  } catch (error) {
    console.log(error);
  }
}





//& ErrorHandling-TS-Level-2_2
console.log("ErrorHandling-TS-Level-2_2");

//..Schreibe eine Funktion getCurrentPosition, die die Geolocation-API verwendet, um die aktuellen Koordinaten des Benutzers abzurufen.
//..siehe https://www.w3schools.com/html/html5_geolocation.asp
//..Verwende einen try-catch-Block um Fehler abgefangen werden, falls der Browser die Geolocation-API nicht unterstützt oder der Benutzer die Berechtigung zur Standortfreigabe verweigert.
//..Falls ein Fehler auftritt, gib eine entsprechende Fehlermeldung mit window.alert aus.
//..Falls die Koordinaten erfolgreich abgerufen werden, gib sie mit window.confirm aus.
//..Logge im [finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch?retiredLocale=de)-Block auf die Konsole “getCurrentPosition finished”


// function getcurrentLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition();
//     } else {
//       throw new Error ("nenene")
//     }
//   }
  
 