//icon roll
let windowWidth = window.innerWidth;
document.documentElement.style.setProperty('--rollx1', `${windowWidth/6}px`);
document.documentElement.style.setProperty('--rollx2', `${windowWidth/6*2.3}px`);

console.log(windowWidth);

let rollDescList = document.getElementsByClassName("icon-desc");
let rollList = document.getElementsByClassName("icon-circle");
setTimeout( () => {
    for (let i = 0; i < rollList.length; i++) {
        rollList[i].addEventListener("mouseover", () => {
            rollDescList[i].style.visibility = "visible";
            rollDescList[i].style.opacity = "1";
        });
    }
    
    for (let i = 0; i < rollList.length; i++) {
        rollList[i].addEventListener("mouseout", () => {
            rollDescList[i].style.opacity = "0";
        });
    }
}, 1500)
