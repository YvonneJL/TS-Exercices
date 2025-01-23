//& fetch-level-2_2
console.log("fetch-level-2_2");

//..Nutze die [JSON-Placeholder API] und hole dort mit fetch alle Aufgaben unter https://jsonplaceholder.typicode.com/todos ab


//..Lege ein Interface IToDo mit den entsprechenden Datentypen an
//..Verwende das Interface beim fetch
//..Zeige die Aufgaben in deiner HTML-Seite an

interface toDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
};

const allToDoDiv = document.querySelector("#to-do");
const buttonToDo = document.querySelector("#btn-to-do");
const inputToDo = document.querySelector<HTMLInputElement>("#to-do-search");

fetch("https://jsonplaceholder.typicode.com/todos").then((response)=> {
    return response.json().then((data: toDo[])=> {
        console.log(data);


        // //..Die Aufgaben sollen alphabetisch nach Titel sortiert werden
        data.sort((a, b)=> {
            return a.title.localeCompare(b.title);
        });
        

        if (allToDoDiv) {
            data.forEach((toDo)=> {
                const divToDo = document.createElement("div");
                allToDoDiv.appendChild(divToDo);

                // Elemente erstellen, die den Inhalt bekommen
                const userIdP = document.createElement("p");
                const idP = document.createElement("p");
                const titleP = document.createElement("p");
                const completedP = document.createElement("p");

                // die Elemente mit Inhalt dem Container zuordnen
                divToDo.appendChild(userIdP);
                divToDo.appendChild(idP);
                divToDo.appendChild(titleP);
                divToDo.appendChild(completedP);

                divToDo.className = "border rounded-xl p-3"
                // Inhalt der Elemente bestimmen
                userIdP.textContent = `user ID: ${toDo.userId.toString()}`;
                idP.textContent = `ID: ${toDo.id.toString()}`;
                titleP.textContent = `title: ${toDo.title}`;
                completedP.textContent = `completed? : ${toDo.completed.toString()}`;

                //..Verwende unterschiedliche Farben, je nachdem ob die Aufgabe erledigt oder noch offen ist
                //..Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an

                if (toDo.completed === true) {
                    titleP.className =  "text-green-500";
                } else {
                    titleP.className = "text-red-300";
                }

                //..Füge ein Eingabefeld hinzu, über das man in den Aufgaben nach dem title suchen kann
                //..→ es werden dann nur die Aufgaben angezeigt, die der Suche entsprechen

                //im forEach un dbei jedem nachschauen ob es include inputvalue

            });
        };
        if (buttonToDo && inputToDo && allToDoDiv){
                buttonToDo.addEventListener("click", ()=> {
                    const toDoValue= inputToDo.value;
                    const searchedToDos = data.filter((toDo)=> {
                        return toDo.title.includes(toDoValue);
                    }); 
                    allToDoDiv.textContent = "";

                    searchedToDos.forEach((toDo)=> {
                        const divToDo = document.createElement("div");
                        allToDoDiv.appendChild(divToDo);
        
                        // Elemente erstellen, die den Inhalt bekommen
                        const userIdP = document.createElement("p");
                        const idP = document.createElement("p");
                        const titleP = document.createElement("p");
                        const completedP = document.createElement("p");
        
                        // die Elemente mit Inhalt dem Container zuordnen
                        divToDo.appendChild(userIdP);
                        divToDo.appendChild(idP);
                        divToDo.appendChild(titleP);
                        divToDo.appendChild(completedP);
        
                        divToDo.className = "border rounded-xl p-3"
                        // Inhalt der Elemente bestimmen
                        userIdP.textContent = `user ID: ${toDo.userId.toString()}`;
                        idP.textContent = `ID: ${toDo.id.toString()}`;
                        titleP.textContent = `title: ${toDo.title}`;
                        completedP.textContent = `completed? : ${toDo.completed.toString()}`;
        
                        if (toDo.completed === true) {
                            titleP.className =  "text-green-500";
                        } else {
                            titleP.className = "text-red-300";
                        }
                    });
                    
                });
        };
    }).catch((error)=>{
        console.log(error);
    });
});


