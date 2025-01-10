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
