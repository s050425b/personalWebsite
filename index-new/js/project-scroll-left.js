// let currentX = 0;

document.getElementsByClassName("scroll-left")[0].addEventListener("click", () => {
    setXValue(200);
});

document.getElementsByClassName("scroll-right")[0].addEventListener("click", () => {
    setXValue(-200);
});

function setXValue(value){
    let currentX = getComputedStyle(document.documentElement).getPropertyValue("--slide-go-x-axis");
    currentX = parseInt(currentX.split("px")[0]); 
    console.log(currentX);
    currentX += value;
    document.documentElement.style.setProperty("--slide-go-x-axis",  currentX + "px");
}


