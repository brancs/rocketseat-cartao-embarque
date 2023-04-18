const switchCutOuts = document.getElementById("switch-cutouts");
const boardingCard = document.querySelector(".boarding-card");

switchCutOuts.addEventListener("change", (event) => {
  if (event.target.checked && !boardingCard.classList.contains("cut-out")) {
    boardingCard.classList.add("cut-out");
    return;
  }

  boardingCard.classList.remove("cut-out");
});