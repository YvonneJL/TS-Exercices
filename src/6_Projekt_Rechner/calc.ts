console.log("moin");

function calcTrinkgeld() {
    console.log("moini");
    let rechnungsBetrag = document.querySelector("#number-1") as HTMLInputElement;
    let rechnungsBetragWert = Number(rechnungsBetrag.value);
    let anzahlPersonen = document.querySelector("#number-2") as HTMLInputElement;
    let anzahlPersonenWert = Number(anzahlPersonen.value);
    let serviceQualitaet = document.querySelector("#service") as HTMLInputElement;
    let serviceQualitaetWert = Number(serviceQualitaet.value);

    let trinkGeld = document.querySelector(".trinkgeld")!;
    let gesamteSumme = document.querySelector(".gesamtsumme")!;
    let preisProPerson = document.querySelector(".preis-pro-person")!;


    trinkGeld.innerHTML = `Das Trinkgeld beträgt: ${serviceQualitaetWert * rechnungsBetragWert}  Euro`;

    let trinkGeldNummer = serviceQualitaetWert * rechnungsBetragWert;

    gesamteSumme.innerHTML = `Die Gesamtsumme beträgt: ${rechnungsBetragWert + trinkGeldNummer} Euro`;

    preisProPerson.innerHTML =  `Jede Person zahlt : ${(rechnungsBetragWert + trinkGeldNummer) / anzahlPersonenWert} Euro`;
}

const inputElement = document.querySelector("#calc-button") as HTMLInputElement;
inputElement.onclick = calcTrinkgeld;