let title = document.getElementById("title");

title.innerHTML = `The Weeknd - My Dear Melancholy`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/The Weeknd - My Dear Melancholy/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"Folder"}.jpg`);

const prefixes = ["The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio)", "The Weeknd - Privilege (Official Audio)", "The Weeknd - Try Me (Official Audio)", "The Weeknd - Wasted Times (Official Audio)", "The_Weeknd_-_Call_Out_My_Name_(Official_Audio)", "The_Weeknd_-_Hurt_You_feat._Gesaffelstein_(Official_Audio)"];

const suffix = ".mp3";

const songList = ["01.  I Was Never There (feat. Gesaffelstein)", "02.  Privilege", "03.  Try Me", "04.  Wasted Times", "05.  Call Out My Name", "06.  Hurt You (feat. Gesaffelstein)"];


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