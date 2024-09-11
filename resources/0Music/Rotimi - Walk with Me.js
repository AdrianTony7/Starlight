let title = document.getElementById("title");

title.innerHTML = `Rotimi - Walk with Me`;

let path = `C:/Users/Stephen/Music/Downloaded Musik/Rotimi - Walk with Me/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"Folder"}.jpg`);

const prefixes = ["01. Legend", "02. Decisions", "03. Love Riddim", "04. Sip Slow", "05. I Can't Blame You", "06. Summertime", "07. Push Button Start (feat. Vanessa Bling)"];

const suffix = ".mp3";

const songList = ["01.  Legend", "02.  Decisions", "03.  Love Riddim", "04.  Sip Slow", "05.  I Can't Blame You", "06.  Summertime", "07.  Push Button Start (feat. Vanessa Bling)"];


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