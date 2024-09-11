let title = document.getElementById("title");

title.innerHTML = `Cruel Santino - Mandy & The Jungle`;


let path = `C:/Users/Stephen/Music/Downloaded Musik/Cruel Santino - Mandy & The Jungle/`;

document.querySelector("#coverArt").setAttribute("src", `${path}${"cover" || "Folder"}.jpg`);

const prefixes = ["01 - Cruel Santino - Raining Outside -", "02 - Cruel Santino - Demon Hearts - (feat. DRAM)", "03 - Cruel Santino - Monte Claire -", "04 - Cruel Santino - Sparky -", "05 - Cruel Santino - RX-64 (The Jungle) - (feat. Krisirie)", "06 - Cruel Santino - DSM -", "07 - Cruel Santino - Freaky - (feat. Bridge & Nonso Amadi)", "08 - Cruel Santino - Morocco -", "09 - Cruel Santino - Murvlana - (feat. Tay Iwar)", "10 - Cruel Santino - Rapid Fire - (feat. Shane Eagle, Tomi Agape & Amaarae)", "11 - Cruel Santino - Raw Dinner - (feat. Kida Kudz)", "12 - Cruel Santino - Maria - (feat. GoldLink)", "13 - Cruel Santino - Dime In The Winter -", "14 - Cruel Santino - Turn Down Mami -", "15 - Cruel Santino - Diamonds _ Where You Been - (feat. Seki)", "16 - Cruel Santino - Settle Down - (feat. Tay Iwar & Amaarae)"];

const suffix = ".mp3";

const songList = ["01  Raining Outside", "02.  Demon Hearts (feat. DRAM)", "03.  Monte Claire", "04.  Sparky", "05.  RX-64 (The Jungle) (feat. Krisirie)", "06.  DSM", "07.  Freaky (feat. Bridge & Nonso Amadi)", "08.  Morocco", "09.  Murvlana (feat. Tay Iwar)", "10.  Rapid Fire (feat. Shane Eagle, Tomi Agape & Amaarae)", "011.  Raw Dinner (feat. Kida Kudz)", "012.  Maria (feat. GoldLink)", "013.  Dime In The Winter", "014.  Turn Down Mami", "015.  Diamonds _ Where You Been (feat. Seki)", "016.  Settle Down (feat. Tay Iwar & Amaarae)"];


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