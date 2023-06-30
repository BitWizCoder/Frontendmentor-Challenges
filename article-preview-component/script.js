// Dom Elements
const shareBtn = document.querySelector(".fa-share");
const shareElements = document.querySelector(".share-element");
const mblIcons = document.querySelector(".mobile-footer");
const author = document.querySelector('.author')


// Share btn
shareBtn.addEventListener("click", () => {
  shareElements.classList.toggle("hide");
  mblIcons.classList.toggle("hide");
  author.classList.toggle("hide-author");

});