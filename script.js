        var facts = [
            "Fact 1: Civics education promotes critical thinking skills.",
            "Fact 2: It fosters a sense of community and shared values.",
            "Fact 3: Civics education helps students become informed voters.",
            "Fact 4: It encourages civic participation and advocacy."
        ];

        var factsDiv = document.getElementById('facts');

        for (var i = 0; i < facts.length; i++) {
            var factDiv = document.createElement('div');
            factDiv.className = 'fact';
            factDiv.textContent = facts[i];
            factsDiv.appendChild(factDiv);
        }

        // Slide-in Transition for Navigation Bar
        document.getElementById('navbar').classList.remove('slide-in');
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#navbar").innerHTML = `        <a href="page1.html">Page 1</a>
        <a href="page2.html">Page 2</a>`;
});
