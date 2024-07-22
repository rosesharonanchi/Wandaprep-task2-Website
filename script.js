const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".left");
const cards = document.querySelector(".cards");

leftButton.addEventListener("click", () => {
  cards.scrollBy({
    left: -cards.offsetwidth,
    behaviour: "smooth",
  });
});
rightButton.addEventListener("click", () => {
  cards.scrollBy({
    left: cards.offsetwidth,
    behaviour: "smooth",
  });
});

