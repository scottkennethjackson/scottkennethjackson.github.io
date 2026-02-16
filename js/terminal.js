export function bootTerminal() {
    const text = " I make things on the internet";
    const speed = 60;
    const bootBlinks = 1;
    
    const terminalInput = document.getElementById("terminal-input");
    const cursor = document.getElementById("cursor");
    
    let i = 0;
    let blinkCount = 0;
    
    function startBootBlink() {
        cursor.classList.add("cursor-blink");
        
        const blinkInterval = setInterval(() => {
            blinkCount++;

            if (blinkCount >= bootBlinks * 2) {
                clearInterval(blinkInterval);
                cursor.classList.remove("cursor-blink");
                cursor.style.opacity = 1;
                setTimeout(typeNextChar, 400);
            }
        }, 500);
    }
    
    function typeNextChar() {
        if (i < text.length) {
            terminalInput.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextChar, speed);
        } else {
            cursor.classList.add("cursor-blink");
        }
    }
    
    startBootBlink();
}
