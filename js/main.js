import { outputMessage } from "./terminal.js";

outputMessage();

document.addEventListener("DOMContentLoaded", () => {
    import("./carousel.js").then(module => {
        module.carouselLogic();
    });

    import("./contact-form.js").then(module => {
        module.validateForm();
    });
})

// Collapse/expand sections when heading button is clicked
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
