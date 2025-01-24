//& fetch-level-3_1
console.log("fetch-level-3_1");

//..Suche dir eine API von Folgenden aus:
    //..API um Informationen über Länder abzurufen: https://restcountries.com/
    //..Pokemon API: https://pokeapi.co/
    //..Rick and Morty API: [https://rickandmortyapi.com](https://rickandmortyapi.com/)
    //..Quizfragen: https://the-trivia-api.com/docs/v2/
//..Schau zunächst in die Dokumentation und rufe Daten mit Postman oder einem anderen Tool ab
//..Verstehst du den Aufbau? Falls nicht, suche dir eine andere, einfachere API
//..Lege ein oder mehrere Interfaces für die Daten an, die du abrufen und darstellen willst
//..Rufe die Daten ab
//..Fange mögliche Fehler ab
//..Stelle die Daten ansprechend auf einer HTML-Seite dar
//..Erstelle eine Navigation, wenn du mehrere verschiedene Daten abrufst
//..Falls möglich, integriere eine Suchfunktion


    //..Quizfragen: https://the-trivia-api.com/docs/v2/

    type Question = {
    category : string,
    id: string,
    correctAnswer: string,
    incorrectAnswers: string[]
    question: {
        text: string
    },
    tags: string[],
    type: string,
    difficulty: string,
    regions: [],
    isNiche: boolean
    }

const sectionQ = document.querySelector("#questions");

fetch("https://the-trivia-api.com/v2/questions").then((response)=> {
    return response.json().then((data: Question[])=> {
        data.map((questionData)=> {
            const divAllQ = document.createElement("div");
            sectionQ?.appendChild(divAllQ);

            const qP = document.createElement("p");
            qP.textContent = questionData.question.text;
            divAllQ.appendChild(qP);

            const rightAnswer = document.createElement("label");
            rightAnswer.setAttribute("id", questionData.correctAnswer);
            rightAnswer.textContent = questionData.correctAnswer;
            const rightAnswerCheck = document.createElement("input");
            rightAnswerCheck.setAttribute("type", "checkbox");
            divAllQ.appendChild(rightAnswer);
            divAllQ.appendChild(rightAnswerCheck);
        })
    })
})
