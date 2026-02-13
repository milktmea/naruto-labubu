// Photo popup
function openImage(img) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = img.src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

// Save letter
function saveLetter() {
    const text = document.getElementById("letterBox").value;
    localStorage.setItem("savedLetter", text);
    alert("Letter Saved 💖");
}

// Load saved letter & create floating hearts + flowers
window.onload = function() {
    const saved = localStorage.getItem("savedLetter");
    if (saved) {
        document.getElementById("letterBox").value = saved;
    }
    createFloatingElements(30); // number of elements
};

// Floating hearts and flowers
function createFloatingElements(count) {
    const background = document.querySelector(".background");
    const symbols = ["💖", "🌸", "💕", "🌺", "💗", "🌷", "💞"];
    
    for (let i = 0; i < count; i++) {
        const elem = document.createElement("div");
        elem.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        elem.style.position = "absolute";
        elem.style.fontSize = `${Math.random() * 30 + 20}px`;
        elem.style.left = `${Math.random() * 100}%`;
        elem.style.top = `${Math.random() * 100}%`;
        elem.style.opacity = Math.random();
        elem.style.pointerEvents = "none";
        background.appendChild(elem);
        animateElement(elem);
    }
}

function animateElement(elem) {
    const speed = Math.random() * 0.5 + 0.2; // slower speed
    let posY = Math.random() * window.innerHeight; // random start in pixels
    let posX = Math.random() * window.innerWidth;

    elem.style.position = "absolute"; // fix to viewport
    elem.style.top = posY + "px";
    elem.style.left = posX + "px";

    function float() {
        posY -= speed;
        if (posY < -50) { // reset above screen
            posY = window.innerHeight + 50;
            posX = Math.random() * window.innerWidth;
            elem.style.left = posX + "px";
        }
        elem.style.transform = `translate(${0}px, ${posY}px)`;
        requestAnimationFrame(float);
    }
    float();
}

