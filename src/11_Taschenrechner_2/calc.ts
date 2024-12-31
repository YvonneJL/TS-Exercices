const ergebnis = document.getElementById("ergebnis");


// & Funktion, um Buttons zu klicken und Rechnung anzeigen zu lassen
document.querySelectorAll(".numbers").forEach(element => { 
    console.log(element);
    // alle ausgewählten Elemente werden angezeigt
    // ! Was macht forEach?
    // ! Und ist das mit dem fat arrow dann eine Funktion?
    element.addEventListener("click", () => {
        console.log(element);
        // hier bekommt man nur noch das Element angezeigt, auf das man gedrückt hat
        // ! .addEventListener
        if (ergebnis !==null) {
            ergebnis.innerHTML += element.innerHTML}
            console.log(element.innerHTML);
        // ! if habe ich hinzugefügt, wegen TS-->sonst Fehlermeldung
    })
})

// & Funktion, um Ergebnis zu berechnen und damit weiter zu rechnen
document.getElementById("result")?.addEventListener("click", () => {
    if (ergebnis !==null) {
        console.log(eval(ergebnis.innerHTML));
        ergebnis.innerHTML =(eval(ergebnis.innerHTML));
        // ! eval zeigt Ergebnis an??
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
