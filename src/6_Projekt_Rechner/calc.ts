console.log("moin");

function calcTrinkgeld() {
    console.log("moini");
    let rechnungsBetrag = document.querySelector("#number-1") as HTMLInputElement;
    let rechnungsBetragWert = Number(rechnungsBetrag.value);
    let anzahlPersonen = document.querySelector("#number-2") as HTMLInputElement;
    let anzahlPersonenWert = Number(anzahlPersonen.value);
    let serviceQualitaet = document.querySelector("#service") as HTMLInputElement;
    let serviceQualitaetWert = Number(serviceQualitaet.value);

    let trinkGeld = document.querySelector(".trinkgeld") as HTMLParagraphElement;
    let gesamteSumme = document.querySelector(".gesamtsumme") as HTMLParagraphElement;
    let preisProPerson = document.querySelector(".preis-pro-person") as HTMLParagraphElement;


    trinkGeld.innerText = `Das Trinkgeld beträgt: ${(serviceQualitaetWert * rechnungsBetragWert).toFixed(2)} Euro`

    let trinkGeldNummer = serviceQualitaetWert * rechnungsBetragWert;

    gesamteSumme.innerText = `Die Gesamtsumme beträgt: ${(rechnungsBetragWert + trinkGeldNummer).toFixed(2)} Euro`;

    preisProPerson.innerText =  `Jede Person zahlt : ${((rechnungsBetragWert + trinkGeldNummer) / anzahlPersonenWert).toFixed(2)} Euro`;
}

const inputElement = document.querySelector("#calc-button") as HTMLInputElement;
inputElement.onclick = calcTrinkgeld;