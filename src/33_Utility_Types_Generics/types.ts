//& Utility-Types-TS-Level-1_1

//..Erstelle ein Interface IBook mit folgenden Eigenschaften
    //..author: string
    //..name: string
    //..publishingYear: string
    //..shortDescription?: string
    //..numberOfPages: number

interface IBook {
    author: string,
    name: string,
    publishingYear: string,
    shortDescription?: string
    numberOfPages: number
}

//..Erstelle einen neuen Type PartialBook basierend auf IBook
//..Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name

type PartialBook = Partial<IBook>

const book: PartialBook = {
    author: "Yvi Lodi",
    name: "not today"
}

//..Lege dann ein neues Interface IPartialBook basierend auf IBook an
//..Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name

interface IPartialBook extends Partial<IBook>{}

const partialBook2: IPartialBook = {
    name: "againagainagain"
}





//& Utility-Types-TS-Level-1_2

//..Baut auf [Utility-Types-TS-Level-1_1] auf
//..Erstelle einen neuen Type BasicBook basierend auf IBook
//..BasicBook soll folgende Eigenschaften nicht haben
    //..publishingYear: string
    //..shortDescription: string
//..Lege eine Variable basicBook vom Typ BasicBook an und vergebe nur die nötigen Eigenschaften


type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">

const basicBook: BasicBook = {
    author: "Yvi Lodi",
    name: "same again",
    numberOfPages: 12
}

//..Lege dann ein neues Interface IBasicBook basierend auf IBook an, bei dem ebenfalls publishingYear und shortDescription fehlen
//..Lege eine Variable basicBook2 vom Typ IBasicBook an und vergebe nur die nötigen Eigenschaften

interface IBasicBook extends Omit<IBook, "publishingYear" | "shortDescription">{}

const basicBook2: IBasicBook = {
    author: "Yvi Lodi",
    name: "same again",
    numberOfPages: 12
}




//& Utility-Types-TS-Level-1_3

//..Baut auf [Utility-Types-TS-Level-1_1] auf
//..Erstelle einen neuen Type BookDescription basierend auf IBook
//..BookDescription soll folgende Eigenschaften von IBook übernehmen
    //..name: string
    //..shortDescription: string
//..Lege eine Variable bookDescription vom Typ BookDescription an und vergebe nur die nötigen Eigenschaften

type BookDescription = Pick<IBook, "name" | "shortDescription" >;

const bookDescription: BookDescription = {
    name: "Yvi Lodi",
    shortDescription: "lorem ipsum"
}

//..Lege dann ein neues Interface IBookDescription basierend auf IBook an - ebenfalls name und shortDescription von IBook übernehmen
//..Lege eine Variable bookDescription2 vom Typ IBookDescription an und vergebe nur die nötigen Eigenschaften

interface IBookDescription extends Pick<IBook, "name" | "shortDescription" >{};

const bookDescription2: IBookDescription = {
    name: "Yvi Lodi",
    shortDescription: "lorem ipsum"
}




//& Utility-Types-TS-Level-1_4

//..Baut auf [Utility-Types-TS-Level-1_1] auf
//..Erstelle einen neuen Type RequiredBook basierend auf IBook
//..Alle Eigenschaften von IBook sind required ⇒ müssen angegeben werden
//..Lege eine Variable requiredBook vom Typ BookDescription an und alle nötigen Eigenschaften

type RequiredBook = Required<IBook>

const requiredBook: RequiredBook = {
    author: "Yvi",
    name: "dodldoo",
    publishingYear: "2025",
    shortDescription: "lorem ipsum",
    numberOfPages: 12
}

//..Lege dann ein neues Interface IRequiredBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier Pflicht
//..Lege eine Variable requiredBook2 vom Typ IRequiredBook an und vergebe alle nötigen Eigenschaften

interface IRequiredBook extends Required<IBook>{};

const requiredBook2: IRequiredBook = {
    author: "Yvi",
    name: "dodldoo",
    publishingYear: "2025",
    shortDescription: "lorem ipsum",
    numberOfPages: 12
}




//& Utility-Types-TS-Level-1_5

//..Baut auf [Utility-Types-TS-Level-1_1] auf
//..Erstelle einen neuen Type ReadOnlyBook basierend auf IBook
//..Alle Eigenschaften von IBook sind readonly ⇒ schreibgeschützt
//..Lege eine Variable readonlyBook vom Typ ReadOnlyBook an und vergeben alle nötigen Eigenschaften und Werte
//..Versuche nachträglich Werte zu setzen

