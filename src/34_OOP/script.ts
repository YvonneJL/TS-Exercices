//& OOP-Class-TS-Level-1_1

import Actor from "./Actor";
import { Car } from "./Car";
import { CarType } from "./Car";
import Driver from "./Driver";
import Episode from "./Eisode";
import IceCreamFlavor from "./IceCreamFlavor";
import Person from "./Person";
import SchoolClass from "./SchoolClass";
import TVShow from "./Serie";

//..Lege in einer neuen Datei eine Klasse mit dem Namen IceCreamFlavor an
//..Die Klasse soll folgende Attribute haben
//..name: string
//..price: number
//..isPopular: boolean
//..description: string → optional
//..name soll beim Anlegen ‘’ sein, price = 0, isPopular = false und description = undefined
//..Lege 4 Instanzen von IceCreamFlavor an und setze deren Eigenschaften

const vanilla = new IceCreamFlavor();
vanilla.name = "Vanilla";
vanilla.price = 3;
vanilla.isPopular = true;
vanilla.description = "eine sehr langweilige Eissorte";

const yoghurt = new IceCreamFlavor();
yoghurt.name = "Joghurt";
yoghurt.price = 3.5;
yoghurt.isPopular = true;

const mangoNougat = new IceCreamFlavor();
mangoNougat.name = "Mango Nougat";
mangoNougat.price = 4;
mangoNougat.isPopular = false;

const chocolate = new IceCreamFlavor();
chocolate.name = "Schokolade";
chocolate.price = 3;
chocolate.isPopular = true;
chocolate.description = "eine sehr langweilige Eissorte";

//..Lege die 4 Instanzen in einem Array ab

const iceCreamFlavors = [];

iceCreamFlavors.push(vanilla);
iceCreamFlavors.push(yoghurt);
iceCreamFlavors.push(mangoNougat);
iceCreamFlavors.push(chocolate);

console.log(iceCreamFlavors);

//..Lass dir von allen populären Eissorten (isPopular) den Namen auf der Konsole ausgeben

iceCreamFlavors.forEach((element) => {
  element.showNameOfIcecream();
});

//& OOP-Class-TS-Level-1_12

//..Wir bauen auf der Klasse IceCreamFlavors auf
//..Die Klasse soll drei Methoden bekommen
//..getTotalPrice(numberOfScoops: number)
//..gibt den Gesamtpreis anhand der übergebenen Anzahl an Eiskugeln auf der Konsole aus

console.log(mangoNougat.getTotalPrice(3));

//..printInfo()
//..gibt z. B. Folgendes auf der Konsole aus

vanilla.printInfo();
mangoNougat.printInfo();

//..getLengthOfDescription()
//..gibt die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist

//mangoNougat.getLengthOfDescription();
chocolate.getLengthOfDescription();

//& BONUS DOM

const iceSection = document.querySelector("#ice-cream");



if (iceSection) {
  iceSection.className = "grid grid-cols-4 gap-5";
}

iceCreamFlavors.forEach((flavor) => {
    let scoopAmount: number = 0;

  const iceDiv = document.createElement("div");
  const popularDiv = document.createElement("div");
  const iceHeadline = document.createElement("h1");
  const icePrice = document.createElement("p");
  const iceAmountScoops = document.createElement("p");
  const icePriceTotal = document.createElement("p");
  const iceButtonAdd = document.createElement("button");

  iceSection?.appendChild(iceDiv);
  iceDiv.appendChild(popularDiv);
  iceDiv.appendChild(iceHeadline);
  iceDiv.appendChild(icePrice);
  iceDiv.appendChild(iceAmountScoops);
  iceDiv.appendChild(icePriceTotal);
  iceDiv.appendChild(iceButtonAdd);


  popularDiv.textContent = "💖"
  if (flavor.isPopular === false) {
    popularDiv.className = "invisible"
  } 
  iceHeadline.textContent = flavor.name;
  icePrice.textContent = flavor.price.toString();
  iceAmountScoops.textContent = `Scoops: ${scoopAmount} `
  icePriceTotal.textContent = `${scoopAmount * flavor.price}` 
  iceButtonAdd.textContent = "+1";

  iceDiv.className = "bg-red-200 text-center"
  iceButtonAdd.className = "bg-red-300 py-1 px-5"

  iceButtonAdd.addEventListener("click", ()=> {
    scoopAmount++
    iceAmountScoops.textContent = `Scoops: ${scoopAmount} `
    icePriceTotal.textContent = `${scoopAmount * flavor.price}` 
    console.log(scoopAmount);
  })
});



