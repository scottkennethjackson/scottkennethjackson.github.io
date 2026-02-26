import { outputMessage } from "./terminal.js";
import { carouselLogic } from "./carousel.js";
import { validateForm } from "./contact-form.js";

outputMessage();
carouselLogic();
validateForm();

// Collapse/expand sections when heading button is clicked
function toggleSection(section, button) {
    const isOpen = section.style.maxHeight;

    if (isOpen) {
        section.style.maxHeight = null;
        section.setAttribute("inert", "")
        button.classList.remove("text-white", "dark:text-yellow");
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
        section.removeAttribute("inert");
        button.classList.add("text-white", "dark:text-yellow");
    }
}

document.querySelectorAll("[data-toggle]").forEach(button => {
    button.addEventListener("click", () => {
        const section = document.getElementById(button.dataset.toggle);
        toggleSection(section, button);
    });
});

// Set current year in copyright
const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Scott Kenneth Jackson`;
