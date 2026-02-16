import { bootTerminal } from "./terminal.js";
bootTerminal()

const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© 2023-${currentYear} Scott Kenneth Jackson`;
