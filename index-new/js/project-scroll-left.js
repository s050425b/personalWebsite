let pageX;
let scrollLeft;
let isClicked;
let slider = document.getElementsByClassName("project-box-parent")[0];
let walk;
let speed; 
let timerOn = false;
let lastX;
let xNow;

slider.addEventListener("mousedown", (e) => {
    //console.log("e: " + e.pageX);
    //console.log("scrollLeft:" + document.getElementsByClassName("project-box-parent")[0].scrollLeft);
    walk = 0;
    pageX = e.pageX;
    isClicked = true;
    scrollLeft = slider.scrollLeft;
    
    lastX = pageX;
});

let eventPass;
slider.addEventListener("mousemove", (e) => {
    if (isClicked){
        walk = (pageX - e.pageX) * 1.15;
        slider.scrollLeft = scrollLeft + walk;

        let record = () => {
            if (timerOn){
                setTimeout(() => {
                    xNow = eventPass.pageX;
                    speed = lastX - xNow;
                    lastX = xNow;
                    record();
                }, 100);
            }
        }
         
        eventPass = e;
        if (!timerOn){
            timerOn = true;
            record();
        }
    }
});

slider.addEventListener("mouseup", () => {
    isClicked = false;
    timerOn = false;

    let motion = speed * 0.1;
    let timer = 600;
    let step = () => {
        if (timer > 0 && !isClicked) {
            setTimeout( () => {
                slider.scrollLeft += motion;
                motion = motion / 1.05;
                timer -=10;
                step();
            }, 10);
        }
    }
    step();
        
    
});

slider.addEventListener("mouseout", () => {
    isClicked = false;
    timerOn = false;
    speed = 0;
});