type ReadOnlyBook = Readonly<IBook>

const readonlyBook: ReadOnlyBook = {
    author: "Yvi",
    name: "dodldoo",
    publishingYear: "2025",
    numberOfPages: 12
}

//..Lege dann ein neues Interface IReadOnlyBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier schreibgeschützt
//..Lege eine Variable readonlyBook2 vom Typ IReadOnlyBook an und vergebe alle nötigen Eigenschaften und Werte
//..Versuche nachträglich Werte zu setzen

interface IReadOnlyBook extends Readonly<IBook>{};

const readonlyBook2: ReadOnlyBook = {
    author: "Yvi",
    name: "dodldoo",
    publishingYear: "2025",
    numberOfPages: 12
}




//& Utility-Types-TS-Level-1_6

//..Erstelle einen neuen Type BasicColors mit den möglichen Werten:
//..RED, BLUE, GREEN, YELLOW, BLACK, WHITE
//..Erstelle einen weiteren Type RealColors auf Basis von BasicColors mit Exclude
//..Werte RED, BLUE, GREEN, YELLOW

type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE"

type RealColors = Exclude<BasicColors, "BLACK" | "WHITE">;

//..Lege eine Funktion showColors mit einem Parameter vom Typ RealColors an
//..Gib dort die Farbe auf der Konsole aus
//..Versuche ‘BLACK’ zu übergeben
//..Übergebe einen gültigen Wert

function showColors (color: RealColors) {
    console.log(color);
    color = "YELLOW"
    console.log(color);
}

showColors("RED")
showColors("GREEN")




//& Utility-Types-TS-Level-2_1

//..Erstelle ein Interface ITea mit folgenden Eigenschaften: name, type, temperature, brewingTime
//..Erstelle dann einen Type PartialTea, das ebenfalls diese Eigenschaften enthält, die aber alle optional sind

interface ITea {
    name: string,
    type: string,
    temperature: number,
    brewingTime: string,
}

type PartialTea = Partial<ITea>

//..Schreibe eine Funktion prepareTea, die ein PartialTea-Objekt akzeptiert und auf der Konsole ausgibt “Preparing [tea.name] - will be ready in [tea.brewingTime]”
//..Gib einen Fehler auf der Konsole aus, falls name und brewingTime nicht gesetzt sind und brich die Funktion ab

function prepareTea (tea: PartialTea) {
    if (!tea.name && !tea.brewingTime) {
        return console.log("There was no name or no brewing time");
    } else {
        console.log(`Preparing ${tea.name}- will be ready in ${tea.brewingTime}`);
    }
}

//..Lege ein Objekt vom Typ ITea an und übergebe es der Methode prepareTea
//..Lege ein Objekt vom Typ PartialTea an und übergebe es der Methode prepareTea

const tea1: ITea = {
    name: "Waky Waky",
    type: "Green Tea",
    temperature: 90,
    brewingTime: "1 minute",
}

prepareTea(tea1)

const tea2: PartialTea = {
    type: "Black tea"
}

prepareTea(tea2)




//& Utility-Types-TS-Level-3_1

//..Erstelle ein Interface ISmoothie mit folgenden Eigenschaften: name, ingredients, size (Enum: small, medium…) und price
//..Überlege dir sinnvolle Datentypen für die Eigenschaften

interface ISmoothie {
    name: string,
    ingredients: string,
    size: string,
    price: string
}


type PartialSmoothie = Partial<ISmoothie>

//..Erstelle eine Funktion customizeSmoothie, die ein Smoothie-Objekt (basicSmoothie) und ein Partial<ISmoothie>-Objekt (customizedSmoothie) als Parameter hat
//..Die Funktion soll die Eigenschaften aus den beiden Objekten kombinieren
//..Wenn eine Eigenschaft im customizedSmoothie gesetzt ist, soll sie die Eigenschaft im basicSmoothie überschreiben
//..Rückgabewert der Funktion ist ISmoothie

function customizeSmoothie (basicSmoothie: ISmoothie, smoothie: PartialSmoothie ) {

    return basicSmoothie = {...basicSmoothie, ...smoothie}
}

const basicSmoothie: ISmoothie = {
    name: "banane",
    ingredients: "apfel",
    size: "small",
    price: "2"
}

const smoothie: PartialSmoothie = {
    ingredients: "birne",
}

console.log(customizeSmoothie(basicSmoothie, smoothie));