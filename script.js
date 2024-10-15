const expandBtn = document.getElementById("expand-btn");
const resume = document.getElementById("resume");
let expanded = false;

expandBtn.addEventListener("click", () => {
    if (expanded) {
        resume.style.width = "600px";
        resume.style.height = "800px";
        expandBtn.textContent = "Expand Resume";
    } else {
        resume.style.width = "800px";
        resume.style.height = "1000px";
        expandBtn.textContent = "Collapse Resume";
    }
    expanded = !expanded;
});