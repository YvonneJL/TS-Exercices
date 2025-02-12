//& OOP-Class-TS-Level-1_1

import Actor from "./Actor";
import Car from "./Car";
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
vanilla.description = "eine sehr langweilige Eissorte"

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
chocolate.description = "eine sehr langweilige Eissorte"

//..Lege die 4 Instanzen in einem Array ab

const iceCreamFlavors = [];

iceCreamFlavors.push(vanilla)
iceCreamFlavors.push(yoghurt)
iceCreamFlavors.push(mangoNougat)
iceCreamFlavors.push(chocolate)

console.log(iceCreamFlavors);

//..Lass dir von allen populären Eissorten (isPopular) den Namen auf der Konsole ausgeben

iceCreamFlavors.forEach((element)=> {
    element.showNameOfIcecream()
})




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

classTwo.id = 4
classOne.name = "Klasse Eins"
classOne.endDate = "May"

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


for (let i = 0; i<= 10; i++) {
    const person = new Person();
    person.id = i;
    person.firstName = `firstName ${i}`
    person.lastName = `lastName ${i}`
    person.birthday = `date ${i}`


    //unteres ohne Methode!
    //classOne.classMates.push(person)

    //da ich classMates auf private gestellt habe, habe ich eine Methode erstellen müssen, um die classMates hinzuzufügen-->diese Methode rufe ich hier auf
    classOne.addClassMate(person)
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


const carOne = new Car("Seat Ibiza", 2005, 120)
const carTwo = new Car("VW Golf", 1995, 120)
const carThree = new Car("VW T1", 1980, 80)


const driverOne = new Driver("Yvi", "Lodi", 36, carOne)
console.log(driverOne);
const driverTwo = new Driver("Bast", "K", 30, carTwo)
console.log(driverTwo);
const driverThree = new Driver("Lotte", "", 30, carThree)
console.log(driverThree);


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



const actor1 = new Actor("Bryan", "Crabston", "1956-03-07", "Male")
const actor2 = new Actor("Aaron", "Paul", "1979-08-27", "Male")
const actor3 = new Actor("Anna", "Gunn", "1968-04-11", "Female")

const allActorsEpisode1 = [];
allActorsEpisode1.push(actor1)
allActorsEpisode1.push(actor2)
allActorsEpisode1.push(actor3)

const allActorsEpisode2 = [];
allActorsEpisode2.push(actor1)
allActorsEpisode2.push(actor2)

const episode1 = new Episode("Episode 1", "120 minutes", "", allActorsEpisode1)
const episode2 = new Episode("Episode 2", "60 minutes", "", allActorsEpisode2)


const allEpisodes = []
allEpisodes.push(episode1)
allEpisodes.push(episode2)

const tvShow1 = new TVShow("Breaking Bad", "A high school chemistry teacher turned methamphetamine manufacturer", 2008, 2013, allEpisodes);

//..Schreibe eine Funktion printSeriesInfo(series: Series), die beispielhaft für eine Serie Folgendes auf der Konsole ausgibt.


function printSeriesInfo (series: TVShow) {
    console.log(`${series.title}`);
    console.log(series.description);
    console.log(series.startYear);
    console.log(series.endYear);
    console.log(series.episodes.length);


    series.episodes.forEach((episode)=> {
        episode.actors.forEach((actor)=> {
            console.log(`${actor.firstName} ${actor.lastName}: -Birthday: ${actor.birthday}, -Gender: ${actor.gender}`);
        })
        console.log(episode.actors);
    });
}

printSeriesInfo(tvShow1)



// ```tsx
// Title: Breaking Bad
// Description: A high school chemistry teacher turned methamphetamine manufacturer
// Start Year: 2008
// End Year: 2013
// Number of Episodes: 2

// Actors:
// - Bryan Cranston
//   - Birthday: 1956-03-07
//   - Gender: Male
// - Aaron Paul
//   - Birthday: 1979-08-27
//   - Gender: Male
// - Anna Gunn
//   - Birthday: 1968-04-11
//   - Gender: Female
// ```
//..Bei Actors sollen alle Darsteller:innen aus allen Episoden ausgegeben werden.



