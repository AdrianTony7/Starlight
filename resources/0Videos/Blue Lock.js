let title = document.getElementById("title");
title.innerHTML = `Blue Lock`;

let prevN = -1
let nextN = 1;
let vidN = nextN -1;
let prefix = `C:/Users/Stephen/Videos/Blue Lock/Blue lock episode `;
let suffix = ".mp4";

listBtns = document.querySelectorAll(".playlist a");

let prevV = `${prefix}${prevN}${suffix}`;

let nextV = `${prefix}${nextN}${suffix}`;

// ${prevN} ${nextN}


const vid = document.querySelector("video");
const vidName = vid.getAttributeNames;
console.log(vidName);
// if (vidN <= 12 && vidN>= 1) {
//     document.querySelector("#vidNote").remove();
// }

document.querySelector("#btnPrev").onclick = function(){
    prevV = `${prefix}${prevN}${suffix}`;

    nextV = `${prefix}${nextN}${suffix}`;

    vid.setAttribute("src", prevV);

    prevN = prevN -1;
    nextN = nextN -1;
    vidN = vidN -1;
    console.log(vidN);

    title.textContent = `Blue Lock Episode ${vidN}`;
};
document.querySelector("#btnNext").onclick = function(){
    prevV = `${prefix}${prevN}${suffix}`;

    nextV = `${prefix}${nextN}${suffix}`;

    vid.setAttribute("src", nextV);

    prevN = prevN +1;
        nextN = nextN + 1;
        vidN = vidN +1;
        console.log(vidN);  
        title.textContent = `Blue Lock Episode ${vidN}`;

        document.querySelector("#vidNote").remove();
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
            title.textContent = `Blue Lock Episode ${vidN}`;

            document.querySelector("#vidNote").remove();
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