import { outputMessage } from "./terminal.js";
import { centerCarousel } from "./carousel.js";

outputMessage();
centerCarousel();

// Show/hide sections when button is clicked
function toggleSection(section) {
    if (section.style.maxHeight) {
        section.style.maxHeight = null;
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
    }
}

document.querySelectorAll("[data-toggle]").forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.toggle;
        const section = document.getElementById(targetId);
        toggleSection(section);
    });
});

// Set current year in copyright
const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `&copy; 2023-${currentYear} Scott Kenneth Jackson`;
