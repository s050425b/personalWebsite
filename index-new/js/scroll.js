document.documentElement.style.setProperty("--slideRight-distence", "-" + screen.width + "px");

let windowHeight = window.innerHeight;
let sidebarChildren = document.getElementsByClassName("sidebar-child");
let sectionList = document.getElementsByClassName("scrollCenter");
let sidebarContent = document.getElementsByClassName("sidebar-content");

for (let counter = 0; counter < sidebarChildren.length; counter++) {
    sidebarChildren[counter].addEventListener("click", (e) => {
        window.scrollTo({
            top: sectionList[counter].offsetTop,
            behavior: 'smooth'
        });

        for (let element of sidebarContent) {
            element.classList.remove("sidebar-active");
        }
        sidebarContent[counter].classList.add("sidebar-active");
    });
  }


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

    //section showup effect
    for (let element of sectionList) {
        if (windowHeight > element.getBoundingClientRect().top + 600 && element.getBoundingClientRect().bottom > 600) {
            let showUpList = element.getElementsByClassName("addScrollShowup");
            for (let elementComp of showUpList) {
                elementComp.classList.add("doShowUp");
            }
        }
    }

    console.log(sectionList[1].getBoundingClientRect().bottom);
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