//& OOP-Class-TS-Level-1_2

//..Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an
//..Im Konstruktor der Klasse SchoolClass soll auf der Konsole ausgegeben werden: “School class creation successful”
//..Es sollen zwei Konstruktorparameter übergeben werden: id und name, diese setzen die entsprechenden Eigenschaften der Klasse
//..die Eigenschaft endDate soll optional sein und wird nicht über den Konstruktor angelegt
//..Lege drei SchoolClasses an - sie müssen mit Konstruktorparametern angelegt werden
//..Ändere bei zwei SchoolClasses nachträglich den Namen über das Setzen der Eigenschaft

const classOne = new SchoolClass(1, "Class One");
const classTwo = new SchoolClass(2, "Class Two");
const classThree = new SchoolClass(3, "Class Three");

console.log(classOne);

classTwo.id = 4;
classOne.name = "Klasse Eins";
classOne.endDate = "May";

console.log(classOne);

//& OOP-Class-TS-Level-2_1

//..Wir wollen unsere Schulklassenverwaltung (SchoolClass) nun weiter ausbauen.
//..Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften:
//..id
//..firstName
//..lastName
//..birthday
//..Überlege dir hierzu selbst die passenden Datentypen.

//..Füge der Klasse SchoolClass ein weiteres Attribut/eine Eigenschaft hinzu, und zwar ein Array aus Personen.

//..Teste deine Klassen und Methoden in der app.ts. Erstelle eine Schulklasse und füge mehrere Personen hinzu

//..d) Lass dir alle Personen aus der Schulklasse ausgeben
//..du kannst eine Schleife zur Erstellung von den Personen benutzen.

for (let i = 0; i <= 10; i++) {
  const person = new Person();
  person.id = i;
  person.firstName = `firstName ${i}`;
  person.lastName = `lastName ${i}`;
  person.birthday = `date ${i}`;

  //unteres ohne Methode!
  //classOne.classMates.push(person)

  //da ich classMates auf private gestellt habe, habe ich eine Methode erstellen müssen, um die classMates hinzuzufügen-->diese Methode rufe ich hier auf
  classOne.addClassMate(person);
}

console.log(classOne);

//& OOP-Class-TS-Level-2_2

//..Erstelle eine Klasse Car mit folgenden Eigenschaften:
//..brand (Marke)
//..constructionYear(Baujahr)
//..currentSpeed (aktuelle Geschwindigkeit)
//..Überlege dir sinnvolle Datentypen für die Eigenschaften.

//..Erstelle eine separate Klasse Driver mit folgenden Eigenschaften:
//..firstName (Vorname)
//..lastName (Nachname)
//..age (Alter)
//..car (Auto)
//..Überlege dir sinnvolle Datentypen für die Eigenschaften.
//..Im Konstruktor von Driver soll bereits das zugehörige Auto übergeben und gesetzt werden.

//..Zu guter Letzt sollst du in der Datei app.ts, mehrere Autos und Fahrer erstellen und miteinander verknüpfen

const carOne = new Car("Seat Ibiza", 2005, 120, CarType.Hatchback);
const carTwo = new Car("VW Golf", 1995, 199, CarType.Convertible);
const carThree = new Car("VW T1", 1980, 70, CarType.Unknown);

const driverOne = new Driver("Yvi", "Lodi", 36, carOne, 2008);
console.log(driverOne);
const driverTwo = new Driver("Basti", "K", 30, carTwo, 2014);
console.log(driverTwo);
const driverThree = new Driver("Lotte", "", 30, carThree, 2014);
console.log(driverThree);

//& OOP-Class-TS-Level-1_13

//..Wir bauen auf den Klassen Car und Driver auf
//..in der Klasse Car
//..soll constructionYear nur über den Konstruktor gesetzt werden können
//..Wert ist nur über einen Getter (get-Methode) abrufbar

console.log(carOne.constructionYear);
console.log(carTwo.constructionYear);
console.log(carThree.constructionYear);

