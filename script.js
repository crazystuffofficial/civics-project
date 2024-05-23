function whenLoaded() {
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
    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", whenLoaded);
