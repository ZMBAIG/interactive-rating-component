// console.log("test");

const ratingContainer = document.querySelector(".rating-container");
const thankYouState = document.querySelector(".thank-you-state");
const submitButton = document.getElementById("submit");
const dismissButton = document.getElementById("btn-dismiss");
const selectedRating = document.getElementById("rating");
const ratingButtons = document.querySelectorAll(".rating-btn");

submitButton.addEventListener("click", () => {
  thankYouState.classList.remove("hidden");
  ratingContainer.style.display = "none";
});

dismissButton.addEventListener("click", () => {
  thankYouState.classList.add("hidden");
  ratingContainer.style.display = "block";
});

ratingButtons.forEach((element) => {
  element.addEventListener("click", () => {
    selectedRating.innerHTML = element.innerHTML;
  });
});
