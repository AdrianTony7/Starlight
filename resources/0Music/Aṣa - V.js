let title = document.getElementById("title");

title.innerHTML = `Aṣa - V`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Aṣa - V/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"cover" || "Folder"}.jpg`);

const prefixes = ["01 - Mayana", "02 - Ocean", "03 - IDG", "04 - Nike", "05 - Show Me Off", "06 - Morning Man", "07 - Good Times", "08 - Believer", "09 - All I Ever Wanted", "10 - Love Me Or Give Me Red Wine"];

const suffix = ".mp3";

const songList = ["01  Mayana", "02.  Ocean", "03.  IDG", "04.  Nike", "05.  Show Me Off", "06.  Morning Man", "07.  Good Times", "08.  Believer", "09.  All I Ever Wanted", "10.  Love Me Or Give Me Red Wine"];


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