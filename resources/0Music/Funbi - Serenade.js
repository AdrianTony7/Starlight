let title = document.getElementById("title");

title.innerHTML = `Funbi - Serenade`;

let path = `C:/Users/Stephen/Music/Downloaded Musik/Funbi - Serenade/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"cover" || "Folder"}.jpg`);

const prefixes = ["CD1/01 - Funbi - Show Up -", "CD2/01 - Funbi - Show Your Color -", "CD3/01 - Funbi - Serenade -", "CD4/01 - Funbi - Voodoo -", "CD5/01 - Funbi - Body - (feat. Seyi Shay)", "CD6/01 - Funbi - Ride With You - (feat. Efya)", "CD7/01 - Funbi - I Want It Back -"];

const suffix = ".mp3";

const songList = ["01.  Show Up", "02.  Show Your Color", "03.  Serenade", "04.  Voodoo", "05.  Body (feat. Seyi Shay)", "06.  Ride With You", "07.  I Want It Back"];


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