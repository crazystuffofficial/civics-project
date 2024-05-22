function setNavbarInnerHTML() {
    document.querySelector(".navbar").innerHTML = `
        <a href="./">Home Page</a>
        <a href="firstammendment.html">First Amendment Freedoms
</a>        <a href="civicsedu.html">Civics Education
</a>        <a href="benefits.html">Benefits of Civics Education
</a>        <a href="buy.html">What We Could Buy
</a>        <a href="publicgood.html">Civics and the Public Good
</a>
    `;
}

document.addEventListener("DOMContentLoaded", setNavbarInnerHTML);
