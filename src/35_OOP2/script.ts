//& OOP-Class-TS-Level-1_3


import Animal from "./Animal";
import Customer from "./Customer";
import { Gender } from "./Person";
import { Person } from "./Person";

//..Definiere eine Klasse Animal
//..sie soll die Eigenschaften species (string), age (number) und color (string) enthalten
//..Implementiere Get- und Set-Methoden für jede Eigenschaft.


const animal = new Animal()
console.log(animal);

animal.age = 5
animal.color = "black"
animal.species = "cat"
console.log(animal);
console.log(animal.age);


//..Definiere eine weitere Klasse Person, die die Eigenschaften name (string), birthday (Date) und gender (Enum) enthält.
//..Implementiere Get- und Set-Methoden für name und gender, birthday soll im Konstruktor gesetzt werden und ansonsten nur eine Get-Methode haben.


//0 steht für Enum = Female
const birthday = new Date("1980/12/15")
const person = new Person(birthday, "Yvi", 0)
console.log(person);

console.log(person._birthday);
person._gender = Gender.Divers
console.log(person);




//& OOP-Class-TS-Level-2_3

//..Definiere eine Klasse Customer
//..sie soll die Eigenschaften name (string), email (string), address (string), postalCode (number) und city (string) enthalten

const customerOne = new Customer("Yvi", "yvi@yvi", "daheim", "12345", "Freiburg")
console.log(customerOne);

//customerOne.name = "ghjdgfhjgdjhafgjdsgfgjsadgfkdudhsjafgdsafkgdajkfhdbashfjkdfgddhdshfjkdhfjkdshfjdkshfkdshfkjdshfkdshfdkjsfhdjskfhjdskfhjdksfhksdhfjkdshfkdshfdksfhdskffdkgjfldgjklfdjgklfdhjgklfdhglfkdhgfldkghkfdglfhgfldghjlfdkgjasbfdsafgkdajsfbdgsksfbdagbg"
//console.log(customerOne);

// customerOne.email = "hallo"
// console.log(customerOne);

//customerOne.postalCode = "-23.2"
