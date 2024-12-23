
// & mit as HTMLxxxxElement muss man TS sagen, was für eine Art Element man raus holt
// --> alle semantischen Elemente sind hier divs!
// wir drücken damit aus, dass es sich beie inem bestimmten Wert definitiv um einen bestimmten Typ handelt



// const inputElement = (document.querySelector("#search-input") as HTMLInputElement).value;
// & oberes, wenn ich alles in einer Zeile schreiben möchte. Wie wir ess machen, ist es in zwei Zeilena ufgedröselt

console.log("GuMo");

function searchAndHighlight() {
const inputElement = document.querySelector("#search-input") as HTMLInputElement;
const inputValue = inputElement.value;

console.log("inputValue: " + inputValue);

const replaceValue = `<span class="highlight">${inputValue}</span>`;
console.log("replaceValue: " + replaceValue);
// -->hier gehts um die Teile im TExt, die ersetzt werden sollen

const articleElement = document.querySelector("article") as HTMLDivElement;
const articleContent = articleElement.innerText;
// -->hier haben wir den Text, den wir am Ende verändern wollen (kompletter Text)

console.log(articleContent);

const changedArticleContent = articleContent.replaceAll(inputValue, replaceValue);

articleElement.innerHTML = changedArticleContent;
}

// & Damit Funktion oben funktionieren kann, muss aus dem HTML aus dem script tag das type=module raus
// & aber nicht nachhaltig --> onlick Attribut im TS setzen (siehe unten)

const buttonElement = document.querySelector("#search-button") as HTMLInputElement;
buttonElement.onclick = searchAndHighlight;