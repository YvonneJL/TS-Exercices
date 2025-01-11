//& Dom-Elements-TS-Level-2_3
console.log("Dom-Elements-TS-Level-2_3");


//.. Weiter geht es mit der [getElementsByTagName-Methode]

//.. Schreibe eine Function, die beim Anklicken des “Change me”-Buttons die Button- und Hintergrundfarbe der einzelnen Elemente ändert.

//.. Nutze folgende Farben: #f6c89f #ffe7d1 #4b8e8d #396362 #666 #333

const aTags = document.getElementsByTagName("a");
const button = document.getElementById("btn");

if (aTags && button) {
    button.addEventListener("click", function(){
        const aTagsAsArray = Array.from(aTags);
        aTagsAsArray[0].style.backgroundColor = "#f6c89f";
        aTagsAsArray[1].style.backgroundColor = "#ffe7d1";
        aTagsAsArray[2].style.backgroundColor = "#396362";
    });
};


//& Dom-Elements-TS-Level-2_7
console.log("Dom-Elements-TS-Level-2_7");

//..Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.
//..Nutze:
    //..querySelector()
    //..addEventListener()

    //..let counter = 0;
    //..createElement()
    //..textContent()
    //..appendChild()
    //..classList

    const buttonClick = document.querySelector("#click");
    const divForElements = document.querySelector("#more-elements");

    // global den Zähler definieren -->Warum?
    let clickCount = 0;

    if (buttonClick && divForElements) {
        buttonClick.addEventListener("click", function() {
            // als erstes den Zähler aufzählen
            clickCount++
            // dann mit if else, da das erste Div ganz anders im Vgl. zu allen anderen
            // als Bedingung den Zähler
            if (clickCount === 1) {
                const divOne = document.createElement("div");
                divOne.textContent = "0";
                divOne.classList.add("weiss");
                divForElements.appendChild(divOne);
            // alle anderen Divs in der Bedingung in else zusammengefasst, da sie sich gleichen aber die Nummer aufgezählt wird
            } else if (clickCount >=2 && clickCount <= 10) {
                const divNext = document.createElement("div");
                divNext.textContent = `${clickCount -1}`;
                divNext.classList.add("rechteck");
                divForElements.appendChild(divNext);
            };
        });
    };

    // ! Also keine Schleife in dem Sinn.
    //! Es gibt aber trotzdem einen Zähler der hoch zählt