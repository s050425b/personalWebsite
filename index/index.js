
//Football animation --------------------------------------
let isPressed = false;

let footballX = 0;

document.getElementById("footballImg").addEventListener("click", () => {
    if (!isPressed) {
        let footballX = Math.floor(Math.random() * 110) - 55;
        let footballY = Math.floor(Math.random() * 20) + 80;
        console.log(footballX);
        document.documentElement.style.setProperty('--footballY', `-${footballY}px`);
        document.documentElement.style.setProperty('--footballX', `${footballX}px`);

        document.getElementById("footballImg").classList.add("footballAnimation");
        isPressed = true;

        setTimeout(() => {
            document.getElementById("footballImg").classList.remove("footballAnimation");
            isPressed = false;
        }, 750);
    }    
});



