let title = document.getElementById("title");

title.innerHTML = `Masego - Studying Abroad`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Masego - Studying Abroad/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"cover" || "Folder"}.jpg`);

const prefixes = ["01 - Masego - Passport -", "02 - Masego - Silver Tongue Devil -", "03 - Masego - Mystery Lady -", "04 - Masego - Polygamy -", "05 - Masego - Sides of Me -", "06 - Masego - Bye Felicia -"];

const suffix = ".mp3";

const songList = ["01.  Passport", "02.  Silver Tongue Devil", "03.  Mystery Lady", "04.  Polygamy", "05.  Sides of Me", "06.  Bye Felicia"];


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