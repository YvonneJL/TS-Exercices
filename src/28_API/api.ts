//& fetch-level-1_1
console.log("fetch-level-1_1");

//..Nutze den Endpunkt /list der [Picsum API](https://picsum.photos/v2/list) und lass dir die Liste der Bilder in der Console ausgeben.
//..Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an


fetch("https://picsum.photos/v2/list").then((response)=> {
    return response.json().then((data)=> {
        console.log(data);
    })
})
.catch((error)=>{
    console.log(error);
});





//&fetch-level-1_2
console.log("fetch-level-1_2");

//..Nutze die [JSON-Placeholder API](https://jsonplaceholder.typicode.com/posts/1/comments) und hole dort mit fetch die Kommentare zum post1 unter 
//..https://jsonplaceholder.typicode.com/posts/1/comments ab

//..Die Antwort/Response sieht so aus
//..Lass dir die E-Mail-Adressen aller Kommentierenden auf der Konsole ausgeben
//..Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an


type User = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
};


fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((response)=>{
    return response.json().then((data: User[])=>{
        
        const emails = data.map((user)=> {
            return user.email;
        }); console.log(emails);
    })
})
.catch((error)=>{
    console.log(error);
});

//..Hole in einem neuen fetch alle Posts ab https://jsonplaceholder.typicode.com/posts
//..und verarbeite sie weiter


type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    return response.json().then((data: Post[])=>{
          //..gib alle Posts auf der Konsole aus
        console.log(data);

        //..finde die höchste Post-Id und gib sie auf der Konsole aus
        const allIds = data.map((user)=> {
            return user.id
            //hier mit spread Operator, da Mathmax nicht auf Arrays funktioniert
        });  console.log(Math.max(...allIds));

        //..finde den kürzesten title und gib ihn in der Konsole aus
        const titles = data.map((user)=>{
            return user.title
        });
        const titleSorted = titles.sort((a, b)=>{
            return a.length-b.length
        }); console.log(titleSorted[0]);

        //..finde den längsten Body und gib ihn auf der Konsole aus
        const bodies = data.map((user)=>{
            return user.body
        });
        const bodiesSorted = titles.sort((a, b)=>{
            return a.length-b.length
            // hier kommt .legth-1, da ich so sortiert habe, dass das kürzeste vorne landet
            // also muss ich aufs letzte zugreifen, das passiert mit .length-1
        }); console.log(bodiesSorted[bodiesSorted.length-1]);
    });
});





//& fetch-level-2_1
console.log("fetch-level-2_1");

//..Nutze wieder die [Picsum API](https://picsum.photos/v2/list)
//..Da du dir die Daten jetzt schon in der Konsole ausgeben lassen kannst, darfst du als nächstes für jeden Datensatz eine Kombination aus Bild und Autor:in in ein figure-Element wrappen und in deinem HTML ausgeben lassen
//..Die Elemente in deinem HTML sollten dann so aussehen:
//..Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an


//..Verwende appendChild für die Darstellung der Element
//..Gib dem img-Tag in deinem CSS eine Breite von 50%, damit das Ganze nicht zu unübersichtlich wird.

const photoSection= document.querySelector("#all-figures");

type Picture = {
    id: number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
};


fetch("https://picsum.photos/v2/list").then((response)=> {
    return response.json().then((picData: Picture[])=>{
        const allURLS =picData.map((singlePic)=> {
            return singlePic.download_url;
        });

        const allAuthors =picData.map((singlePic)=> {
            return singlePic.author;
        });

        for (let i=0; i<= allURLS.length-1; i++) {
            if (photoSection) {
                const figureElement = document.createElement("figure");
                figureElement.className = "flex flex-col items-center";
                photoSection.appendChild(figureElement);
                const imgElement = document.createElement("img");
                imgElement.src = allURLS[i];
                imgElement.className = "w-[80%]"
                figureElement.appendChild(imgElement);
                const captionElement = document.createElement("figurecaption");
                captionElement.textContent = allAuthors[i];
                figureElement.appendChild(captionElement);
            }
        }
    })
})
.catch((error)=>{
    console.log(error);
});