
// erstmal alle Elemente ziehen

const resetElement = document.querySelector("#delete") as HTMLButtonElement;

const oneElement = document.querySelector("#one") as HTMLButtonElement;
const twoElement = document.querySelector("#two") as HTMLButtonElement;
const threeElement = document.querySelector("#three") as HTMLButtonElement;
const fourElement = document.querySelector("#four") as HTMLButtonElement;
const fiveElement = document.querySelector("#five") as HTMLButtonElement;
const sixElement = document.querySelector("#six") as HTMLButtonElement;
const sevenElement = document.querySelector("#seven") as HTMLButtonElement;
const eightElement = document.querySelector("#eight") as HTMLButtonElement;
const nineElement = document.querySelector("#nine") as HTMLButtonElement;
const zeroElement = document.querySelector("#zero") as HTMLButtonElement;

const plusElement = document.querySelector("#plus") as HTMLButtonElement;
const minusElement = document.querySelector("#minus") as HTMLButtonElement;
const divideElement = document.querySelector("#divide") as HTMLButtonElement;
const multiplyElement = document.querySelector("#multiply") as HTMLButtonElement;
const resultElement = document.querySelector("#result") as HTMLButtonElement;

const calcElement = document.querySelector("#calc") as HTMLParagraphElement;


let resultAdd: number = 0;

function add (numberOne: number, numberTwo: number) {
    numberOne + numberTwo
}

