let btnList = document.getElementsByClassName("exp-btn");
btnList[0].classList.add("exp-btn-active");
for (let element of btnList) {
    element.addEventListener("mouseover", () => {
        element.classList.add("exp-btn-hover");
    });

    element.addEventListener("mouseout", () => {
        element.classList.remove("exp-btn-hover");
    });

    element.addEventListener("click", () => {
        for(let x of btnList) {
            x.classList.remove("exp-btn-active");
        }
        element.classList.add("exp-btn-active");
    });
}
