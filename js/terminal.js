export function outputMessage() {
    const message = " I make things on the internet";
    const speed = 60;
    const bootBlinks = 1;
    
    const terminalOutput = document.getElementById("terminal-output");
    const cursor = document.getElementById("cursor");
    
    let i = 0;
    let blinkCount = 0;
    
    // Start with the cursor blinking before revealing the message
    function startBlink() {
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
    
    // Type each character of the message with a delay
    function typeNextChar() {
        if (i < message.length) {
            terminalOutput.textContent += message.charAt(i);
            i++;
            setTimeout(typeNextChar, speed);
        } else {
            cursor.classList.add("cursor-blink");
        }
    }
    
    startBlink();
}
