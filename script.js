function setNavbarInnerHTML() {
    document.querySelector("nav").innerHTML = `
      <ul>
	<li><a href="index.html"> <button type="button">Home</button></a></li>
        <li><a href="firstammendment.html"> <button type="button">First Amendment Freedoms</button></a></li>
        <li><a href="civicsedu.html"> <button type="button">Civics Education</button></a></li>
        <li><a href="benefits.html"> <button type="button">Benefits of Civics Education</button></a></li>
	<li><a href="buy.html"> <button type="button">What We Could Buy</button></a></li>
	<li><a href="publicgood.html"><button type="button">Civics and the Public Good</button></a></li>
      </ul>
    `;
}

document.addEventListener("DOMContentLoaded", setNavbarInnerHTML);
