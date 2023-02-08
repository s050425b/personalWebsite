document.documentElement.style.setProperty("--slideRight-distence", "-" + screen.width + "px");

let windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset);

    //console.log(document.body.style.getPropertyValue("--scroll"));
    let scrollIndex = document.body.style.getPropertyValue("--scroll");

    //header scroll effect
    if (scrollIndex > 50 ) {
        document.getElementsByTagName("header")[0].classList.add("slideUpEffect");
    }

    if (scrollIndex < 50 ) {
        document.getElementsByTagName("header")[0].classList.remove("slideUpEffect");
    }

    //skill section scroll effect
    if( windowHeight > document.getElementsByClassName("skill-flex-parent")[0].getBoundingClientRect().top + 50){
        setSkillDelay();
    }

  }, false);


  function setSkillDelay() {
    for (let element of document.getElementsByClassName("skill-flex-parent")[0].getElementsByTagName("img")){
        element.classList.add("slideRight-scroll");
        element.classList.remove("hide");
    };
    var domList = document.getElementsByClassName("slideRight-scroll");
    for (let i = 0; i < domList.length; i++) {
        domList[i].style.animationDuration = `${domList.length - i + 1}s`;
    }
  }

  let sidebarChildren = document.getElementsByClassName("sidebar-child");
  let sectionList = document.getElementsByClassName("scrollCenter");

  for (let counter = 0; counter < sidebarChildren.length; counter++) {
    sidebarChildren[counter].addEventListener("click", () => {
        console.log(sectionList[counter].offsetTop);
        window.scrollTo({
            top: sectionList[counter].offsetTop,
            behavior: 'smooth'
        });
    });
  }



