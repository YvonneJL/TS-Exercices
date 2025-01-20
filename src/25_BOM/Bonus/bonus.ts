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

let stopInterval: number;

    function timer() {
        if(inputElement && countdown) {
            const inputValue = inputElement.value;
                
            let totalSeconds = Number(inputValue)*60;
        
            function formatTime(seconds: number) {
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
            };
            countdown.textContent = formatTime(totalSeconds);


                stopInterval = setInterval(()=> {
                    if (totalSeconds > 0) {
                        totalSeconds--;
                        countdown.textContent = formatTime(totalSeconds);
                    } else {
                        clearInterval(stopInterval); // Stoppe den Timer, wenn der Countdown endet
                        alert("Zeit abgelaufen!");
                    }
                }, 1000); // Jede Sekunde aktualisieren
            }
            if (pauseButton) {
                pauseButton.addEventListener("click", ()=> {clearInterval(stopInterval)})
            };
            if (restartButton) {
                restartButton.addEventListener("click", ()=> {
                    
                })
            }
    };

if (startButton) {
    startButton.addEventListener("click", timer)
}
