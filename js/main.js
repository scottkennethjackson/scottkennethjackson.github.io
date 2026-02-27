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
        button.classList.remove("text-white", "dark:text-main");
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
        section.removeAttribute("inert");
        button.classList.add("text-white", "dark:text-main");
    }
}

function closeSection(section, button) {
    if (section.style.maxHeight) {
        section.style.maxHeight = null;
        section.setAttribute("inert", "");
        button.classList.remove("text-white", "dark:text-main");
    }
}

function openSection(section, button) {
    if (!section.style.maxHeight) {
        section.style.maxHeight = section.scrollHeight + "px";
        section.removeAttribute("inert");
        button.classList.add("text-white", "dark:text-main");
    }
}

document.querySelectorAll("[data-toggle]").forEach(button => {
    button.addEventListener("click", () => {
        const section = document.getElementById(button.dataset.toggle);
        const isOpen = !!section.style.maxHeight;

        if (isOpen) {
            closeSection(section, button);
            return;
        }

        document.querySelectorAll("[data-toggle]").forEach(otherButton => {
            const otherSection = document.getElementById(otherButton.dataset.toggle);
            closeSection(otherSection, otherButton);
        });

        openSection(section, button);
    });
});

// Set current year in copyright
const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Scott Kenneth Jackson`;
