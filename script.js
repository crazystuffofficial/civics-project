function whenLoaded() {
    document.querySelector("nav").innerHTML = `
      <ul>
	<li><a href="index.html"> <button type="button">Home</button></a></li>
        <li><a href="firstammendment.html"> <button type="button">First Amendment Freedoms</button></a></li>
        <li><a href="civicsedu.html"> <button type="button">Civics Education</button></a></li>
        <li><a href="benefits.html"> <button type="button">Benefits of Civics Education</button></a></li>
	<li><a href="buy.html"> <button type="button">What We Could Buy</button></a></li>
	<li><a href="publicgood.html"><button type="button">Civics and the Public Good</button></a></li>
	<li><a href="rubric.html"><button type="button">Rubric</button></a></li>
 	<li><a href="citations.html"><button type="button">Citations</button></a></li>
      </ul>
    `;
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
coll[i].setAttribute("name", i);
coll[i].setAttribute("title", "Click this to see an image");
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelectorAll(".content")[eval(this.getAttribute("name"))];
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
if(!document.querySelector("footer")){
var footer = document.createElement("footer");
footer.innerText = "Made by Shayaan Hooda";
document.body.appendChild(footer);
}
document.title="LAA Why Is Civics Important? Hooda, 2024";
var img = document.querySelectorAll("img");
for(var i = 0; i < img.length; i++){
	img[i].outerHTML = "<center>" + img[i].outerHTML + "</center>";
}
if(document.querySelector("h1").innerHTML.startsWith("Civics Education Advocacy") == false){
	document.querySelector("h1").innerText = "Civics Education Advocacy - " + document.querySelector("h1").innerText;
}
}
document.addEventListener("DOMContentLoaded", whenLoaded);
