var facts = [
    "Fact 1: Civics education promotes critical thinking skills.",
    "Fact 2: It fosters a sense of community and shared values.",
    "Fact 3: Civics education helps students become informed voters.",
    "Fact 4: It encourages civic participation and advocacy."
];

var factsDiv = document.getElementById('facts');

function createFactDiv(fact) {
    var factDiv = document.createElement('div');
    factDiv.className = 'fact';
    factDiv.textContent = fact;
    return factDiv;
}

function appendFactDiv(factDiv) {
    factsDiv.appendChild(factDiv);
}

function createAndAppendAllFactDivs() {
    for (var i = 0; i < facts.length; i++) {
        var factDiv = createFactDiv(facts[i]);
        appendFactDiv(factDiv);
    }
}

createAndAppendAllFactDivs();

function removeSlideInClassFromNavbar() {
    document.getElementById('navbar').classList.remove('slide-in');
}

removeSlideInClassFromNavbar();

function setNavbarInnerHTML() {
    document.querySelector("#navbar").innerHTML = `
        <a href="page1.html">Page 1</a>
        <a href="page2.html">Page 2</a>
    `;
}

document.addEventListener("DOMContentLoaded", setNavbarInnerHTML);
