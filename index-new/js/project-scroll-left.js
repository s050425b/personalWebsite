let pageX;
let scrollLeft;
let isClicked;
let slider = document.getElementsByClassName("project-box-parent")[0];
let walk;
let lastWalk; 
let timerOn = false;

slider.addEventListener("mousedown", (e) => {
    //console.log("e: " + e.pageX);
    //console.log("scrollLeft:" + document.getElementsByClassName("project-box-parent")[0].scrollLeft);
    walk = 0;
    pageX = e.pageX - slider.offsetLeft;
    isClicked = true;
    scrollLeft = slider.scrollLeft;
});


slider.addEventListener("mousemove", (e) => {
    if (isClicked){
        walk = (pageX - slider.offsetLeft - e.pageX) * 1.25;
        slider.scrollLeft = scrollLeft + walk;

        let record = () => {
            if (timerOn){
                setTimeout(() => {
                    lastWalk = (pageX - slider.offsetLeft - e.pageX) * 1.25;
                    console.log(lastWalk);
                    record();
                }, 500);
            }
        }
          
        if (!timerOn){
            timerOn = true;
            record();
        }
    }
});

slider.addEventListener("mouseup", () => {
    isClicked = false;
    timerOn = false;

    let motion = lastWalk * 0.05;
    
    let timer = 600;
    let step = () => {
        if (timer > 0) {
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

