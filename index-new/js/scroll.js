document.documentElement.style.setProperty("--slideRight-distence", "-" + screen.width + "px");

let windowHeight = window.innerHeight;
let sidebarChildren = document.getElementsByClassName("sidebar-child");
let sectionList = document.getElementsByClassName("scrollCenter");
let sidebarContent = document.getElementsByClassName("sidebar-content");
let whenToShow = windowHeight * 0.5;

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

const headerCallback = () => {
    document.body.style.setProperty('--scroll', window.pageYOffset);

//     //console.log(document.body.style.getPropertyValue("--scroll"));
    let scrollIndex = document.body.style.getPropertyValue("--scroll");

    //header scroll effect
    if (scrollIndex > 50 ) {
        document.getElementsByTagName("header")[0].classList.add("slideUpEffect");
    }

    if (scrollIndex < 50 ) {
        document.getElementsByTagName("header")[0].classList.remove("slideUpEffect");
    }
  };

//window.addEventListener('scroll', headerCallback);

const sectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let showUpList = entry.target.getElementsByClassName("addScrollShowup");
            for (let elementComp of showUpList) {
                elementComp.classList.add("doShowUp");
            }
        } else {
            let showUpList = entry.target.getElementsByClassName("addScrollShowup");
            for (let elementComp of showUpList) {
                elementComp.classList.remove("doShowUp");
            }
        }
    });
}

const skillCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setSkillDelay();
        }
    });
}

const options = {
    rootMargin : "-40%"
}

const sectionObserver = new IntersectionObserver(sectionCallback, options);
for (let element of sectionList) {
    sectionObserver.observe(element);
}

const skillObserver = new IntersectionObserver(skillCallback, options);
skillObserver.observe(sectionList[1]);



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







let scrollableElement = document.body;

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    document.getElementsByTagName("header")[0].classList.remove("slideUpEffect");
    document.getElementsByTagName("header")[0].classList.add("slideDownEffect");
  } else {
    document.getElementsByTagName("header")[0].classList.add("slideUpEffect");
    document.getElementsByTagName("header")[0].classList.remove("slideDownEffect");
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}