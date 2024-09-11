let title = document.getElementById("title");

title.innerHTML = `Basketmouth - Papa Benji`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Basketmouth - Papa Benji/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"Folder"}.jpg`);

const prefixes = ["Life - Basketmouth ft Chike, Zoro & Play (#PapaBenji Soundtrack)", "Myself - Basketmouth ft Oxlade & Show Dem Camp (#PapaBenji Soundtrack)", "One Bo - Basketmouth ft Umu Obiligbo (#PapaBenji Soundtrack)", "Papa Benji - Basketmouth ft Flavour & Phyno (#PapaBenji Soundtrack)", "Pepper Soup - Basketmouth ft Duncan Mighty & Ice Prince (#PapaBenji Soundtrack)", "Ride or Die - Basketmouth ft Waje & Ladipoe (#PapaBenji Soundtrack)", "World People - Basketmouth ft Flash & Boj (#PapaBenji Soundtrack)"];

const suffix = ".mp3";

const songList = ["01.  Life (ft Chike, Zoro & Play)", "02.  Myself (ft Oxlade & Show Dem Camp)", "03.  One Bo  (ft Umu Obiligbo)", "04.  Papa Benji  (ft Flavour & Phyno)", "05.  Pepper Soup (ft Duncan Mighty & Ice Prince)", "06.  Ride or Die  (ft Waje & Ladipoe)", "07.  World People  (ft Flash & Boj)"];


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