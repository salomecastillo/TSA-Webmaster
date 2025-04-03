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

// Review Slider Navigation (Next and Prev Buttons)
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", function() {
    changeReview(1);
});

prevButton.addEventListener("click", function() {
    changeReview(-1);
});

// chatbot function
function recommendDish() {
  const mood = document.getElementById("mood").value;
  const height = document.getElementById("height").value;
  const animal = document.getElementById("animal").value;

  const recommendations = {
      happy: ["BBQ Jackfruit Sandwich", "Vegan Banana Pancakes", "Zucchini Fritters"],
      sad: ["Mediterranean Chickpea Salad", "Tofu Scramble With Avocado Toast", "Spicy Peanut Noodle Bowl"],
      adventurous: ["Avocado Bruschetta", "Chia Seed Pudding", "Eggplant Parmesan"],
      relaxed: ["Vegan Chocolate Avocado Mousse", "Mushroom & Spinach Risotto", "Crispy Cauliflower Wings"]
  };

  const randomDish = recommendations[mood][Math.floor(Math.random() * recommendations[mood].length)];

  document.getElementById("result").innerHTML = `<h3>Your Recommended Dish:</h3><p>${randomDish}</p>`;
}
