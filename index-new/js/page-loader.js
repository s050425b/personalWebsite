// document.querySelector("body").style.visibility = "hidden";
// console.log("loading");

// document.onreadystatechange = function(e) {
//     if (document.readyState === "complete") {
//         //document.querySelector("#spinner").style.display = "none";
//         document.querySelector("body").style.visibility = "visible";
//         console.log("finished");
//     }
// };
document.querySelector("body").style.display = "none";
const newDiv = document.createElement("div");
const newContent = document.createTextNode("Hi there and greetings!");
newDiv.setAttribute("id", "pageLoader");
newDiv.appendChild(newContent);
const currentDiv = document.getElementsByTagName("html")[0];
currentDiv.appendChild(newDiv);

window.addEventListener("load", function(event) {
    // All resources finished loading!
    //document.querySelector("body").style.display = "block"
  });