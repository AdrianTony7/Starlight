let title = document.getElementById("title");

title.innerHTML = `Ashnikko - DEMIDEVIL`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Ashnikko - DEMIDEVIL/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"cover" || "Folder"}.jpg`);

const prefixes = ["01 - Ashnikko - Daisy -", "02 - Ashnikko - Toxic -", "03 - Ashnikko - Deal With It (feat. Kelis) - (feat. Kelis)", "04 - Ashnikko - Slumber Party (feat. Princess Nokia) - (feat. Princess Nokia)", "05 - Ashnikko - Drunk With My Friends -", "06 - Ashnikko - Little Boy -", "07 - Ashnikko - Cry (feat. Grimes) - (feat. Grimes)", "08 - Ashnikko - L8r Boi -", "09 - Ashnikko - Good While It Lasted -", "10 - Ashnikko - Clitoris! The Musical -"];

const suffix = ".mp3";

const songList = ["01  Daisy", "02.  Toxic", "03.  Deal With It (feat. Kelis)", "04.  Slumber Party (feat. Princess Nokia)", "05.  Drunk With My Friends", "06.  Little Boy", "07.  Cry (feat. Grimes)", "08.  L8r Boi", "09.  Good While It Lasted", "10.  Clitoris! The Musical"];


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