const text = "\"May harmony has not for me in this world\"";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 30);
    }
}

typingEffect();
