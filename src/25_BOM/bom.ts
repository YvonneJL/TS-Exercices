//& Bom-TS-Level-1_1
console.log("Bom-TS-Level-1_1");

//..Schreibe eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.

setTimeout(()=> console.log("This is a timeout"), 1000);


//..Schreibe anschließend eine weitere Funktion, die genau das Ergebnis, das unten in der Vorschau angezeigt wird, ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.


setTimeout(()=> console.log("Start: warte 3 Sekunden"), 1000);

setTimeout(()=> console.log("Jetzt hast du 3 Sekunden gewartet"), 3000);


let i = 10;

function countdown () {
    console.log(i);
    i--;
    if (i < 1) {
        clearInterval(intervalID);
    };
};

const intervalID = setInterval(countdown, 1000);
setTimeout(()=> console.log("Das wars"), 11000);





//& Bom-TS-Level-1_2
console.log("Bom-TS-Level-1_2");


//..Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.

//..HTML und CSS ist vorgegeben (siehe Code-Snippet).

//..Nutzen kannst du folgende Befehle und Methoden:  addEventListener, setInterval(), clearInterval(), if, else if und querySelector() oder getElementById().


const button = document.querySelector("#btn");
const output = document.querySelector<HTMLDivElement>("#output");



//setInterval kommt innerhalb in die Funktion, die auch die Dom manipuliert und auf dem Button angewendet wird
    function percentage () {
        if (output) {
            let count = 99;
            const stopInterval = setInterval(()=> {
                count--;
                output.textContent = `${count}%`;
                // clearInterval kommt noch in das setInterval mit rein
                if (count <= 0) {
                    clearInterval(stopInterval);
                };
            }, 100);
            };
        };

    if (button) {
        button.addEventListener("click", percentage);
    };





//& Bom-TS-Level-1_3
console.log("Bom-TS-Level-1_3");


//..Schreibe eine Function, die sich Daten aus dem Browser zieht und diese auf einer Seite anzeigt. Schaue dir zum besseren Verständnis die Vorschau an.

//..Schau dir dazu auch nochmal die Dokumentation von window.navigator an


//..Hole dir die Informationen über den Browser wie folgt:
    //..Browsername
    //..Betriebssystem-Architektur
    //..Browser-Version
    //..Window Auflösung
    //..Innenhöhe und -breite des Dokuments
    //..colorDepth
    //..pixelDepth


    console.log(window.navigator.userAgent
    );

    const div = document.querySelector("#browser-info");
    const btn = document.querySelector("#info");

    if (div && btn) {
    btn.addEventListener("click", () => {
        div.innerHTML = `<p>Browsername : ${window.navigator.userAgent.slice(0, 7)}</p> 
        <p>Version : ${window.navigator.userAgent.slice(8)} </p>
        <p>Betriebssystem-Architektur : ${window.navigator.userAgent.slice(13, 48)}</p>
        <p>Die verfügbare Höhe in Pixeln : ${window.screen.availHeight}, die verfügbare Breite in Pixeln: ${window.screen.availWidth}</p>
        <p>Die colorDepth : ${window.screen.colorDepth}</p>
        <p>Die pixelDepth : ${window.screen.pixelDepth}</p>`
    });
    };





//&Bom-TS-Level-2_1
console.log("Bom-TS-Level-2_1");


//..Schreibe eine Function, die beim Laden der Seite die Zahlen runter zählt. Schau dir dazu die Ergebnisvorschau an.

//..Nutzen kannst du:
    //..setInterval()
    //..clearInterval()
    //..getElementsByClassName() oder getElementById()
    //..if/else if.

    const divContainer = document.querySelector<HTMLDivElement>(".message");
    const divNumber = document.querySelector("#count");



    function countAndDisappear () {
        if (divContainer && divNumber) {
            let countDown = 10;
    
            const stopInterval2 = setInterval(()=> {
                countDown--;
                divNumber.textContent = countDown.toString();
                
                if (countDown <= 0 && divContainer) {
                    clearInterval(stopInterval2);
                    divContainer.style.opacity = "0";
                };
            }, 1000);
        };
    };

    countAndDisappear();
