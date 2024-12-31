const ergebnis = document.getElementById("ergebnis");


// & Funktion, um Buttons klicken zu können (.addEventListener) und Rechnung anzeigen zu lassen (ergebnis.innerHTML += element.innerHTML)
document.querySelectorAll(".numbers").forEach(element => { 
    console.log(element);
    // alle ausgewählten Elemente werden angezeigt
    // ! Was macht forEach?
    element.addEventListener("click", () => {
        console.log(element);
        // hier bekommt man nur noch das Element angezeigt, auf das man gedrückt hat
        // ! .addEventListener
        if (ergebnis !==null) {
            ergebnis.innerHTML += element.innerHTML}
            // ! Hier wird dem Ergebnisfeld jeder "ButtoN" hinzugefügt, der geklickt wurde, zB 2 + 1
            console.log(element.innerHTML);
        // ! if habe ich hinzugefügt, wegen TS-->sonst Fehlermeldung
    })
})

// & Funktion, um Ergebnis zu berechnen und damit weiter zu rechnen
document.getElementById("result")?.addEventListener("click", () => {
    if (ergebnis !==null) {
        console.log(eval(ergebnis.innerHTML));
        ergebnis.innerHTML =(eval(ergebnis.innerHTML));
        // ! eval zeigt dann Ergebnis von zuvor ins Ergebnisfeld eingebenen Zahlen und Operatoren
    }
})

const deleteCalc = document.getElementById("delete");


// & Funktion, um zu löschen, zurück auf null
deleteCalc?.addEventListener("click", () => {
    console.log("deleteCalc clicked");
    if (deleteCalc !==null && ergebnis !==null ) {
        console.log("innerhalb if");
        ergebnis.innerHTML ="";
        //! zwei Anführungszeichen --> auf 0
    }
})



// ! .forEach () bearbeitet alle Elemente eines arrays
// ! in meinem Fall, alle divs mit class=numbers
// ! in die Klammern schreibt man dann die Funktion, die für alle Elemente ausgeführt werden soll


// ! .addEventListener () überwacht ein Ereignis auf einem DOM Element und reagiert darauf
// ! im Beispiel wird ein Klick-Ereignis hinzugefügt
// ! in Klammern steht dann zuerste in Anführungszeichen das Event "click" und danach das Listener", die Funktion, die beim Event ausgelöst werden soll --> mit () => {funktion...}


// ! eval () wertet String als TS Code aus und führt ihn aus