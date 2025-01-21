//& Bom-TS-Level-3_2
console.log("Bom-TS-Level-3_2");


//..Schreibe eine Function, die einen Countdown in Minuten anzeigt und sich pausieren und neu starten lässt.

//.. HTML und CSS ist vorgegeben (siehe Code-Snippet).
//..Nutze unter Anderem:

//..setInterval()

//..clearInterval()

//..if-Statements.

const inputElement = document.querySelector<HTMLInputElement>("#minutes");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const restartButton = document.querySelector("#restart-button");
const countdown = document.querySelector<HTMLDivElement>("#time");



if (inputElement && startButton && pauseButton && restartButton && countdown) {
    // ID, um Interval zu stoppen
    let intervalID: number | null = null;
    // hier wird die Startdauer gespeichert, aber nicht runter gezählt
    let startingRemainingSeconds = 0;
    //hier wird runter gezählt
    let remainingSeconds = 0;

    // kümmert sich darum, das aktueller Countdownzustand in die UI geschrieben wird
    const displayTime = function () {
        const min = Math.floor(remainingSeconds / 60);
        const sec = remainingSeconds % 60;
        countdown.textContent = min + ":" + sec;
    }

    const startInterval = function () {
        //zuerste checken, ob bereits Timer läuft-->dann passiert nichts (kein else)
        if (intervalID === null) {
            intervalID = setInterval(countdownFn, 1000);
            // sorgt dafür, dass die Zeit direkt angezeigt wird, ansonsten verstreicht erst einmal eine Sekunde
            displayTime();
        }
    }

    const stopInterval = function () {
        if (intervalID) {
            clearInterval(intervalID);
            intervalID = null;
        };
    };

    const countdownFn = function () {
        remainingSeconds--;
        if(remainingSeconds < 0 && intervalID) {
            stopInterval();
        } else {
            displayTime();
        }
    }

    startButton.addEventListener("click", () => {
        const inputMinutes =Number(inputElement.value);

        if (inputMinutes > 0) {
            // wir wandeln den Wert in Sekunden um un dspeichern ihn im äußeren Scope
            remainingSeconds = inputMinutes * 60;
            startingRemainingSeconds = inputMinutes * 60;
            inputElement.value = "";
            // wir starten das eigentliche Intervall
            startInterval();
            //falls Pause gedrückt wurde, damit der Timer dann weiter läuft
        } else if (remainingSeconds > 0) {
            startInterval();
        }
    })

    pauseButton.addEventListener("click", () => {
        stopInterval();
    })

    restartButton.addEventListener("click", () => {
        remainingSeconds = startingRemainingSeconds;
        stopInterval();
        startInterval();
    })
} else {
    console.log("not working");
}

//     function timer() {
//         if(inputElement && countdown) {
//             const inputValue = inputElement.value;
                
//             let totalSeconds = Number(inputValue)*60;
        
//             function formatTime(seconds: number) {
//                 const minutes = Math.floor(seconds / 60);
//                 const remainingSeconds = seconds % 60;
//                 return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
//             };
//             countdown.textContent = formatTime(totalSeconds);


//                 stopInterval = setInterval(()=> {
//                     if (totalSeconds > 0) {
//                         totalSeconds--;
//                         countdown.textContent = formatTime(totalSeconds);
//                     } else {
//                         clearInterval(stopInterval); // Stoppe den Timer, wenn der Countdown endet
//                         alert("Zeit abgelaufen!");
//                     }
//                 }, 1000); // Jede Sekunde aktualisieren
//             }
//             if (pauseButton) {
//                 pauseButton.addEventListener("click", ()=> {clearInterval(stopInterval)})
//             };
//             if (restartButton) {
//                 restartButton.addEventListener("click", ()=> {
                    
//                 })
//             }
//     };

// if (startButton) {
//     startButton.addEventListener("click", timer)
// }
