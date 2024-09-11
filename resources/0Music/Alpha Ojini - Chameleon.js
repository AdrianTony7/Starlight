let title = document.getElementById("title");

title.innerHTML = `Alpha Ojini - Chameleon`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Alpha Ojini - Chameleon/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"Folder"}.jpg`);

const prefixes = ["Alpha Ojini - BagX2 (feat. Blaqbonez)", "Alpha Ojini - CalmDown (feat. GoodGirl LA)", "Alpha Ojini - HalfMoon", "Alpha Ojini - HundredWays (feat. PsychoYP) (Official Audio)", "Alpha Ojini - Pop", "Alpha Ojini - TongueSong (feat. Bella Alubo)", "Alpha Ojini - SeeHeaven (feat. Ghost (SDC) & Oxlade)", "Alpha Ojini - XO (Official Audio)"];

const suffix = ".mp3";

const songList = ["01.  BagX2 (feat. Blaqbonez)", "02.  CalmDown (feat. GoodGirl LA)", "03.  HalfMoon", "04.  HundredWays (feat. PsychoYP)", "05.  Pop", "06.  TongueSong (feat. Bella Alubo)", "07.  SeeHeaven (feat. Ghost (SDC) & Oxlade)", "08.  XO"];


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