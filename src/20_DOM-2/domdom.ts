//& Dom-Elements-TS-Level-1_3
console.log("Dom-Elements-TS-Level-1_3");

//..Schreibe eine Function, die beim Anklicken der Buttons jeweils den Inhalt der Elemente anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.

//..Nutze:
    //..firstElementChild
    //..lastElementChild
    //..nextElementSibling
    //..previousElementSibling
    //..innerHTML
    //..querySelectorAll
    //..querySelector
    //..addEventListener

// ertsmal alle Elemente ziehen, die ich ansprechen will
// hier könnte ich auch schon lastChild usw. ziehen
const button1 = document.querySelector("#btn-first-child");
const button2 = document.querySelector("#btn-last-child");
const button3 = document.querySelector("#btn-next-sibling");
const button4 = document.querySelector("#btn-previous-sibling");

const listElement = document.querySelector<HTMLUListElement>("#my-list");

const outputElement = document.querySelector("#output");

//erstmal abfragen, ob alle Elemente vorhanden
//Klick Event auf die einzelnen Button
//innerhalb Klick Event--> ziehe ich die spezifischen "kinder" und speichere sie in einer Varaibale (hätte ich auch global machen können)
//erstelle ein neues Tag, in dem der Output gespeichert werden soll
// bestimme den Inhalt des neuen Elements mit textContent
//füge das neue Element zum passenden Elternelement mir .appendChild()
if (button1 && button2 && button3 && button4 && outputElement && listElement) {
    button1.addEventListener("click", function(){
        const firstChild = listElement.firstElementChild;
        const firstChildContent = document.createElement("p");
        if (firstChild) {
            firstChildContent.textContent = `First child: ${firstChild.textContent}`
            outputElement.appendChild(firstChildContent);
        };
    });
    button2.addEventListener("click", function(){
        const lastChild = listElement.lastElementChild;
        const lastChildContent = document.createElement("p");
        if (lastChild) {
            lastChildContent.textContent = `Last child: ${lastChild.textContent}`
            outputElement.appendChild(lastChildContent);
        };
    });
    button3.addEventListener("click", function(){
        const nextSibling = listElement.firstElementChild?.nextElementSibling;
        const nextSiblingContent = document.createElement("p");
        if (nextSibling) {
            nextSiblingContent.textContent = `First child-next sibling: ${nextSibling.textContent}`
            outputElement.appendChild(nextSiblingContent);
        };
    });
    button4.addEventListener("click", function(){
        const previousSibling = listElement.lastElementChild?.previousElementSibling;
        const previousSiblingContent = document.createElement("p");
        if (previousSibling) {
            previousSiblingContent.textContent = `Last child-previous sibling: ${previousSibling.textContent}`
            outputElement.appendChild(previousSiblingContent);
        };
    });
};





//&Dom-Elements-TS-Level-1_9
console.log("Dom-Elements-TS-Level-1_9");

//..Dieses Mal sollst du eine Function schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.

//..Nutze:
    //..[addEventListener()]für den Klick auf den Button
    //..[selectedIndex()]um dir das ausgewählte Element aus dem Select zu holen
    //..[remove()] um über den Index das Element zu löschen

//ziehe mir zuerst die beiden HTML Elemente, die ich brauche
const buttonColor = document.querySelector("#button");
const selectColor = document.querySelector<HTMLSelectElement>("#farbeAuswahlen");

// im KLick Event definiere ich eine Variable, um an den Index der Select Optionen zu kommen mit .selectedIndex
// mit Hilfe des Index kann ich dann den Eintrag vom Selcetfeld entfernen. Also selectElement.remove(indexNummer)
if (buttonColor && selectColor) {
    buttonColor.addEventListener("click", function(){
        const selectedOption = selectColor.selectedIndex
        selectColor.remove(selectedOption);
    });
};





//&Dom-Elements-TS-Level-2_2
console.log("Dom-Elements-TS-Level-2_2");

//..Beim Anklicken des Buttons sollen die Werte aus dem Formular in der Konsole ausgegeben werden.


//..Definiere einen Typ SimplePerson
//..Lege jetzt zusätzlich ein Objekt vom Typ SimplePerson an, das die Werte aus dem Formular erhält
//..Lass dir das Objekt auf der Konsole ausgeben

const name = document.querySelector<HTMLInputElement>("#vorname");
const lastName = document.querySelector<HTMLInputElement>("#nachname");
const country = document.querySelector<HTMLSelectElement>("#land");

const inputSubmit = document.querySelector<HTMLInputElement>("#submit");


if (name && lastName && country && inputSubmit) {
    inputSubmit.addEventListener("click", function(event) {
        event.preventDefault();
        const nameValue = name.value;
        const lastNameValue = lastName.value;
        const countryValue = country.value;
        if (nameValue && lastNameValue && countryValue) {
            console.log(`First name is:${nameValue}, last name is:${lastNameValue}, they are from:${countryValue}`);
            
            type SimplePerson = {
                name: string;
                lastname: string;
                country: string;
            };
            
            const personAsObject: SimplePerson = {name: nameValue, lastname: lastNameValue, country: countryValue};
            console.log(personAsObject);
        };
    });
};





//&Dom-Elements-TS-Level-2_4
console.log("Dom-Elements-TS-Level-2_4");

//..Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des <body> anwendet.


//..Verwende folgende Befehle für die Aufgabe:
    //..addEventListener(“click”)
    //..event.preventDefault();
    //...value oder [selectedIndex]
//..Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.


const selectElement = document.querySelector<HTMLSelectElement>("#farbeAuswahlen2");
const buttonElement = document.querySelector("#button-farbe");
const body = document.querySelector("body");

if (selectElement && buttonElement && body) {
    buttonElement.addEventListener("click", function(event){
        event.preventDefault();
        //hier greife ich auf die values/colors aus der select Liste zu
        // Leerzeichen muss ich entfernen, weil sonst die Farbe nicht gelesen wird
        // das mache ich mit .split(' ').join('')
        const color = selectElement.value.split(' ').join('');
        console.log(color);
        body.style.backgroundColor = color;
    });
};