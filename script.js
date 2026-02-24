const slides = document.querySelector(".slides");
const cards = document.querySelectorAll(".service-card");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let index = 0;
const slideCount = cards.length;

function updateSlide() {
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// RIGHT ARROW → next
rightBtn.addEventListener("click", () => {
    index++;
    if (index >= slideCount) {
        index = 0; // loop back to first
    }
    updateSlide();
});

// LEFT ARROW → previous
leftBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = slideCount - 1; // loop to last
    }
    updateSlide();
});