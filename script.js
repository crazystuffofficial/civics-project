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
      </ul>
    `;
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
coll[i].setAttribute("name", i);
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelectorAll("content")[eval(this.getAttribute("name")];
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
}

document.addEventListener("DOMContentLoaded", whenLoaded);
