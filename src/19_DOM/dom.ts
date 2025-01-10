//& DOM-TS_Level-1_4
console.log("DOM-TS_Level-1_4");

//..Erstelle ein Input-Feld und einen Button im HTML.

//..Erstelle eine Function, die die Eingabe aus einem Textfeld ausliest und dann diesen Text mit dem aktuellen Zeitstempel (nutze dafür new Date()) im HTML-Dokument anzeigt.

//..Die Funktion soll aufgerufen werden, wenn auf den Button “Text hinzufügen” geklickt wird

//..Verwende .innerHTML, um dort jeweils den Text und das Datum hinzuzufügen


const inputEins = document.querySelector<HTMLInputElement>("#input-text");
const buttonEins = document.querySelector<HTMLButtonElement>("#push-text");
const listEins = document.querySelector<HTMLUListElement>("#output-text")

if (inputEins && buttonEins && listEins) {
    buttonEins.addEventListener("click", function() {
        const inputEinsValue = inputEins.value;
        console.log(inputEinsValue);
        // hier create ich das Element --> fehlt noch Einbindung
        const newListElement = document.createElement("li");
        newListElement.textContent = inputEinsValue;
        // Einbinden des Elements an die richtige Stelle
        listEins.appendChild(newListElement);
        //hier ziehe ich mir das Datum und wandle es in die lokale Schreibweise um
        const date = new Date().toLocaleString();
        // hier verändere ich das HTML Element (li), das ich oben erstellt hab un dhinzugefügt habe
        newListElement.innerHTML = `${date}: ${inputEinsValue}`
        // damit Inputfeld nach jeder Eingabe wieder leer ist
        //! geht nicht direkt mit der oben definierten Value Konstante, da Konstante-->ändert Wert nicht
        inputEins.value= "";
    });
};




// &DOM-TS-Level-1_2
console.log("DOM-TS-Level-1_2");

//..Hole dir mit document.getElementById(“info”) das Element und nutze dann .innerHTML

//..Erstelle eine h1 mit dem Text “Hello World”.
//..Füge noch eine h2 hinzu mit dem Text “How are you?”. 

//..Jetzt arbeitest du weiter mit dem Code und fügst im HTML noch ein <div> mit der ID “container” ein.

//..Nutze wieder document.getElementById('container')

//..Erstelle einen <p>-Tag mit dem Text “This is a paragraph” und füge ihn zum container hinzu

//..Füge ein weiteres Element vom Typ input hinzu. Das Input-Element soll vom Typ text sein

const divElement = document.getElementById("info");
const sectionElement = document.querySelector("#second-sec");

if (divElement && sectionElement) {
    // mit innerHTML füge ich hier die html Elemente in das div ein,d as ich mir zuvor gezogen habe
    divElement.innerHTML += `<h1>Hello World</h1>`;
    divElement.innerHTML += `<h3>How are you?</h3>`;
    // hier erzeuge ich ein neues div Element und gebe ihm danach eine id mit Namen container
    const divTwo = document.createElement("div");
    divTwo.setAttribute("id", "container");
    // hier füge ich das div Element an die richtige Stelle ein
    sectionElement.appendChild(divTwo);

    

    // hier ziehe ich mir dann das neu erstellte div Element, um es weiter zu manipulieren-->
    //! hab ich in Aufgabe missverstanden. Man sollte zuvor das div einfach im HTML hinzufügen und dann ziehen
    //! so wie ich es gemacht habe ist das Ziehen nicht mehr nötig natürlich
    const containerElement = document.getElementById("container");
    // hier erstelle ich ein p-tag und fülle es mit Inhalt
    const text = document.createElement("p");
    text.textContent = "This is a paragraph";

    //hier setze ich das p tag in das zuletzt erstellte div und füge dann noch ein input hinzu mit type=text
    if (containerElement) {
        containerElement.appendChild(text);
        const textInput = document.createElement("input");
        textInput.setAttribute("type", "text");
        containerElement.appendChild(textInput);
    };
};





// & DOM-TS-Level-1_3
console.log("DOM-TS-Level-1_3");

//..Erstelle im Code drei <figure> -Elemente für eine Galerie.
//..Sie sollen Child-Element der section “gallery” sein

const gallery = document.querySelector("#gallery");

