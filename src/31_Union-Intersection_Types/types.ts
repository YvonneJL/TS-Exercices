//&UnionType-Level-1_1
console.log("UnionType-Level-1_1");

//..Erstelle dort einen Union Type namens Result mit den Werten "success", "error" und "pending"
//..Definiere eine Variable vom Typ Result und weise ihr einen der Werte zu.

type Result = "success" | "error" | "pending";

const variable: Result = "success";

//..Schreibe eine Funktion handleResult, die einen Parameter vom Typ Result akzeptiert.
//..Implementiere handleResult so, dass sie je nach übergebenem Wert eine entsprechende Meldung ausgibt.
//..Teste die Funktion, indem du verschiedene Werte an sie übergibst.

function handleResult(result: Result) {
  if (result === "success") {
    console.log("Success");
  } else if (result === "error") {
    console.log("Error");
  } else {
    console.log("Pending");
  }
}

handleResult("success");
handleResult("error");
handleResult("pending");

//& UnionType-Level-1_2
console.log("UnionType-Level-1_2");

//..Definiere einen Union Type namens NumericString, der entweder eine Zahl, einen String oder null darstellt.
//..Erstelle eine Variable vom Typ NumericString und weise ihr eine Zahl zu.

type NumericString = number | string | null;
const a: NumericString = 6;

//..Schreibe eine Funktion isNumber, die einen Parameter vom Typ NumericString akzeptiert.
//..Implementiere isNumber, so dass sie überprüft, ob der übergebene Wert eine Zahl ist.
//..Teste die Funktion, indem du verschiedene Werte mit unterschiedlichen Datentypen an sie übergibst.

function isNumber(par: NumericString): boolean {
  if (typeof par === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber(6));
console.log(isNumber(12));
console.log(isNumber("hello"));
console.log(isNumber(null));

//& UnionType-Level-2_1
console.log("UnionType-Level-2_1");

//..Erstelle folgende Datentypen (type)
//..Circle
//..shape: name (”circle”)
//..radius: number
//..Square
//..shape: name (”square”)
//..sideLength: number
//..Triangle
//..shape: name (”triangle”)
//..base: number
//..height: number
//..Rectangle
//..shape: name (”rectangle”)
//..width: number
//..height: number

type Circle = {
  shape: "circle";
  radius: number;
};

type Square = {
  shape: "square";
  sideLength: number;
};

type Triangle = {
  shape: "triangle";
  base: number;
  height: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type UnionAll = Circle | Square | Triangle | Rectangle | undefined;

//..Schreibe eine Funktion calculateArea, die die Fläche berechnet
//..Der Übergabeparameter soll ein UnionType von Circle, Square, Triangle,  Rectangle und undefined sein
//..der Rückgabewert ist die Größe der Fläche als number

//..Je nach Form, soll die Fläche entsprechend berechnet werden (Recherchiere nochmal, wenn du dich nicht mehr an die Formeln erinnern kannst)
//..Wird undefined übergeben, soll ein Fehler geworfen werden “No suitable shape found.”
//..Erstelle je ein Objekt für jede Form und übergebe sie an die Funktion calculateArea
//..Teste auf den Fall, wenn undefined übergeben wird

function calculateArea(x: UnionAll): number | undefined {
  if (x?.shape === "circle") {
    return Math.PI * x.radius * x.radius;
  } else if (x?.shape === "square") {
    return x.sideLength * x.sideLength;
  } else if (x?.shape === "triangle") {
    return x.base * x.height * 0.5;
  } else if (x?.shape === "rectangle") {
    return x?.height * x?.width;
  } else if (x === undefined) {
    console.log("No suitable shape found");
  }
}

const circle: Circle = {
  shape: "circle",
  radius: 2,
};

const square: Square = {
  shape: "square",
  sideLength: 3,
};

const triangle: Triangle = {
  shape: "triangle",
  base: 6,
  height: 4,
};

const rectangle: Rectangle = {
  shape: "rectangle",
  width: 5,
  height: 3,
};

console.log(calculateArea(rectangle));
console.log(calculateArea(circle));
console.log(calculateArea(triangle));
console.log(calculateArea(square));
console.log(calculateArea(undefined));

//& IntersectionType-Level-1_1
console.log("IntersectionType-Level-1_1");

//..Erstelle zwei Types, Alcohol und Mixer, die jeweils Eigenschaften für alkoholische Getränke und Mischgetränke definieren.
//..Alcohol hat die Eigenschaften: name, percentage und type
//..Mixer hat die Eigenschaften: name, type und carbonated
//..Lege anschließend einen Intersection-Typ namens Cocktail an, der sowohl die Eigenschaften von Alcohol als auch von Mixer enthält.

type Alcohol = {
  name: string;
  type: string;
  percentage: number;
};

type Mixer = {
  name: string;
  type: string;
  carbonated: boolean;
};

type Cocktail = Mixer & Alcohol;

//..Erstelle ein Objekt vom Typ Cocktail und weise ihm entsprechende Eigenschaften zu.
//..Gib die Eigenschaften des Cocktails auf der Konsole aus, um sicherzustellen, dass der Typ korrekt erstellt wurde.

const cocktail: Cocktail = {
  name: "Americano",
  type: "normal",
  percentage: 70,
  carbonated: false,
};

console.log(cocktail.name);
console.log(cocktail.type);
console.log(cocktail.percentage);
console.log(cocktail.carbonated);

//& IntersectionType-Level-1_2
console.log("IntersectionType-Level-1_2");

//..Wir erweitern die Aufgabe [IntersectionType-Level-1_1]

//..Schreibe eine Funktion mixCocktail mit zwei Parametern
//..alcohol: Alcohol
//..mixer: Mixer
//..Rückgabewert ist vom Intersection-Type Cocktail
//..das zurückgegebene Objekt soll die Eigenschaften vom übergebenen alcohol und mixer enthalten

//..bei Feld name wird eine Kombination aus beiden Objekten gesetzt, z. B. alcohol.name = ‘Wodka’ und [mixer.name] = ‘Lemon’ ⇒ ‘Wodka Lemon’
//..Lege 2 Alkohol und zwei Mischgetränke an
//..Rufe die Methode mixCocktail mit allen Kombinationen auf

const alcoholOne: Alcohol = {
  name: "Wodka",
  type: "alcoholic",
  percentage: 70,
};

const mixerOne: Mixer = {
  name: "Lemon",
  type: "non-alcoholic",
  carbonated: true,
};

function mixCocktail(alcohol: Alcohol, mixer: Mixer): Cocktail {
  return {
    name: `${alcohol.name} ${mixer.name}`,
    type: "cocktail",
    carbonated: mixer.carbonated,
    percentage: alcohol.percentage / 2,
  };
};

console.log(mixCocktail(alcoholOne, mixerOne));
