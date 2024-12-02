// gallery-lightbox.js
const lightbox = document.getElementById("lightbox");
const expandedImg = document.getElementById("expandedImg");
const captionText = document.getElementById("caption");

document.querySelectorAll(".gallery .img img").forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        expandedImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

document.querySelector(".close").addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});