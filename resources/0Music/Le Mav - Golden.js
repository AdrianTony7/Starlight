let title = document.getElementById("title");

title.innerHTML = `Le Mav - Golden`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Le Mav - Golden/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"Folder"}.jpg`);

const prefixes = ["Le Mav - Champion", "Le Mav - Golden", "Le Mav - Gun Fighter", "Le Mav - Heat", "Le Mav - Karma", "Le Mav - Ricochet", "Le Mav - Seal", "Le Mav - Shoreditch Swing"];

const suffix = ".mp3";

const songList = ["01.  Champion", "02.  Golden", "03.  Gun Fighter", "04.  Heat", "05.  Karma", "06.  Ricochet", "07.  Seal", "08.  Shoreditch Swing"];


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