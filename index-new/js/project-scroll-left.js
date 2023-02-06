
document.getElementsByClassName("scroll-left")[0].addEventListener("click", () => {
    document.getElementsByClassName("project-box-parent")[0].scrollLeft += window.innerWidth * 0.2;
});

document.getElementsByClassName("scroll-right")[0].addEventListener("click", () => {
    document.getElementsByClassName("project-box-parent")[0].scrollLeft -= 100;
});