//& Project-TS Panini Sammlerkarten
console.log("Project-TS Panini Sammlerkarten");

//..In dieser Übung wirst du anhand von Eingaben Sammlerkarten erstellen.
//..Erstelle einen Type für deine ausgewählte Art von Sammelkarten mit verschiedenen Merkmalen/Eigenschaften (z.B. Rapper: Künstlername, Alter, verkaufte Singles/Alben etc.)
//..Du solltest mindestens 7 Eigenschaften anlegen, davon eine eine URL zu einem Bild

type FemaleMusicArtists = {
    name: string,
    country: string,
    music: string,
    favouriteSong: string,
    lastAlbumRelease: number,
    firstAlbumRelease: number,
    urlPicture: string,
};


//das Array, in das alle Sammelkarten gespeichert werden soll GLOBAL definieren, sonst wird es pro Klick neu erstellt und hat immer nur die aktuelle Sammelkarte drin
const collection : FemaleMusicArtists[] = [];

//..Erstelle eine Inputform und ein Button im HTML für die Erstellung einer Paninikarte.

//..Erstelle eine Methode, um die Karten in HTML anzuzeigen.
//..Style die Paninikarte mithilfe des CSS-Grid-Layouts.

// alle values auslesen und als textContent auf Sammelkarte wieder geben
// Stylings im CSS schon vorgeben-also Klasse, die mit classList.add geadded wird
// url-Value dann als background url nutzen
//alle anderen Angaben als p tag auf das background img

const nameInput = document.querySelector<HTMLInputElement>("#input-name");
const countryInput = document.querySelector<HTMLInputElement>("#input-country");
const musicInput = document.querySelector<HTMLInputElement>("#input-music");
const favSongInput = document.querySelector<HTMLInputElement>("#input-fav-song");
const lastReleaseInput = document.querySelector<HTMLInputElement>("#input-last-release");
const firstReleaseInput = document.querySelector<HTMLInputElement>("#input-first-release");
const urlInput = document.querySelector<HTMLInputElement>("#input-url");

const button = document.querySelector("#button-submit");

const output = document.querySelector("#output");

if (nameInput && countryInput && musicInput && favSongInput && lastReleaseInput && firstReleaseInput && urlInput && button && output) {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        //values erst hier, sonst werden sie nicht ausgelsen bzw sind dann noch leer
        const nameValue = nameInput.value;
        const countryValue = countryInput.value;
        const musicValue = musicInput.value;
        const favSongValue = favSongInput.value;
        const lastReleaseValue = lastReleaseInput.value;
        const firstReleaseValue = firstReleaseInput.value;
        const urlValue = urlInput.value;


        // Objekte bestimme, die pro Klick in dem zuvor definierten Array gespeichert werden sollen
        const femaleMusicArtist: FemaleMusicArtists = {
            name: nameValue,
            country: countryValue,
            music: musicValue,
            favouriteSong: favSongValue,
            lastAlbumRelease: Number(lastReleaseValue),
            firstAlbumRelease: Number(firstReleaseValue),
            urlPicture: urlValue,
        };
        //oben erstelltes Objekt dem zuvor erstellen Array hinzufügen mit .push()
        collection.push(femaleMusicArtist);
        console.log(femaleMusicArtist);
        console.log(collection);

        // div erstellen, das die Sammelkarte wird, Ort bestimmen und den Hintergrund auslesen
        const divCard = document.createElement("div");
        divCard.className =`bg-[url('${urlValue}')]`;
        output.appendChild(divCard);

        //einzelne Eigenschaften hinzufügen
        const pName = document.createElement("p");
        pName.textContent = `Artist name: ${femaleMusicArtist.name}`;
        pName.className = "text-white text-[12px]";
        divCard.appendChild(pName);

        const pCountry = document.createElement("p");
        pCountry.textContent = `The artist is from ${femaleMusicArtist.country}`
        pCountry.className = "text-white text-[12px] mb-10";
        divCard.appendChild(pCountry);

        const pMusic = document.createElement("p");
        pMusic.textContent = `The artist makes ${femaleMusicArtist.music}`
        pMusic.className = "text-white text-[12px] text-right";
        divCard.appendChild(pMusic);
        
        const pSong = document.createElement("p");
        pSong.textContent = `My favourite song is: ${femaleMusicArtist.favouriteSong}`
        pSong.className = "text-white text-[12px] text-right mb-20";
        divCard.appendChild(pSong);

        const pLastRelease = document.createElement("p");
        pLastRelease.textContent = `The last album release was in ${femaleMusicArtist.lastAlbumRelease}`
        pLastRelease.className = "text-white text-[12px]";
        divCard.appendChild(pLastRelease);

        const pFirstRelease = document.createElement("p");
        pFirstRelease.textContent = `The first album release was in ${femaleMusicArtist.firstAlbumRelease}`
        pFirstRelease.className = "text-white text-[12px]";
        divCard.appendChild(pFirstRelease);
    });
};
