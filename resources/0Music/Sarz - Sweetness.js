let title = document.getElementById("title");

title.innerHTML = `Sarz - Sweetness`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Sarz - Sweetness/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"cover" || "Folder"}.jpg`);

const prefixes = ["01 - Sarz - Sweetness -", "02 - Sarz - Gone Girl -", "03 - Sarz - If You Say -", "04 - Sarz - Nobody -"];

const suffix = ".mp3";

const songList = ["01.  Sweetness", "02.  Gone Girl", "03.  If You Say", "04.  Nobody"];


/**** REPEATED VARIABLES *********************/
let count = 0;
xli = document.querySelector("li");
const trackList = document.querySelector("ol");
trackList.removeChild(xli);

let songTitle = document.createElement("span");
let song = document.createElement("audio");
let li = document.createElement("li");

const names = song.getAttributeNames;
console.log(names);

// ${prevN} ${nextN}
song.setAttribute("src", path);

songList.forEach(songs => {
    let songTitle = document.createElement("span");
    let song = document.createElement("audio");
    let li = document.createElement("li");
    li.setAttribute("class", "albumLI")
    songTitle.textContent = songs;

    let fPath = `${path}${prefixes[count]}${suffix}`;
    count = count +1;

    song.setAttribute("src", fPath);
    song.setAttribute("controls", "controls");
    song.setAttribute("onkeypress", "play");

    li.appendChild(songTitle);
    li.appendChild(song);
    trackList.appendChild(li);
});