//hier nutze ich die for-Schleife, um gleichzeitig mehrere figure Elemente zu erstellen
for (let i = 1; i<=3; i++) {
    const figure = document.createElement("figure");
    // NameVomElement.id = gibt dem Element eine id..hier mit i wegen Schleife
    figure.id = `figure-${i}`;
    // hier füge ich die figure Elemente der section mit id gallery zu
    if (gallery) {
        gallery.appendChild(figure);
    };
    // hier erstelle ich auch in der Schleife noch 3 img und 3 figcaption Elemente
    // figcaption gebe ich noch einen text mit abhängig von i
    // und füge dann alles dem element figure zu
    const img = document.createElement("img");
    //nächste 2 Zeilen gebe ich img ein Attribut-->Adresse vom Bild
    //und füge allen img Tags die Klasse img hinzu, die ich im css file gestylt habe (da Bild ursprünglich zu groß)
    img.setAttribute("src", "./bsp.jpg");
    img.setAttribute("alt", "ein Bild das Strukturen zeigt")
    img.classList.add("img");
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = `Figure ${i}`
    figure.appendChild(img);
    figure.appendChild(figcaption);
};


//&Dom-Elements-TS-Level-1_1
console.log("Dom-Elements-TS-Level-1_1");

//..Beim Klicken auf den Button sollte der eingegebene Text aus dem Input-Feld der Liste hinzugefügt werden.

//..Das Input-Feld soll nach jedem Hinzufügen geleert werden.

const inputEinkauf = document.querySelector<HTMLInputElement>("#inputText");
const buttonEinkauf = document.querySelector("#button-einkauf");
const listEinkauf = document.querySelector("#myList");

if (inputEinkauf && buttonEinkauf && listEinkauf) {
    buttonEinkauf.addEventListener("click", function() {
        // hier ziehe ich den value des Inputfelds und erstelle ein Listenelement
        const inputEinkaufValue = inputEinkauf.value;
        const newItem = document.createElement("li");
        //mit Inhalt füllen und dann an richtige Stelle rücken
        //hier prüfen ob Valuefeld gefüllt wurde, nur dann Item hinzufügen, sodass kein leerer Listenpunkt entsteht
        if (inputEinkaufValue) {
            newItem.textContent = inputEinkaufValue;
            listEinkauf.appendChild(newItem);
        } else {
            console.log("kein Eintrag im Inputfeld");
        }
        //input Feld leeren nach jeder Eingabe
        inputEinkauf.value ="";
    });
}




//& Dom-Elements-TS-Level-1_2
console.log("Dom-Elements-TS-Level-1_2");

//..Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente mit der Klasse "example" ändert.


const buttonChangeColor = document.querySelector("#button-change");
// hier ziehe ich alle Elemente mit Klasse example
const allExampleElements = document.querySelectorAll(".example");

if (buttonChangeColor && allExampleElements) {
    // hier erstelle ich das Klick Event auf dem Button
    buttonChangeColor.addEventListener ("click", function (){
    // hier gehe ich mit forEach durch alle zuvor ausgewählten Elemente mit Klasse example und toggle jedes Element mit der Klasse change-background
    // wenn ich statt .toggle .add benutze, verändert es nur einmal den Hintergund und verändert sich nicht zurück
        allExampleElements.forEach((exampleElement) => exampleElement.classList.toggle("change-background"));
    });
};




// & DOM-TS-Level-1_5
console.log("DOM-TS-Level-1_5");

//..Schreibe eine Function showURL(), die ausgeführt wird, wenn du auf den Button "Zeige mir die URL!" klickst.

//..Filtere über die Function die URL der Seite heraus und lasse sie dir unterhalb des Buttons anzeigen.

const buttonUrl = document.querySelector("#btn-url");
const outputUrl = document.querySelector("#output-url");
const divSecondUrl = document.querySelector("#for-second-url");

if (buttonUrl && outputUrl && divSecondUrl) {
    buttonUrl.addEventListener("click", function showURL() {
        // hiermit bekomme ich aktuelle URl angezeigt
        const currentUrl = window.location.href;
        // da p-tag schon vorhanden nur mit innerHTML hinzugefügt
        outputUrl.innerHTML = currentUrl;
        //$ oder wenn ich p tag noch nicht im HTML habe
        // erstmal ein p Tag erstellen, dann mit Inhalt füllen und an entsprechender Stelle einfügen
        const secondUrl = document.createElement("p");
        secondUrl.textContent = currentUrl;
        divSecondUrl.appendChild(secondUrl);
    });
};



// ! von folgender AUfgabe haben die Styles nicht gegriffen
//! in neuem Dokument dann schon
//& Dom-Elements-TS-Level-2_3
console.log("Dom-Elements-TS-Level-2_3");

//.. Weiter geht es mit der [getElementsByTagName-Methode]
//.. Schreibe eine Function, die beim Anklicken des “Change me”-Buttons die Button- und Hintergrundfarbe der einzelnen Elemente ändert.
//.. Nutze folgende Farben: #f6c89f #ffe7d1 #4b8e8d #396362 #666 #333
