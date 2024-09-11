//Script for Welcome to Demon School Iruma-kun

let title = document.getElementById("title");
title.innerHTML = `Welcome to Demon School Iruma-kun`;

let prevN = -1
let nextN = 1;
let vidN = nextN -1;
let prefix = `C:/Users/Stephen/Videos/Welcome to Demon School! Iruma-kun Season 3/EP.`;
let suffix = ".480p.mp4";

listBtns = document.querySelectorAll(".playlist a");

let prevV = `${prefix}${prevN}${suffix}`;

let nextV = `${prefix}${nextN}${suffix}`;

// ${prevN} ${nextN}


const vid = document.querySelector("video");
const vidName = vid.getAttributeNames;
console.log(vidName);

document.querySelector("#btnPrev").onclick = function(){
    prevV = `${prefix}${prevN}${suffix}`;

    nextV = `${prefix}${nextN}${suffix}`;

    vid.setAttribute("src", prevV);

    prevN = prevN -1;
    nextN = nextN -1;
    vidN = vidN -1;
    console.log(vidN);

    title.textContent = `Welcome to Demon School Iruma-kun Episode ${vidN}`;
};
document.querySelector("#btnNext").onclick = function(){
    prevV = `${prefix}${prevN}${suffix}`;

    nextV = `${prefix}${nextN}${suffix}`;

    vid.setAttribute("src", nextV);

    prevN = prevN +1;
        nextN = nextN + 1;
        vidN = vidN +1;
        console.log(vidN);  
        title.textContent = `Welcome to Demon School Iruma-kun Episode ${vidN}`;
    };

    listBtns.forEach(listBtn => {
        listBtn.onclick = function(){
            vidNStr = listBtn.id;
            vidN = parseInt(vidNStr);
            prevN = vidN -1;
            nextN = vidN +1;
            console.log(vidN);
            
            vidV = `${prefix}${vidN}${suffix}`;

            vid.setAttribute("src", vidV);
            title.textContent = `Welcome to Demon School Iruma-kun Episode ${vidN}`;
        };
    });       
// listBtn.onclick = function(){
//     vidN = listBtn.id;
//     prevN = vidN -1;
//     nextN = vidN +1;
//     console.log(vidN);
    
//     vidV = `C:/Users/Stephen/Videos/The genius Prince's guide to raising a nation out of debt/The genius Prince's guide to raising a nation out of debt.EP.${vidN}.360p.mp4`;

//     vid.setAttribute("src", vidV);
// };