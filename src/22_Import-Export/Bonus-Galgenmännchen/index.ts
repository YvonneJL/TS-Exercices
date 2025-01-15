//&Project-TS Galgenmännchen
console.log("Project-TS Galgenmännchen");

//..In dieser Übung programmierst du das Spiel Galgenmännchen.
//..In dem Code-Snippet befindet sich ein Array aus Wörtern. Du kannst natürlich auch dein eigenes erstellen.
//..Das Ziel ist es das Wort zu erraten, dass zufällig aus diesem Array gewählt wurde.
//..Nutze zu beginn eine feste Anzahl an Runden, die der/die User:in versuchen kann (wähle selber welche Anzahl).

//..Bonus

//..Erstelle die Buttons A-Z mit Hilfe eines Loops.
//..Zähle die Runde nur hoch, wenn der/die User:in einen falschen Buchstaben gewählt hat.
//..Wenn der/die User:in einen falschen Buchstaben ausgewählt hat wird dieser Button ausgegraut.
//..Erstelle ein Input-Feld, mit dem der/die User:in einen Schwierigkeitsgrad wählen kann.
//..Erstelle die Anzahl der Versuche aus der Länge des Wortes.
//..Style das ganze Spiele.

const words = ["Abendbrot", "Brueckentag", "Erklaerungsnot", "Fingerspitzengefuehl", "Fremdschaemen", "Geborgenheit", "Geschmacksverirrung", "Schweinehund", "Kopfkino", "Kummerspeck", "Schnapsidee", "Torschlusspanik", "verabredet", "verschlimmbessern", "Vorfreude", "Weltschmerz", "Zeitgeist", "Zugzwang"]


const allButtons = document.querySelectorAll(".button");
const moreButton = document.querySelector("#more");
const resultElement = document.querySelector("#result");


//wie kann ich string zufällig aus Array ziehen?
// eine Methode muss dann durch zufällig gewähltes Array laufen und alle indexe finden, wo der eingegebene Buchstabe dem des Wortes gleicht
//wenn er gleicht, dann an die richtige Stelle setzen
// wenn Wort komplett gefunden--Yweitere Augabe "Yay"
// mit forEach durch alle Buttons und deren Wert, also Buchstaben auslesen --> click Event.