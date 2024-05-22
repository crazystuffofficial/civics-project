function setNavbarInnerHTML() {
    document.querySelector(".navbar").innerHTML = `
        <a href="/">Home Page</a>
        <a href="firstammendment.html">First Amendment Freedoms
</a>
        <a href="firstammendment.html">First Amendment Freedoms
</a>        <a href="firstammendment.html">Civics Education
</a>        <a href="firstammendment.html">Benefits of Civics Education
</a>        <a href="firstammendment.html">What We Could Buy
</a>        <a href="firstammendment.html">Civics and the Public Good
</a>
    `;
}

document.addEventListener("DOMContentLoaded", setNavbarInnerHTML);
