const div = document.getElementById("container")
for(var i=0; i<4; i+=1)
  {
    var divs = document.createElement("div");
    divs.style.height="75px";
    divs.style.width="75px";
    divs.style.background="palevioletred";
    divs.style.margin="10";
    div.appendChild(divs);
}
