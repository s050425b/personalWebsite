function expObjBuilder(title, date, company, desc, skillset, btnName) {
    return {
        "title": title,
        "date": date,
        "company": company,
        "desc": desc,
        "skillset": skillset,
        "btnName": btnName
    }
}

//dataset
let varmeegoDesc = "Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!";
let varmeegoSkillset = ["Java (Spring) ", "Javascript (Vue.js)", "SQL (Oracle)"];
let varmeego = expObjBuilder("Application Developer", "July, 2022 - Present", "Varmeego Limited.", varmeegoDesc, varmeegoSkillset);

let appleDesc = "Hello! My name is Apple and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!";
let appleSkillset = ["Java (Spring) ", "Javascript (Vue.js)", "SQL (Oracle)"];
let apple = expObjBuilder("Application Developer", "July, 2021 - Auguest, 2022", "Apple Limited.", varmeegoDesc, varmeegoSkillset);

let googleDesc = "Hello! My name is Google and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!";
let googleSkillset = ["Java (Spring) ", "Javascript (Vue.js)", "SQL (Oracle)"];
let google = expObjBuilder("Application Developer", "July, 2020 - Auguest, 2021", "Google Limited.", varmeegoDesc, varmeegoSkillset);

let expList = [varmeego, apple, google];

function displayExp(obj) {
    document.getElementsByClassName("exp-postName")[0].innerHTML = obj.title;
    document.getElementsByClassName("exp-comp-name")[0].innerHTML = obj.company;
    document.getElementsByClassName("exp-work-period")[0].innerHTML = obj.date;
    document.getElementsByClassName("line3")[0].innerHTML = obj.desc;

    let skillsetstr = "";
    for (let skill of obj.skillset) {
        skillsetstr += "<li>" + skill + "</li>";
    }
    document.getElementsByClassName("exp-work-skillset")[0].innerHTML = skillsetstr;
}
//--------------------------------------------------

displayExp(expList[0]);

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
