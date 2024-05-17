function setNavbarInnerHTML() {
    document.querySelector(".navbar").innerHTML = `
        <a href="page1.html">Page 1</a>
        <a href="page2.html">Page 2</a>
    `;
}

document.addEventListener("DOMContentLoaded", setNavbarInnerHTML);
