let title = document.getElementById("title");

title.innerHTML = `Amaarae - THE ANGEL YOU DON'T KNOW`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Amaarae - THE ANGEL YOU DON'T KNOW/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"cover" || "Folder"}.jpg`);

const prefixes = ["01 - D_A_N_G_E_R_O_U_S", "02 - FANCY", "03 - FANTASY", "04 - LEAVE ME ALONE", "05 - JUMPING SHIP", "06 - FEEL A WAY", "07 - TRUST FUND BABY", "08 - HELLZ ANGEL", "09 - CÉLINE", "10 - DAZED AND ABUSED IN BEVERLY HILLS", "11 - SAD, U BROKE MY HEART", "12 - 3AM", "13 - SAD GIRLZ LUV MONEY", "14 - PARTY SAD FACE_CRAZY WURLD"];

const suffix = ".mp3";

const songList = ["01  D_A_N_G_E_R_O_U_S", "02.  FANCY", "03.  FANTASY", "04.  LEAVE ME ALONE", "05.  JUMPING SHIP", "06.  FEEL A WAY", "07.  TRUST FUND BABY", "08.  HELLZ ANGEL", "09.  CÉLINE", "10.  DAZED AND ABUSED IN BEVERLY HILLS", "011.  SAD, U BROKE MY HEART", "012.  3AM", "013.  SAD GIRLZ LUV MONEY", "014.  PARTY SAD FACE_CRAZY WURLD"];


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