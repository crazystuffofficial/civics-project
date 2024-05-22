function setNavbarInnerHTML() {
    document.querySelector(".navbar").innerHTML = `
      <ul>
	<li><a href="index.html"> <button type="button">Home</button></a></li>
        <li><a href="about.html"> <button type="button">First Amendment Freedoms</button></a></li>
        <li><a href="equipment.html"> <button type="button">Civics Education</button></a></li>
        <li><a href="events.html"> <button type="button">Benefits of Civics Education</button></a></li>
	<li><a href="workshops.html"> <button type="button">What We Could Buy</button></a></li>
	<li><a href="classes.html"><button type="button">Civics and the Public Good</button></a></li>
      </ul>
    `;
}

document.addEventListener("DOMContentLoaded", setNavbarInnerHTML);
