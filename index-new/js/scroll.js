document.documentElement.style.setProperty("--slideRight-distence", "-" + screen.width + "px");

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset);
    console.log(document.body.style.getPropertyValue("--scroll"));
    let scrollIndex = document.body.style.getPropertyValue("--scroll");
    if (scrollIndex > 50 ) {
        document.getElementsByTagName("header")[0].classList.add("slideUpEffect");
    }

    if (scrollIndex < 50 ) {
        document.getElementsByTagName("header")[0].classList.remove("slideUpEffect");
    }
    // console.log("pageYOffset  "+ window.pageYOffset);
    // console.log("offsetHeight  "+ document.body.offsetHeight);
    // console.log("innerHeight  "+ window.innerHeight);

    if( scrollIndex > 163){
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