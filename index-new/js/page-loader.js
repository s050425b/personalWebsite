document.querySelector("body").style.display = "none";
const newDiv = document.createElement("div");
newDiv.innerHTML = '<img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width="250" />';
newDiv.setAttribute("id", "pageLoader");
const currentDiv = document.getElementsByTagName("html")[0];
currentDiv.appendChild(newDiv);


window.addEventListener("load", function(event) {
  // All resources finished loading!
  this.setTimeout(() => {
    
    document.querySelector("body").style.display = "block";
    newDiv.style.opacity = 0;
    // newDiv.style.display = "none";
  }, 2000)
  
});