//..soll es eine Methode getSpeedInfo(): string geben mit dieser Logik geben
//..currentSpeed ≤ 40 → Rückgabewert ‘Driving slowly’
//..currentSpeed > 40 und ≤ 70 → Rückgabewert ‘Driving normally’
//..currentSpeed > 70 und ≤ 120 → Rückgabewert ‘Driving fast’
//..currentSpeed > 120 und ≤ 190 → Rückgabewert ‘Driving really fast’
//..currentSpeed> 190 → ‘WTF’

console.log(carOne.getSpeedInfo());
console.log(carTwo.getSpeedInfo());
console.log(carThree.getSpeedInfo());

//..Lege in einer neuen Datei ein Enum namens CarType an
//..Werte → Unknown, Sedan, SUV, Coupe, Convertible, Hatchback, Truck
//..erweitere die Klasse Car um eine neue Eigenschaft carType: CarType

//..in der Klasse Driver
//..soll es eine weitere Eigenschaft licenseFromYear: number geben, die nur über den Konstruktor gesetzt werden kann
//..Wert ist nur über einen Getter (get-Methode) abrufbar
//..soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt

console.log(driverOne.getCarType());
console.log(driverTwo.getCarType());
console.log(driverThree.getCarType());

//& OOP-Class-TS-Level-3_1

//..Wir wollen die Grundlagen für eine Streaming-App schaffen.
//..Hierzu brauchen wir die Klassen: Series (= Serie), Episode (=Episode) und Actor (=Darsteller:in)

//..Es besteht folgender Zusammenhang
//..Serien haben Episoden
//..Episoden haben Darsteller:innen

//..Ein Serie hat folgende Eigenschaften:
//..title
//..description
//..startYear
//..endYear
//..episodes

//..Eine Episode hat folgende Eigenschaften:
//..title
//..length
//..description
//..actors

//..Eine Actor hat folgende Eigenschaften
//..firstName
//..lastName
//..birthday
//..gender

//..Überlege dir sinnvolle Datentypen für die Eigenschaften.

//..Lege 3 Serien mit ein paar Episoden und Darsteller:innen an

const actor1 = new Actor("Bryan", "Crabston", "1956-03-07", "Male");
const actor2 = new Actor("Aaron", "Paul", "1979-08-27", "Male");
const actor3 = new Actor("Anna", "Gunn", "1968-04-11", "Female");

const allActorsEpisode1 = [];
allActorsEpisode1.push(actor1);
allActorsEpisode1.push(actor2);
allActorsEpisode1.push(actor3);

const allActorsEpisode2 = [];
allActorsEpisode2.push(actor1);
allActorsEpisode2.push(actor2);

const episode1 = new Episode("Episode 1", "120 minutes", "", allActorsEpisode1);
const episode2 = new Episode("Episode 2", "60 minutes", "", allActorsEpisode2);

const allEpisodes = [];
allEpisodes.push(episode1);
allEpisodes.push(episode2);

const tvShow1 = new TVShow(
  "Breaking Bad",
  "A high school chemistry teacher turned methamphetamine manufacturer",
  2008,
  2013,
  allEpisodes
);

//..Schreibe eine Funktion printSeriesInfo(series: Series), die beispielhaft für eine Serie Folgendes auf der Konsole ausgibt.

function printSeriesInfo(series: TVShow) {
  console.log(`${series.title}`);
  console.log(series.description);
  console.log(series.startYear);
  console.log(series.endYear);
  console.log(series.episodes.length);

  series.episodes.forEach((episode) => {
    episode.actors.forEach((actor) => {
      console.log(
        `${actor.firstName} ${actor.lastName}: -Birthday: ${actor.birthday}, -Gender: ${actor.gender}`
      );
    });
  });

  //! Hier um Dopplung zu vermeiden, von Julia
  // Array, der die Schauspieler nur einzeln aufführt
  const allActors: Actor[] = [];
  // Dopplung von Schauspielern vermeiden
  series.episodes.flatMap((episode) =>
    episode.actors.forEach((actor) => {
      if (
        !allActors.some(
          (a) =>
            a.firstName === actor.firstName && a.lastName === actor.lastName
        )
      )
        allActors.push(actor);
    })
  );
  console.log(allActors);
}

printSeriesInfo(tvShow1);

//..Bei Actors sollen alle Darsteller:innen aus allen Episoden ausgegeben werden.
