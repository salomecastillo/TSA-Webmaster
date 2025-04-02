// Toggle mobile menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Review Box Auto-Slideshow
let reviewIndex = 0;
const reviews = document.querySelectorAll(".review__box");

function showReview(index) {
    if (reviews.length === 0) return; // Ensure reviews exist

    reviews.forEach((review, i) => {
        review.style.display = i === index ? "block" : "none";
    });
}

function changeReview(n) {
    reviewIndex = (reviewIndex + n + reviews.length) % reviews.length;
    showReview(reviewIndex);
}

// Auto-slide reviews every 4 seconds
if (reviews.length > 0) {
    setInterval(() => changeReview(1), 4000);
}

// Initial Display
showReview(reviewIndex);

// Radial Gradient Mouse Effect
document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    document.body.style.background = `
        radial-gradient(circle at ${x}px ${y}px, rgba(4, 170, 109, 0.3), transparent 50%)
    `;
});

// Review Slider Navigation (Next and Prev Buttons)
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", function() {
    changeReview(1);
});

prevButton.addEventListener("click", function() {
    changeReview(-1);
});
