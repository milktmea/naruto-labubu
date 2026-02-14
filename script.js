// --------------------
// PHOTO BROWSER
// --------------------

const photos = [
    "itachi.jpeg",
    "IMG_0316.jpg",
    "IMG_6572.jpg",
    "IMG_9433.jpg",
    "IMG_1869.jpg"
];

let currentIndex = 0;
const photoElement = document.getElementById("currentPhoto");

function showPhoto(index) {
    photoElement.style.opacity = 0;

    setTimeout(() => {
        photoElement.src = photos[index];
        photoElement.style.opacity = 1;
    }, 200);
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto(currentIndex);
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto(currentIndex);
}


// --------------------
// SAVE LETTER
// --------------------

function saveLetter() {
    const text = document.getElementById("letterBox").value;
    localStorage.setItem("savedLetter", text);
    alert("Letter Saved 💖");
}


// --------------------
// LOAD SAVED LETTER + FLOATING HEARTS
// --------------------

window.onload = function() {
    const saved = localStorage.getItem("savedLetter");
    if (saved) {
        document.getElementById("letterBox").value = saved;
    }

    createFloatingElements(35);
};


// --------------------
// FLOATING HEARTS & FLOWERS
// --------------------

function createFloatingElements(count) {
    const background = document.querySelector(".background");
    const symbols = ["💖","🌸","💕","🌺","💗","🌷","💞"];

    for (let i = 0; i < count; i++) {
        const elem = document.createElement("div");

        elem.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        elem.style.position = "absolute";
        elem.style.fontSize = `${Math.random() * 30 + 20}px`;
        elem.style.opacity = Math.random() * 0.6 + 0.3;
        elem.style.pointerEvents = "none";

        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * document.body.scrollHeight;
        const speed = Math.random() * 0.3 + 0.1;

        function float() {
            posY -= speed;

            if (posY < -50) {
                posY = document.body.scrollHeight + 50;
                posX = Math.random() * window.innerWidth;
            }

            elem.style.transform = `translate(${posX}px, ${posY}px)`;
            requestAnimationFrame(float);
        }

        float();
        background.appendChild(elem);
    }
}
