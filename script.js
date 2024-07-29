// responsive navbar
const hamburger = document.querySelector(".menu");
const remove = document.querySelector(".remove");

const showSideBar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};
const hideSideBar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

hamburger.addEventListener("click", showSideBar);
remove.addEventListener("click", hideSideBar);

//

const leftButton = document.getElementById("left-arrow");
const rightButton = document.getElementById("right-arrow");
const cards = document.getElementById("my-cards");
const cardArray = document.getElementsByClassName("card");

let count = 0;
rightButton.addEventListener("click", () => {
  count = (count - 1) % cardArray.length;
  move(count);
});
leftButton.addEventListener("click", () => {
  count = (count -1) % cardArray.length;
  move(count);
});

function move(value) {
  for (let i = 0; i < cardArray.length; i++) {
    cardArray[i].style.transform = `translateX(${value * 100}%)`;
  }
}

// Hide and show paragraph
const addBtns = document.querySelectorAll(".plus-icon");
const minusBtns = document.querySelectorAll(".minus-icon");
const texts = document.querySelectorAll("#para1");

addBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    texts[index].style.display = "flex";
    addBtns[index].style.display = "none";
    minusBtns[index].style.display = "flex";
    
  });
}),
  minusBtns.forEach((btn1, index) => {
    btn1.addEventListener("click", () => {
      texts[index].style.display = "none";
      minusBtns[index].style.display = "none";
      addBtns[index].style.display = "flex";
    });
  });

// const addText = () =>{
//   const text = document.querySelectorAll('#para1');
//   text.style.display = 'flex';
// }
// const removeText = () =>{
//   const text = document.querySelectorAll('#para1');
//   text.style.display = 'none';
// }
// add.addEventListener('click',addText);
// minus.addEventListener('click',removeText);

// function moveLeft() {
//   const cardArray = document.getElementsByClassName("card");
//   cardArray.forEach((e) => {
//     console.log(e);
//     e.style.transform = `translateX(${100}%)`;
//   });
// }
// moveLeft();

// leftButton.addEventListener("click", () => {
//   cards.scrollBy({
//     left: -cards.offsetwidth,
//     behaviour: "smooth",
//   });
// });
// rightButton.addEventListener("click", () => {
//   cards.scrollBy({
//     left: cards.offsetwidth,
//     behaviour: "smooth",
//   });
// });
