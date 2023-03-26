const buttons = document.querySelectorAll(".button");
const thankYou = document.getElementById("_thank_you_card");
const ratingCard = document.getElementById("_rating_card");
const submitButton = document.getElementById("_submit_button");
const rateNumContainer = document.getElementById("_rate_num");

let isRatingSelected = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      if (btn === button) {
        btn.classList.add("active");
        ratingCard.dataset.rating = button.textContent;
        isRatingSelected = true;
      } else {
        btn.classList.remove("active");
      }
    });
  });
});

submitButton.addEventListener("click", () => {
  if (!isRatingSelected) {
    return;
  }

  ratingCard.classList.add("hidden-card");
  thankYou.classList.remove("hidden-card");
  rateNumContainer.textContent = ratingCard.dataset.rating;
});
