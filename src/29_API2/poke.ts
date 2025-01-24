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
    const submitButton =  document.querySelector("button");



    //! Hier Syntax mit async und await
    //! Async verdeutlicht, dass dies eine asynchrone Funktion ist, brauche ich einfach als keyword, wenn ich await benutze
    //! Await sagt, dass TS das fetchen erst einmal abwarten soll bevor es die anderen Sachen durchführt
    async function putAllAnswersTogether () {
        const questionsResponseOnly = await fetch("https://the-trivia-api.com/v2/questions");
        const questionsData: Question[] = await questionsResponseOnly.json();
        let counter = 0;
        questionsData.forEach((questionData)=> {
            const divAllQ = document.createElement("div");
            sectionQ?.appendChild(divAllQ);

            const qP = document.createElement("p");
            qP.textContent = questionData.question.text;
            qP.className = "font-bold pb-10"
            divAllQ.appendChild(qP);
            divAllQ.className = "rounded-md bg-yellow-50 p-3"

            const rightAnswer = document.createElement("label");
            rightAnswer.setAttribute("for", questionData.correctAnswer.toLowerCase());
            const wrongAnswer1 = document.createElement("label");
            wrongAnswer1.setAttribute("id", questionData.incorrectAnswers[0]);
            const wrongAnswer2 = document.createElement("label");
            wrongAnswer1.setAttribute("id", questionData.incorrectAnswers[1]);
            const wrongAnswer3 = document.createElement("label");
            wrongAnswer1.setAttribute("id", questionData.incorrectAnswers[2]);

            rightAnswer.textContent = questionData.correctAnswer;
            wrongAnswer1.textContent = questionData.incorrectAnswers[0];
            wrongAnswer2.textContent = questionData.incorrectAnswers[1];
            wrongAnswer3.textContent = questionData.incorrectAnswers[2];

            const rightAnswerRadio = document.createElement("input");
            rightAnswerRadio.setAttribute("type", "radio");
            rightAnswerRadio.setAttribute("id", questionData.correctAnswer.toLowerCase());
            rightAnswerRadio.setAttribute("name", questionData.question.text.toLowerCase());
            const wrongAnswer1Radio = document.createElement("input");
            wrongAnswer1Radio.setAttribute("type", "radio");
            wrongAnswer1Radio.setAttribute("id", questionData.incorrectAnswers[0].toLowerCase());
            wrongAnswer1Radio.setAttribute("name", questionData.question.text.toLowerCase());
            const wrongAnswer2Radio = document.createElement("input");
            wrongAnswer2Radio.setAttribute("type", "radio");
            wrongAnswer2Radio.setAttribute("name", questionData.question.text.toLowerCase());
            wrongAnswer2Radio.setAttribute("id", questionData.incorrectAnswers[1].toLowerCase());
            const wrongAnswer3Radio = document.createElement("input");
            wrongAnswer3Radio.setAttribute("type", "radio");
            wrongAnswer3Radio.setAttribute("name", questionData.question.text.toLowerCase());
            wrongAnswer3Radio.setAttribute("id", questionData.incorrectAnswers[2].toLowerCase());
            

            const divRightAnswer = document.createElement("div");
            divAllQ.appendChild(divRightAnswer);
            divRightAnswer.appendChild(rightAnswerRadio);
            divRightAnswer.appendChild(rightAnswer);
            const divWrongAnswer1 = document.createElement("div");
            divAllQ.appendChild(divWrongAnswer1);
            divWrongAnswer1.appendChild(wrongAnswer1Radio);
            divWrongAnswer1.appendChild(wrongAnswer1);
            const divWrongAnswer2 = document.createElement("div");
            divAllQ.appendChild(divWrongAnswer2);
            divWrongAnswer2.appendChild(wrongAnswer2Radio);
            divWrongAnswer2.appendChild(wrongAnswer2);
            const divWrongAnswer3 = document.createElement("div");
            divAllQ.appendChild(divWrongAnswer3);
            divWrongAnswer3.appendChild(wrongAnswer3Radio);
            divWrongAnswer3.appendChild(wrongAnswer3);
        });

    };
    putAllAnswersTogether();
    


//! Folgend Syntax mit .then
// const sectionQ = document.querySelector("#questions");

// fetch("https://the-trivia-api.com/v2/questions").then((response)=> {
//     return response.json().then((data: Question[])=> {
//         data.forEach((questionData)=> {
//             const divAllQ = document.createElement("div");
//             sectionQ?.appendChild(divAllQ);

//             const qP = document.createElement("p");
//             qP.textContent = questionData.question.text;
//             divAllQ.appendChild(qP);

//             const rightAnswer = document.createElement("label");
//             rightAnswer.setAttribute("id", questionData.correctAnswer);
//             rightAnswer.textContent = questionData.correctAnswer;
//             const rightAnswerCheck = document.createElement("input");
//             rightAnswerCheck.setAttribute("type", "radio");
//             divAllQ.appendChild(rightAnswer);
//             divAllQ.appendChild(rightAnswerCheck);
//         })
//     })
// })
