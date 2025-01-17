//&Enum-TS-Level-1_1
console.log("Enum-TS-Level-1_1");

//..Definiere ein Enum Weekday mit den Wochentagen Monday bis Sunday
//..Erstelle eine Datei days-months.ts
//..Lass dir dort die Werte für Monday bis Sunday auf der Konsole ausgeben
//..Definiere ein Enum Month mit den Monaten January bis December
//..Lass dir alle Werte auf der Konsole ausgeben

export enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

export enum Months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
};





//&Enum-TS-Level-1_2
console.log("Enum-TS-Level-1_2");

//..Lege eine Datei pizza.ts an
//..Definiere ein Enum PizzaSize mit den Größen Small, Medium, Large, Familie
//..Definiere ein weiteres Enum PizzaIngredients mit Werten wie Cheese, Onion, Salami 

enum PizzaSize {
    Small,
    Medium,
    Large,
    Family
};

enum PizzaIngredients {
    Cheese,
    Onion,
    Tomato,
    Olives,
    Capers,
    Salami,
    Parmesan,
    Serano,
};


//..Lege einen Typ Pizza mit den Eigenschaften size: PizzaSize und ingredients: PizzaIngredients[] an

type Pizza = {
    size: PizzaSize;
    ingredients : PizzaIngredients[];
};

//..Lege 4 Pizza-Objekte mit verschiedenen Größen und Belägen an

const pizzaOne: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Capers, PizzaIngredients.Cheese, PizzaIngredients.Salami],
};

const PizzaTwo: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Salami, PizzaIngredients.Parmesan, PizzaIngredients.Olives]
}

console.log(pizzaOne);
console.log(PizzaTwo);





//& Enum-TS-Level-2_1
console.log("Enum-TS-Level-2_1");


//..Definiere ein Enum HtmlError mit folgenden HTML-Error-Codes
//..Das Enum soll sowohl den Fehlernamen als auch den Zahlenwert enthalten

enum ErrorCodes {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500,
};

//..Schreibe eine Funktion showHtmlError()
//..Lass dir in der Funktion mit Math.random zufällige Zahlen zwischen 0 - 5 generieren
//..ist der Wert 0, 1 oder 2, gib HtmlError.OK aus
//..ist der Wert 3, gib HtmlError.Redirect aus
//..ist der Wert 4, gib HtmlError.BadRequest aus
//..ist der Wert 5, gib HtmlError.InternalServerError aus

function showHtmlError () {
    const randomNumber = Math.floor(Math.random()* 6)
    if (randomNumber <=2) {
        console.log(ErrorCodes.OK);
    } else if (randomNumber === 3) {
        console.log(ErrorCodes.Redirect);
    } else if (randomNumber === 4) {
        console.log(ErrorCodes.BadRequest);
    } else {
        console.log(ErrorCodes.InternalServerError);
    }
};

showHtmlError();





//& Enum-TS-Level-2_2
console.log("Enum-TS-Level-2_2");


//..Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen.
//..Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten.
//..Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau.
//..Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z. B. Gelb = #FFFF00).

enum ClothingColor {
    Gelb = "#F0E68C",
    Orange = "#EE9A00",
    Pink = "#FFC0CB",
    Blau = "#1874CD",
    Lila = "#9F79EE",
    Grau = "#B0B0B0"
};

//..Lege dir ein Array mit allen Farben an: allColors: ClothingColor[]
//..Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe .


const allColors : ClothingColor[] = [ClothingColor.Gelb, ClothingColor.Orange, ClothingColor.Pink, ClothingColor.Blau, ClothingColor.Lila, ClothingColor.Grau];
console.log(allColors);

const sectionElement = document.querySelector("#hero");
//die Schleife läuft hier zweimal
//-wg IMPORT UND EXPORT
// TS liest erstmal die Datei durch aus der importiert/exportiert wird und führt dabei schon einmal alles aus -dann importiert/exportiert TS und führt danach nochmal alles aus!
for (let i = 0; i<=allColors.length-1; i++) {
    const button = document.createElement("button");
    button.style.backgroundColor = allColors[i];
    button.classList.add("button");
    sectionElement?.appendChild(button);
};





//&Enum-TS-Level-3_2
console.log("Enum-TS-Level-3_2");

//..Erstelle ein Enum Permissions für die Verwaltung von Zugriffsrechten
//..None = 0, Read = 1, Write = 2, Execute = 4,
//..Hat ein User eine höhere Berechtigung, schließt das die darunterliegenden mit ein
//..(Berechtigung Execute schließt das Read und Write mit ein…)

enum Permissions {
    None = 0,
    Read = 1,
    Write = 2,
    Execute = 3,
    Delete = 8,
};

console.log(Object.values(Permissions));
console.log(Object.keys(Permissions));



//..Schreibe eine Funktion, die als Parameter einen Enum-Wert für Permissions übergeben bekommt und auf der Konsole ausgibt, welche Berechtigungen eingeschlossen sind

function allow(permission: number) {
    //zuerst ein Array definieren, das dann mit den Berechtigungen gefüllt wird
    const permissionsList: string[] = [];

    // Prüfen, ob die Berechtigung "Execute" gesetzt ist
    // dann entsprechende darunter liegende Berechtigungen dazu pushen
    if (permission === Permissions.Execute) {
        permissionsList.push(Permissions[2]);
        permissionsList.push(Permissions[1]);
        permissionsList.push(Permissions[3]);
    }

    // Prüfen, ob die Berechtigung "Write" gesetzt ist
    if (permission === Permissions.Write) {
        permissionsList.push(Permissions[1]);
        permissionsList.push(Permissions[2]);
    }

    // Prüfen, ob die Berechtigung "Read" gesetzt ist
    if (permission === Permissions.Read) {
        permissionsList.push(Permissions[1]);
    }

    // Prüfen, ob "None" gesetzt ist (keine Berechtigung)
    if (permission === Permissions.None) {
        permissionsList.push(Permissions[0]);
    }

    // Ausgabe der Berechtigungen
    console.log(`Berechtigungen: ${permissionsList}`);
}


//..Rufe die Funktion mit allen möglichen Werten für das Enum auf
allow(Permissions.Delete);



//..Erweitere das Enum um den Wert Delete = 8
//..Läuft dein Code direkt ohne weitere Anpassung?
//meine nicht (meine ist teilweise von ChatGPT)