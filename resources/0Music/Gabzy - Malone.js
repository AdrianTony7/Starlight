let title = document.getElementById("title");

title.innerHTML = `Gabzy - Malone`;

let path = `C:/Users/Stephen/Music/Downloaded Musik/Gabzy - Malone/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"cover" || "Folder"}.jpg`);

const prefixes = ["01 - Gabzy - As Friends -", "02 - Gabzy - Must Be Sprung -", "03 - Gabzy - Brazil -", "04 - Gabzy - Malone Interlude -", "05 - Gabzy - Toxic -"];

const suffix = ".mp3";

const songList = ["01.  As Friends", "02.  Must Be Sprung", "03.  Brazil", "04.  Malone Interlude", "05.  Toxic"];


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