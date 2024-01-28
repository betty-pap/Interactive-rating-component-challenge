let yourRating = "";
let ratingPage = document.querySelector('.rating-side');
let thankyouPage = document.querySelector('.thank-you-side');

function updateRating(value) {
  yourRating = value;

  displayRating();
}

function displayRating() {
  document.querySelector ('.js-your-rating').innerHTML = `You selected ${yourRating} out of 5`;

  document.querySelector('.js-submit-button').addEventListener("click", function() {
    ratingPage.style.display = "none";
    thankyouPage.style.display = "grid";
  });
}
